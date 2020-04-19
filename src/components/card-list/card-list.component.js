import React, { Component } from 'react';
import Card from '../card/card.component';
import './card-list.styles.css';

class CardList extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map(el => <Card monster={el}/>)}
      </div>
    )
  }
}

export default CardList;
