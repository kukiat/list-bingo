import {Card, Col, Tag} from 'antd'
import React from 'react'

export default function CardEp(props){
  const { rowItem } = props
  const allListItem = rowItem.map((item) => 
    <Tag 
      key={ item.ep }
      color={item.status? "magenta": "blue"}
      onClick={() => props.changeStatus(item.ep)} 
      className={item.status? "checkbox-list-disable": "checkbox-list-enable "}
      style={{
        width:127,
        height:20,
        fontSize:14,
        marginTop:4
      }}
    >
      EP {item.ep} {item.date.day}/{item.date.month}/{item.date.year}
    </Tag>
  )
  const cardTitle = `${rowItem[0].ep}-${rowItem[rowItem.length-1].ep}`
  return (
    <Col className="gutter-row" span={4}>
      <Card 
        title={cardTitle} 
        style={{ 
          width: 180 
        }}
      >
        { allListItem }
      </Card>
    </Col>
  )
}

CardEp.defaultProps ={
  rowItem: []
}