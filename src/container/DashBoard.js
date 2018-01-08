import React, {Component} from 'react'
import Narrow from './Narrow'

export default class DashBoard extends Component{
  static defaultProps = {
    listEp: []
  }
  
  render() {
    const {listEp} = this.props
    let item = new Array(Math.ceil(listEp.length/20))
    let pList = []
    listEp.map((ep,i)=>{
      if(i%20==0 && i!=0) pList= []  
      pList.push(ep)
      item[parseInt(i/20)] = pList
    })
  
    return(
      <div className="columns">
        {item.map((i,index)=>
          <div className="column is-2">
            <Narrow key={i+index} rowItem={i}/>
          </div>
         )
        }
      </div>
    )
  }
}