import firebase from 'firebase'
import React, { Component } from 'react'

import SearchBar from './SearchBar'
import TabBar from './TabBar'

class Page extends Component {
  state = {
    pageNumber: 0,
    listEp: [],
    page: [],
    textSearch:''
  }

  componentDidMount() {
    const ref = firebase.database().ref('/list')
    ref.on('value', (s)=>{
      const data = this.modifyData(s.val())
      this.setState({ 
        listEp: data.item,
        page: data.tab,
        allData: data
      })
    })
  }

  modifyData(listData) {
    let item = new Array(parseInt(listData.length/100)+1)
    let pList = []
    listData.map((ep, index)=>{
      if(index%100==0 && index!=0) pList= [] 
      pList.push(ep)
      item[parseInt(index/100)] = pList
    })
    const tab = []
    const tabLength = Math.ceil(listData.length / 100)
    for(let i=0; i<tabLength; i++){
      if(i==tabLength-1){
        tab.push({detail: `${i*100+1}-${listData.length}`})
      }else{
        tab.push({detail: `${i*100+1}-${i*100+100}`})
      }
    }
    return {item, tab}
  }

  changePage = (page) => {
    this.setState({ pageNumber: page })
  }

  handleSearch = (text) => {
    const dataWithQuery = this.querySearch(text)
    const data = this.modifyData(dataWithQuery)
    this.setState({ 
      listEp: data.item,
      page: data.tab,
      textSearch: text,
      pageNumber: 0
    })
  }

  querySearch(text) {
    let resultDataSearch =[]    
    const ref = firebase.database().ref('/list')    
    if(text === ''){
      ref.on('value', (s)=>{
        resultDataSearch = s.val()
      })
    }else{
      ref.on('value', (s)=>{
        s.val().map((item)=>{
          const day = item.date.day.toString()
          const month = item.date.month.toString()
          const year = item.date.year.toString()
          const ep = item.ep.toString()
          if(text === day || text === month || text === year || text=== ep) {
            resultDataSearch.push(item)
          }
        })
      })
    }
    return resultDataSearch
  }

  queryStatus = (ep) => {
    let key = ep-1
    let status
    const ref = firebase.database().ref('/list/'+key).child('status')
    ref.on('value', (s)=>{
      status = s.val()
    })
    ref.set(!status)
  }

  changeStatus = (ep) => {
    this.queryStatus(ep)
    const dataWithQuery = this.querySearch(this.state.textSearch)
    const data = this.modifyData(dataWithQuery)
    this.setState({ 
      listEp: data.item,
      page: data.tab,
    })
  }

  render() {
    const { pageNumber, listEp, page } = this.state
    return (
      <div>
        <SearchBar handleSearch={this.handleSearch}/>
        <TabBar 
          page={page} 
          pageNumber={pageNumber} 
          changePage={this.changePage}
          listEp={listEp[pageNumber]} 
          changeStatus={this.changeStatus}
        />  
      </div>
    )
  }
}

export default Page
