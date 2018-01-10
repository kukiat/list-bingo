import React, {Component} from 'react'
import Narrow from './Narrow'
import {Row} from 'antd'
export default class DashBoard extends Component{
  static defaultProps = {
    listEp: []
  }
  
  render() {
    const {listEp} = this.props
    let item = new Array(Math.ceil(listEp.length/20))
    let pList = []
    listEp.map((ep, i) => {
      if(i%20==0 && i!=0) pList= []
      pList.push(ep)
      item[parseInt(i/20)] = pList
    })
  
    return(
      <div className="gutter-example mgl-20">
        <Row gutter={50}>
          {item.map((i,index)=>
            <Narrow changeStatus={this.props.changeStatus} key={index} rowItem={i}/>
          )
          }
        </Row>
      </div>
    )
  }
}