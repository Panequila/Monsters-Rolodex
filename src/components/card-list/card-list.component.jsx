import { Component } from "react";
import { useState, useEffect } from "react";

import Card from "../card/card.component";
import "./card-list.styles.css";

//passing the property as a parameter
const CardList = (props) => {
  //or we could pass the "monsters" as the parameter and delete the line below.. same thing
  //this is easier to read for me
  const { monsters } = props;

  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <Card monster={monster}></Card>;
      })}
    </div>
  );
};

// class CardList extends Component {
//   render() {
//     const { monsters } = this.props;

//     return (
//       <div className="card-list">
//         {monsters.map((monster) => {
//           return <Card monster={monster}></Card>;
//         })}
//       </div>
//     );
//   }
// }

//export allows other files to import this file
export default CardList;
