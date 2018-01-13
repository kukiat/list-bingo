import {Row} from 'antd'
import React, {Component} from 'react'

import CardEp from './CardEp'

export default function DashBoard(props){
  const { listEp, changeStatus } = props
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
          <CardEp changeStatus={changeStatus} key={i.id} rowItem={i}/>
        )
        }
      </Row>
    </div>
  )
}

DashBoard.defaultProps = {
  listEp: []
}