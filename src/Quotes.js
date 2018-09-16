import React from 'react';
import './App.css';

const colors = ['#776d6b', '#ef9d8d', '#f9a366', '#ffe799', '#c5ff63', '#62ff9e', '#61fffc',
'#619aff', '#a89bff', '#a921ff', '#ffaaf0', '#ad1353', '#182968'];
const quote = [
'Life is 10% what happens to you and 90% how you react to it',
'Optimism is the faith that leads to achievement. Nothing can be done without the hope and confidence',
'Good, better, best. Never let it rest. \'Til your good is better and your better is best',
'With the new day comes new strength and new thoughts',
'Failure will never overtake me if my determination to succeed is strong enough',
'It always seems impossible until it\'s done',
'Change your life today. Don\'t gamble on the future, act now, without delay',
'Set your goals high, and don\'t stop til you get there',
'It does not matter how slowly you go, as long as you do not stop',
'You can\'t cross the sea merely by standing and staring at the water',
'You will never win if you never begin',
'If you can dream it, you can do it',
'Accept the challenges so that you can feel the exhiliration of victory'
];
const author = ['Charles R Swindoll', 'Helen Keller', 'St. Jerome', 'Eleanor Roosevelt', 'OG Mandino',
'Nelson Mandela', 'Simone de Beauvoir', 'Bo Jackson', 'Confucius', 'Rabindranath Tagore',
'Helen Rowland', 'Walt Disney', 'George S. Patton'
];


export class Quotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: 'Only I can change my life, no one can do it for me',
      author: 'Carol Burnett',
      bgColor: 'lightblue',
      randomIndex: 0
    }
    this.random = this.random.bind(this);
  }
  random() {
    this.setState({
      randomIndex: Math.floor(Math.random() * 13),
      quote: quote[this.state.randomIndex],
      author: author[this.state.randomIndex],
      bgColor: colors[this.state.randomIndex]
    });
  }
  render() {
    return (
      <div id="quote-box" style={{backgroundColor: this.state.bgColor}}>
        <div>
        <div id="text">{this.state.quote}</div>
         <p id="author" style={{float: 'right', fontSize: 10}}>{this.state.author}</p>
          <div className="flex-row">
            <div className="social-media-container">
              <a href="https://twitter.com/intent/retweet?tweet_id=463440424141459456" target="blank">
          <img
            id="tweet-quote"
            style={{height: 20, width: 20}}
            src={ require ('./images/twitter.jpg')}
            alt="Twitter icon" />
          </a>
          <a href="https://www.tumblr.com" target="blank">
          <img
            style={{height: 20, width: 20}}
            src= { require ('./images/tumblr.png')}
            alt="Tumblr icon"/>
          </a>
            </div>
            <div className="quote-container">
              <button onClick={this.random} id="quote-button" style={{color: this.state.bgColor}}>New Quote</button>
        </div>
          </div>
      </div>
     </div>
    );
  }
}
