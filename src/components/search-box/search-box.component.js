import React, { Component } from 'react';
import './search-box.styles.css';

class SearchBox extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { placeholder, handleChange } = this.props;
    return (
      <div className="search">
        <input type="search" placeholder={placeholder} onChange={handleChange}/>
      </div>
    )
  }
}

export default SearchBox;
