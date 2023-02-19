import { Component } from "react";
import { useState, useEffect } from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import logo from "./logo.svg";
import "./App.css";

//The App using the Functional Component
const App = () => {
  console.log("render");
  //initalizing the searchFieldValue with an empty string in the useState("")
  const [searchField, setSearchField] = useState(""); //[value,setValue]
    //initalizing the monsters array with an empty array in the useState([])
  const [monsters, setMonsters] = useState([]);
  //initializing the filteredMonsters with monsters, incase the monsters change. but it doesn't really matter.
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  
  //useEffect Hook takes two arguments, the call-back function and an array of dependecies (stateValues or propValues)
  //whenever these values change, the call-back function gets called.
  //We leave the array empty so that we call it once only when the app mounts to fetch the users and that's it.
  //we put the fetch method inside the useEffect because if we didn't it would be called infinitely..
  //  and this happens because the JSON data is assigned to a different part in our memory each time it's fetched
  //  so react thinks it's a new data each time and keeps rerendering infinitely
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) =>response.json()
      //after we get the users we call the setMonsters useState and to pass the new users.
      .then((users) => setMonsters(users))
    );
  }, []);

  //updating filteredMonsters in useEffect for better optimization of the app.
  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
    console.log("effect is fired");
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
        className="monsters-search-box"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

// //The App using the Class Component

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }
//   //LifeCycle.. runs after render()
//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
//       response.json().then((users) =>
//         this.setState(
//           () => {
//             return {
//               monsters: users,
//             };
//           },
//           //call back function, runs after doing the setState
//           () => {
//             console.log(this.state);
//           }
//         )
//       )
//     );
//   }

//   //writing the function outside of render
//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//     //so we don't have to write "this" before the variables each time we call them
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     //returns the element of the array the meets the condition
//     const filteredMonsters = monsters.filter(
//       (monster) => {
//         return monster.name.toLocaleLowerCase().includes(searchField);
//       }
//     );
//     console.log(filteredMonsters);

//     return (
//       <div className="App">
//       <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox
//           onChangeHandler={onSearchChange}
//           placeholder="search monsters"
//           className="monsters-search-box"
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
