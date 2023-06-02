import React, { useState } from 'react'
import {Data} from './Data'
import MovieList from './Movie-list';
import AddMovie from './AddMovie';
import SearchMovie from './SearchMovie';
import { Route, Routes } from 'react-router-dom';
import MovieDes from './MovieDes';



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
      <AddMovie addHandler={addHandler}/>
      <Routes>
        <Route path="/List" element={<MovieList movies={data}
        searchName={searchName}
        searchRating={searchRating}/>}/>
        <Route path="/MovieDes/:idMovie" element={<MovieDes/>}/>
      </Routes>
    
    </div>
  )
}
