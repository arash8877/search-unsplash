import React,{useState,useContext } from 'react'
import './Navbar.css'
import ImgContext from '../imgContext';

const Navbar = () => {
  const { content, setContent } = useContext(ImgContext);
  const [text, setText] = useState('');

  const fetchImage = () => {
    fetch (`https://api.unsplash.com/search/photos/?client_id=d3N5lAPdsfDKVcO2lYQoH4AhATgElKCUlISTXYVstGk&query=${text}`)
    .then(res => res.json())
    .then(data => {
      setContent(data.results)
    })
  }

  return (
    <nav>
      <p>Search</p>
      <input type='text' value={text}  onChange={(e) => setText(e.target.value)}></input>
      <button className="send" onClick={fetchImage}>Send</button>
    </nav>
  )
}

export default Navbar
