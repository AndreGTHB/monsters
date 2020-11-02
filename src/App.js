// this.state dajemy do komponentu cardlist -> monster={this.state.monsters} ktora otrzymuje to jako PROP
//this. state uzywamy jak cos sie zmienia w aplikacji, zmienia sie state wiec zmieni sie prop w cardlist

import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users") // pobiera obiekt
      .then((response) => response.json()) // zwraca te reposnse, nie rozumiem do konca, i zamienia na format json. mozna na inne np response.text
      .then((users) => this.setState({ monsters: users })); // users czyli nasze response w formacie json przypisujemy do obiektu
  }
  /* props.children. 
Props to CardList monsters={this.state.monsters} 
monsters [] = monster.id, monster.name itp itd


children to wszystko pomiedzy cardlist czyli nic nie ma


*/
  render() {
    const { monsters, searchField } = this.state; // robimy kopie naszego state, zeby jego nie zmieniac
    const filteredMonsters = monsters.filter((monster) => // wez potwory i filtruj, zmien ich nazwe na male literki, zostaw te ktore zawieraja(inlcudes) wpisane w searchfield - szukajka
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );

    /* odpowiednik:
    const monsters = this.state.monsters;
    const searchField = this.state.searchField;
    */

    return (
      <div className="App">
        <SearchBox
        placeholder='search monsters'
        handleChange={(e) => this.setState({ searchField: e.target.value })}
        />

        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
