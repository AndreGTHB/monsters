import React from "react";
import {Card} from '../card/card.component';
import "./card-list.styles.css";

export const CardList = props => 
   (
    <div className="card-list">
      {props.monsters.map(monster => (
        <Card key={monster.id} monster={monster}/> 
      ))}
    </div>
  );

/* monster w mapie to pojedynczy "potwor, indeks obiektu", przekazujemy go jako prop w Card



/*
<CardList monsters={this.state.monsters}/> w app.js

monsters to prop z app.js ktory przekazujemy do card-list -> Cardlist = props = monsters
props =

monster[]
monster.id, monster.email, monster.name

*/