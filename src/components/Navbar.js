import React,{useState} from 'react'
import './Navbar.css'

const Navbar = () => {
  const [text, setText] = useState('');

  const fetchImage = () => {
    fetch (`https://api.unsplash.com/search/photos/?client_id=d3N5lAPdsfDKVcO2lYQoH4AhATgElKCUlISTXYVstGk&query=${text}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
  }
 

  return (
    <nav>
      <button className="search">Search</button>
      <input type='text' value={text}  onChange={(e) => setText(e.target.value)}></input>
      <button className="send" onClick={fetchImage}>Send</button>
    </nav>
  )
}

export default Navbar
