import firebase from 'firebase'
import React, { Component } from 'react'

import DashBoard from './DashBoard'
import SearchBar from './SearchBar'

class TabBar extends Component {
  state = {
    pageNumber: 0,
    listEp: [],
    page: []
  }

  componentDidMount() {
    const ref = firebase.database().ref('/list')
    ref.on('value', (s)=>{
      let item = new Array(parseInt(s.val().length/100)+1)
      let pList = []
      s.val().map((ep, index)=>{
        if(index%100==0 && index!=0) pList= [] 
        pList.push(ep)
        item[parseInt(index/100)] = pList
      })
      const tab = []
      for(let i=0; i<Math.ceil(s.val().length / 100);i++) tab.push({detail: `${i*100+1}-${i*100+100}`})
      this.setState({ 
        listEp: item,
        page: tab
      })
    })
  }

  changePage = (page) => {
    this.setState({ pageNumber: page })
  }

  handleSearch = (text) => {
    console.log(text)
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
