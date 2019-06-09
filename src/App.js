import React, { Component } from 'react';
import axios from 'axios';
import GifCard from './components/GifCard';
import SearchField from './components/SearchField';

class App extends Component {
  constructor() {
    super();

    this.state = {
      gifs: [],
    };
    
  }

  componentDidMount() {
    this.fetchGif();
  }

  fetchGif = (query) => {
    axios.get(`https://api.giphy.com/v1/gifs/search?q=${query}&limit=48&api_key=afnCDCpg87j3Z0zNpdCHsvqt22mQNDeD`)
      .then(response => {
        this.setState({
          gifs: response.data.data,
        });
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    return(
        <div>
            <h1>Search for Gifs</h1>
            <SearchField onSearch={this.fetchGif} />
           <GifCard gifs={this.state.gifs} />     
          </div>      
    )
  }
};

export default App;
