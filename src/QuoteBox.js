import React from 'react';
import './App.css';
export class QuoteBox extends React.Component {
  render() {
    return (
      <div style={{textAlign: 'center'}} >
          <h1>Random Quote Machine</h1>
          <div style={{backgroundColor: "#FF0000"}}>red</div>
            <div id="quote-box">
              <p id="text">Quote Goes Here</p>
              <p id="author">-Author Goes Here</p>
                <div className="flex-row">
                  <div style={{border: "2px solid red"}}>
                <img style={{height: 20, width: 20}}
                  src={ require ('./images/twitter.jpg')} />
                  <img style={{height: 20, width: 20}}
                    src= { require ('./images/facebook.png')} />
                  </div>
                  <div style={{border: "2px solid orange"}}>
                <button id="new-quote" style={{backgroundColor: pink}}>New Quote</button>
              </div>
                </div>
            </div>
          <p style={{fontSize: 7}}>By Natalie Salemme</p>
      </div>
    );
  }
};
