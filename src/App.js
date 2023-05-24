import React, { useState } from 'react'
import {Data} from './Data'
import MovieList from './Movie-list';
import AddMovie from './AddMovie';
import SearchMovie from './SearchMovie';



export default function App() {
const [data,setData] = useState(Data);
const [searchName, setSearchName] = useState("");
console.log(searchName,"this the search name")
const [searchRating, setSearchRating] = useState("");
const addHandler = (newMovie) => {
  setData([...data, newMovie]);
};

  return (
    <div>
      <SearchMovie
        setSearchName={setSearchName}
        setSearchRating={setSearchRating}
      />
      <MovieList movies={data}
        searchName={searchName}
        searchRating={searchRating} />
      <AddMovie addHandler={addHandler} />
    
    </div>
  )
}
