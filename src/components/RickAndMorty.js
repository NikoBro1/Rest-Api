import React from 'react';
import './RickAndMorty.css';

function RickAndMorty(props) {
  return (
    <div className="RickAndMorty-list">
      {props.items.map((item) => (
        <div className="RickAndMorty-Pic" key={item.id}>
          <img src={item.image} alt={item.name} className="RickAndMorty-image" />
          <h3>{item.name}</h3>
          <p>Status: {item.status}</p>
          <p>Created: {new Date(item.created).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
}

export default RickAndMorty;
