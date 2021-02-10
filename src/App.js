import { Button, OutlinedInput } from '@material-ui/core';
import axios from 'axios';
import { useState } from 'react';
import './App.css';
import Card from './Card';
import cors from 'cors'


function App() {
  const [Input, setInput] = useState('');
  const [Data, setData] = useState([]);
  const output = document.getElementById("app_body")
  async function getDataFromItune (){
    //for get data from api always used class function instead of arrow function
    let url = `https://itunes.apple.com/search?term=${Input}`;
    let cors = "https://cors-anywhere.herokuapp.com/"
    let output = document.querySelector('#app_body_grid')
    
    const res = await axios.get(cors+url)
    const datas = res.data.results;
    console.log(datas)
    setData(datas)
   
  }

  const handler = () => {
    getDataFromItune();
    setInput(" ")
  }
  return (
    <div className="App">
      <div className="app_header">
        <input type="text" value={Input} onChange={(e) => setInput(e.target.value)} placeholder="search song" />
        <Button type="submit" onClick={handler}>Search</Button>
      </div>
      <div className="app_body">
        <h2>{Input}</h2>
        <div className="app_body_grid">
          {Data.map((song) => (
            <Card
              key={song.trackId}
              image={song.artworkUrl100}
              songName={song.trackCensoredName}
              artistName={song.artistName}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
