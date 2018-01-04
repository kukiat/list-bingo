import React, { Component } from 'react'
import CheckBox from '../component/CheckBox'
export default class TabBar extends Component{
  constructor() {
    super()
    this.state = {
      pageNumber: 1
    }
    this.changePage = this.changePage.bind(this)
  }

  changePage(page) {
    this.setState({
      pageNumber: page
    })
  }

  render() {
    const pageNumber = this.state.pageNumber
    return (
      <div>
        <div className="tabs">
          <ul>
            <li className="is-active" onClick={ ()=>this.changePage(1) }><a>1-100</a></li>
            <li className="" onClick={ ()=>this.changePage(2) }><a>101-200</a></li>
            <li className="" onClick={ ()=>this.changePage(3) }><a>201-300</a></li>
            <li className="" onClick={ ()=>this.changePage(4) }><a>301-400</a></li>
            <li className="" onClick={ ()=>this.changePage(5) }><a>401-500</a></li>
          </ul>
        </div>
        <div className="columns">
          { pageNumber }
          <div className="column is-2"><CheckBox/></div>
          <div className="column is-2"><CheckBox/></div>
          <div className="column is-2"><CheckBox/></div>
          <div className="column is-2"><CheckBox/></div>
          <div className="column is-2"><CheckBox/></div>
          
        </div>
      </div>
    )
  }
}

