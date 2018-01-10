import React, {Component} from 'react'
import { Tabs, Button } from 'antd';
import DashBoard from './DashBoard'

const TabPane = Tabs.TabPane;

class TabBar extends Component {
  static defaultProps = {
    page: []
  }
  render() {
    const { 
      pageNumber, 
      page, 
      changePage,
      listEp,
      changeStatus
    } = this.props
    const allTabBar = page.map((data, index)=>
      <TabPane 
        tab={data.detail} 
        aria-selected={ pageNumber===index? "true" : "false" } 
        key={index} 
      >
        <DashBoard listEp={listEp} changeStatus={changeStatus}/>
      </TabPane>
    )
    return (
      <Tabs onChange={ (page)=>changePage(page)}>
        {allTabBar}
      </Tabs>
    )
  }
}

export default TabBar