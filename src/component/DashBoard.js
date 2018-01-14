import {Row} from 'antd'
import React, {Component} from 'react'

import CardEp from './CardEp'

export default function DashBoard(props){
  const { listEp, changeStatus } = props
  const item = createRow(listEp)
  return (
    <div className="gutter-example mgl-20">
      <Row gutter={50}>
        {
          item.map((i,index)=> 
            <CardEp 
              changeStatus={changeStatus} 
              key={`${Object.keys(item)[index]}-${i[0].id}`} 
              rowItem={i}
            />
          )
        }
      </Row>
    </div>
  )
}

function createRow(listEp) {
  let item = new Array(Math.ceil(listEp.length/20))
  let pList = []
  listEp.map((ep, i) => {
    if(i%20==0 && i!=0) pList= []
    pList.push(ep)
    item[parseInt(i/20)] = pList
  }) 
  return item
}

DashBoard.defaultProps = {
  listEp: []
}
