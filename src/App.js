import React, { useState } from "react";
// Import Styles
import './styles/app.scss';
// Adding Components
import Player from './components/Player';
import Song from './components/Song';
// Import Music Data
import data from './data'

function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[4]);
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player />
    </div>
  );
}

export default App;
