import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './components/Header.js';
import Input from './components/Input.js';
import Result from './components/Result.js';
const words = require('an-array-of-english-words');

class App extends React.Component {
    
  state = {
      input: "",
      words: "",
      longestWord: "",
      definition: "",
      author: ""
  }
    
  submit = async (e) => {
      e.preventDefault();
      
      let actualInput = e.target.elements.words.value;
      let Regex = new RegExp("[" + actualInput + "]", "g");
      console.log(words);
      
      this.setState({
         input: actualInput,
         words: words,
         
      });
      
      /*var badLetters = /[gkmqvwxz]/;*/
      var longestWord = "";
      
      for(var testWord of words) {
          if(testWord.length <= longestWord.length){
              continue;
          }
          
          if(testWord.match(Regex)){
              continue;
          }
          
          longestWord = testWord;
          
      }
      
      this.setState({
          longestWord: longestWord,
      })
      
      /*var API_KEY;
      var api_call = await fetch(`https://api.wordnik.com/v4/word.json/${this.state.longestWord}/definitions?limit=200&includeRelated=false&useCanonical=false&includeTags=false&api_key=${API_KEY}`);
      var data = await api_call.json();
      
      this.setState({
          definition: data[0].text,
          author: data[0].attributionText,
      });
      
      console.log(this.state.definition + "\n" + this.state.author);*/
  }
    
  render() {
    return (
      <div className="App">
        <Header />
        <Input submit={this.submit} />
        <Result 
            input={this.state.input}
            longestWord={this.state.longestWord}
            /*definition={this.state.definition}
            author={this.state.author}*/
        />
      </div>
    );
  }
}

export default App;
