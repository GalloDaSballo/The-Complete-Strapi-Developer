import React from 'react'

function PortfolioItem(props) {
  return (
    <div className="PortfolioItem" style={{background: props.background}}>
      <div className="PortfolioItem__textBox">
        <h1>{props.title}</h1>
        <h2>{props.description}</h2>
      </div>
    </div>
  );
}

export default PortfolioItem;
