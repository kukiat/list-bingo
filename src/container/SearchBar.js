import React,{Component} from 'react'

class SearchBar extends Component {
  
  render() {
    return (
      <div className="field mgt20">
        <div className="control">
          <input onChange={ (e)=>this.props.handleSearch(e.target.value) } className="input" type="text" placeholder="Search Episode" />
        </div>
      </div>
    )
  }
}

export default SearchBar