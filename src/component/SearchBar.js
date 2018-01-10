import { Input } from 'antd';
import React from 'react'

const Search = Input.Search;

function SearchBar(props) {
  return (
    <Search
      placeholder="Search Episode"
      onChange={ (e) => props.handleSearch(e.target.value) }
      style={{ 
        width: 300,
        height: 30
      }}
    />
  )
}

export default SearchBar