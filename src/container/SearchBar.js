import React,{Component} from 'react'
import { Input } from 'antd';
const Search = Input.Search;

class SearchBar extends Component {
  render() {
    return (
      <Search
        placeholder="Search Episode"
        onChange={ (e)=>this.props.handleSearch(e.target.value) }
        style={{ 
          width: 300,
          height: 30
        }}
      />
    )
  }
}

export default SearchBar