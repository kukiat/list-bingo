import firebase from 'firebase'
import React, { Component } from 'react'

import DashBoard from './DashBoard'
import SearchBar from './SearchBar'

class TabBar extends Component {
  state = {
    pageNumber: 0,
    listEp: [],
    page: [],
    allData:[]
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
    for(let i=0; i<Math.ceil(listData.length / 100);i++) 
      tab.push({detail: `${i*100+1}-${i*100+100}`})
    return {item, tab}
  }

  changePage = (page) => {
    this.setState({ pageNumber: page })
  }

  handleSearch = (text) => {
    const resultDataSearch =[]
    if(text === '') {
      this.setState({ 
        listEp: this.state.allData.item,
        page:this.state.allData.tab
      })
    }else {
      const ref = firebase.database().ref('/list')
      ref.on('value',(s)=>{
        s.val().map((item)=>{
          const day = item.date.day.toString()
          const month = item.date.month.toString()
          const year = item.date.year.toString()
          const ep = item.ep.toString()
          if(text === day || text === month || text === year || text=== ep) {
            resultDataSearch.push(item)
          }
        })
        const data = this.modifyData(resultDataSearch)
        this.setState({ 
          listEp: data.item,
          page: data.tab
        })
      })
    }
  }

  render() {
    const { pageNumber, listEp, page } = this.state
    const allTabBar = page.map((data, index)=>
      <li key={data.detail} className= { pageNumber===index? "is-active" : "" } onClick={ ()=>this.changePage(index) }>
        <a>{data.detail}</a>
      </li>
    )
    return (
      <div>
        <a className="button is-dark">เพิ่มตอน</a>
        <SearchBar handleSearch={this.handleSearch}/>
        <div className="tabs">
          <ul>
            {allTabBar}
          </ul>
        </div>
        <DashBoard listEp={listEp[pageNumber]} {...this.props}/>
        
      </div>
    )
  }
}

export default TabBar
