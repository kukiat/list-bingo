import React,{Component} from 'react'
import ListItem from '../component/ListItem'

export default class Narrow extends Component {
  static defaultProps = {
    rowItem: []
  }

  render() {
    const {rowItem} = this.props
    return (
      <div className="column is-narrow">
        <div className="box size-box">
          <p className="title is-6"> {rowItem[0].ep}-{rowItem[rowItem.length-1].ep} </p>
          {
            rowItem.map((item)=>
              <ListItem key={ item.ep } item={item}/>
          )
          }
        </div>
      </div>
    )
  }
}