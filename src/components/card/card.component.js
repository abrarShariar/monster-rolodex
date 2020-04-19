import React, { Component } from 'react';
import './card.styles.css';

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { monster } = this.props;
    return (
      <div className="card-container">
        <img src={`https://robohash.org/${monster.id}?set=set2`}/>
      <h1>{monster.name}</h1>
    <h2>{monster.email}</h2>
</div>
)
}
}


export default Card;
