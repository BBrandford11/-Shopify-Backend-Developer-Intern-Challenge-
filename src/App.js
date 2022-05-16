import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import './App.css';
import Filter from './components/Filter';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CreateNew from './components/CreateNew';

function App() {
  const [url, setUrl] = useState("http://localhost:3001/");
  const { data } = useFetch(url);
  
  // const { data } = useFetch(url);
  useEffect(() => {
    // make a request here, then
    // if it works then
    setUrl("http://localhost:3001/");
  }, [url]);


  return (
    <div className="App">
      <Header />
      <Filter />
      <p>yoooo</p>
      <div className='lowerProducts'>
      <CreateNew setUrl={setUrl}  useFetch={useFetch} />
      <ProductList data={data} setUrl={setUrl} />
      </div>
    </div>
  );
}

export default App;
