import React,{Component} from 'react'
import firebase from 'firebase'

export default class Narrow extends Component {
  static defaultProps = {
    rowItem: []
  }

  render() {
    const { rowItem } = this.props
    const allListItem = rowItem.map((item) => (
      <label onClick={()=>this.props.changeStatus(item.ep)} key={item.ep} className={item.status?"checkbox checkbox-list-disable":"checkbox checkbox-list-enable "}>
        EP {item.ep} {item.date.day}/{item.date.month}/{item.date.year}
      </label> 
    )
    )
    return (
      <div className="column is-narrow">
        <div className="box size-box">
          <p className="title is-6"> { rowItem[0].ep }-{ rowItem[rowItem.length-1].ep } </p>
          { allListItem }
        </div>
      </div>
    )
  }
}