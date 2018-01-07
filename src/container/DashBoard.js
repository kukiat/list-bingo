import React, {Component} from 'react'
import Narrow from './Narrow'

export default class DashBoard extends Component{
  static defaultProps = {
    listEp: []
  }
  render() {
    const {listEp} = this.props || []
    // let item = new Array(parseInt(listEp.length/25)+1)
    // listEp.map((ep,i)=>{
    //   let pList = []
    //   listEp.map((ep, index)=>{
    //     if(index%100==0 && index!=0) pList= []  
    //     pList.push(ep)
    //     item[parseInt(index/100)] = pList
    //   })
    // })
    console.log(listEp)
    return(
      <div className="columns">
          <div className="column is-2"><Narrow/></div>
          <div className="column is-2"><Narrow/></div>
          <div className="column is-2"><Narrow/></div>
          <div className="column is-2"><Narrow /></div>
          <div className="column is-2"><Narrow /></div>
          
        </div>
    )
  }
}