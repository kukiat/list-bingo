import React,{Component} from 'react'
import ListItem from '../component/ListItem'

export default class Narrow extends Component {
  render() {
    return (
      <div className="column is-narrow">
        <div className="box size-box">
          <p className="title is-6"> 1-20 </p>
          <ListItem/>
        </div>
      </div>
    )
  }
}