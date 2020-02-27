import React, { useState, useEffect } from "react";
import uuid from "uuid/v1";
import NewSongForm from "./NewSongForm";
import '../index.css'
const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "almost home", id: 1 },
    { title: "melody gospel", id: 2 },
    { title: "this wild darkness", id: 3 }
  ]);
  const [age, setAge] = useState(12);
  
  useEffect(() => {
  },[songs]);
  const addSong = title => {
    setSongs([...songs, { title, id: uuid() }]);
  };
  return (
    <div className="card">
      <ul>
        {songs.map(song => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <NewSongForm addSong={addSong} />
      <label>
          Age Increment:
      </label>
      <button onClick={()=>setAge(age + 1)}>Age :{age}</button>
    </div>
  );
};

export default SongList;
