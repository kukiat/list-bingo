import React, { Component } from 'react'
import DashBoard from './DashBoard'
import firebase from 'firebase'

export default class TabBar extends Component{
  state = {
    pageNumber: 0,
    listEp: []
  }

  componentDidMount() {
    console.log('oooo')
    const ref = firebase.database().ref('/list')
    ref.on('value', (s)=>{
      let item = new Array(parseInt(s.val().length/100)+1)
      let pList = []
      s.val().map((ep, index)=>{
        if(index%100==0 && index!=0) pList= [] 
        pList.push(ep)
        item[parseInt(index/100)] = pList
      })
      this.setState({listEp: item})
    })
  }

  changePage = (page) => {
    this.setState({
      pageNumber: page
    })
  }

  render() {
    console.log('render')
    const { pageNumber, listEp } = this.state
    return (
      <div>
        <a className="button is-dark">เพิ่มตอน</a>
        <div className="tabs">
          <ul>
            <li className= { pageNumber===0? "is-active" : "" } onClick={ ()=>this.changePage(0) }><a>1-100</a></li>
            <li className= { pageNumber===1? "is-active" : "" } onClick={ ()=>this.changePage(1) }><a>101-200</a></li>
            <li className= { pageNumber===2? "is-active" : "" } onClick={ ()=>this.changePage(2) }><a>201-300</a></li>
            <li className= { pageNumber===3? "is-active" : "" } onClick={ ()=>this.changePage(3) }><a>301-400</a></li>
            <li className= { pageNumber===4? "is-active" : "" } onClick={ ()=>this.changePage(4) }><a>401-500</a></li>
          </ul>
        </div>
        <DashBoard listEp={listEp[pageNumber]} {...this.props}/>
      </div>
    )
  }
}

