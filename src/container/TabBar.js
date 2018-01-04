import React, { Component } from 'react'

export default class TabBar extends Component{
  render() {
    return (
      <div className="tabs">
        <ul>
          <li className="is-active"><a>1-100</a></li>
          <li><a>101-200</a></li>
          <li><a>201-300</a></li>
          <li><a>301-400</a></li>
          <li><a>401-500</a></li>
        </ul>
        
      </div>
    )
  }
}

