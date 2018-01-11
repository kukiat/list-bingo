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
        width:130,
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
    <Col className="gutter-row" span={8} 
      xs={{ span: 13, offset: 0 }}
      sm={{ span: 9, offset: 0 }}
      md={{ span: 7, offset: 0 }}
      lg={{ span: 5, offset: 0 }}
      xl={{ span: 4, offset: 0 }}
    >
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