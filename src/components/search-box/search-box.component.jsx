import { Component } from "react";
import { useState, useEffect } from "react";

import "./search-box.styles.css";

const SearchBox = ({className, placeholder, onChangeHandler}) => {
  return (
    <input
      //giving a base/general styling for the search box, and the option for specific styling which will override the base
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    ></input>
  );
};

// class SearchBox extends Component {
//   render() {
//     return (
//       <input
//       //giving a base/general styling for the search box, and the option for specific styling which will override the base
//         className={`search-box ${this.props.className}`}
//         type="search"
//         placeholder={this.props.placeholder}
//         onChange={this.props.onChangeHandler}
//       ></input>
//     );
//   }
// }

export default SearchBox;
