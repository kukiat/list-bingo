import firebase from 'firebase'
import React, { Component } from 'react'

import {Button} from 'antd'
import SearchBar from '../component/SearchBar'
import TabBar from '../component/TabBar'

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
      })
    })
  }

  modifyData(data) {
    const listData = Object.keys(data).map((key) => Object.assign(data[key], { id: key }))
    let item = new Array(parseInt(listData.length/100)+1)
    let pList = []
    listData.map((ep, index) => {
      if(index%100==0 && index!=0) pList= [] 
      pList.push(ep)
      item[parseInt(index/100)] = pList
    })
    const tab = []
    const tabLength = Math.ceil(listData.length / 100)
    for(let i=0; i<tabLength; i++) {
      if(i==tabLength-1) {
        tab.push({detail: `${i*100+1}-${listData.length}`})
      }else{
        tab.push({detail: `${i*100+1}-${i*100+100}`})
      }
    }
    return { item, tab }
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
    let resultDataSearch = {}  
    const ref = firebase.database().ref('/list')    
    if(this.isBlank(text)){
      ref.on('value', (s) => resultDataSearch = s.val())
    }else{
      ref.on('value', (s)=>{
        const value = s.val()
        Object.keys(value).map((key)=>{
          const item = value[key]
          const day = item.date.day.toString()
          const month = item.date.month.toString()
          const year = item.date.year.toString()
          const ep = item.ep.toString()
          if(text === day || text === month || text === year || text=== ep) 
            resultDataSearch[key] = item
        })
      })
    }
    return resultDataSearch
  }

  isBlank = (str) => {
    return (0 === str.length || /^\s*$/.test(str))
  }

  updateStatus = (id) => {
    let status
    const ref = firebase.database().ref('/list/'+id).child('status')
    ref.on('value', (s) => status = s.val())
    ref.set(!status)
  }

  changeStatus = (id) => {
    this.updateStatus(id)
    const dataWithQuery = this.querySearch(this.state.textSearch)
    const data = this.modifyData(dataWithQuery)
    this.setState({ 
      listEp: data.item,
      page: data.tab,
    })
  }

  addEp = () => {
    const ref = firebase.database().ref('/list')
    let id = 0
    let month = 0
    let year = 0
    let day = 0
    let ep =0
    ref.once('value', (s)=>{
      const value = s.val()
      let lastEp = Object.values(value)[Object.keys(value).length-1]
      month = lastEp.date.month
      day = lastEp.date.day
      year = lastEp.date.year
      ep = lastEp.ep +1
      day+=7
      if(month==1 || month==3 || month== 5 || month== 7 || month==8 || month==10 || month==12) {
        if(day >31) {
          day-=31
          month+=1
        }
      }else if(month==4 || month==6 || month==9 || month==11){
        if(day >30) {
          day-=30
          month+=1
        }
      }else {
        if(year == 2012 || year==2016){
          if(day>29) {
            day-=29
            month+=1
          }
        }else{
          if(day>28) {
            day-=28
            month+=1
          }
        }
      }
      if(month>12){
        month=1
        year+=1
      }
    })
    ref.push({ 
      status: false,
      date : {
        month,year,day
      },
      ep
    })
    this.setState({ textSearch: '' }) 
  }

  render() {
    const { pageNumber, listEp, page } = this.state
    return (
      <div>
        <Button type="primary" onClick={this.addEp}>เพิ่มตอน</Button>
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
