import useState from "react"
import { useFetch } from "./useFetch";
import './App.css';
import Filter from './components/Filter';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CreateNew from './components/CreateNew';

function App() {
  // const [url, setUrl] = useState("http://localhost:3001/");
  const { data } = useFetch("http://localhost:3001/");


  return (
    <div className="App">
      <Header />
      <Filter />
      <p>yoooo</p>
      <div className='lowerProducts'>
      <CreateNew />
      <ProductList data={data} />
      </div>
    </div>
  );
}

export default App;
