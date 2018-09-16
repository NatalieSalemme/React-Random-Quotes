import React from 'react';
import './App.css';
import { Quotes } from './Quotes';

export class QuoteBox extends React.Component {
  render() {
    return (
      <div >
            <Quotes />
          <p style={{fontSize: 9, textAlign: 'center'}}>By Natalie Salemme</p>
      </div>
    );
  }
};
