import React, {Component} from 'react'

class TabBar extends Component {
  static defaultProps = {
    page: []
  }
  render() {
    const { pageNumber, page, changePage} = this.props
    const allTabBar = page.map((data, index)=>
      <li key={data.detail} className= { pageNumber===index? "is-active" : "" } onClick={ ()=>changePage(index) }>
        <a>{data.detail}</a>
      </li>
    )
    return (
      <div className="tabs">
        <ul>
          {allTabBar}
        </ul>
      </div>
    )
  }
}

export default TabBar