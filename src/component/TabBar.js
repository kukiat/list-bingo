import { Tabs } from 'antd';
import React, {Component} from 'react'

import DashBoard from './DashBoard'

const TabPane = Tabs.TabPane;

function TabBar(props) {
  const { 
    pageNumber, 
    page, 
    changePage,
    listEp,
    changeStatus
  } = props
  const allTabBar = page.map((data, index)=>
    <TabPane 
      tab={ data.detail } 
      aria-selected={ pageNumber===index ? "true" : "false" } 
      key={ index } 
    >
      <DashBoard listEp={listEp} changeStatus={ changeStatus }/>
    </TabPane>
  )

  return (
    <Tabs onChange={ (page)=>changePage(page)} animated={false}>
      {allTabBar}
    </Tabs>
  )
}

TabBar. defaultProps = {
  page: []
}

export default TabBar