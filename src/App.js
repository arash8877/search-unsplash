import React,{useState}   from 'react'
import "./App.css";
import Navbar from "./components/Navbar";
import Gallery from './components/Gallery'; 
import ImgContext from './imgContext';

const App = () => {

  const [content, setContent] = useState('')

  return (
    <ImgContext.Provider value={{content,setContent}}>
    <div className="App">
      <Navbar />
      <Gallery />
    </div>
    </ImgContext.Provider>
  );
}

export default App;
