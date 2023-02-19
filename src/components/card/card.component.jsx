import { Component } from "react";
import { useState, useEffect } from "react";

import "./card.styles.css";

const Card = (props) => {
  const { name, email, id } = props.monster;

  return (
    <div className="card-container" key={id}>
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      ></img>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

// class Card extends Component {
//   render() {
//     //i really don't understand how this works
//     const { name, email, id } = this.props.monster;
//     //console.log(name);
//     return (
//       <div className="card-container" key={id}>
//         <img
//           alt={`monster ${name}`}
//           src={`https://robohash.org/${id}?set=set2&size=180x180`}
//         ></img>
//         <h2>{name}</h2>
//         <p>{email}</p>
//       </div>
//     );
//   }
// }

export default Card;
