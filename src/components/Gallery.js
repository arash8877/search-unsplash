import React,{useContext} from 'react'
import './Gallery.css'
import ImgContext from '../imgContext';

const Gallery = () => {
const { content } = useContext(ImgContext);

  return (
    <div className='gallery'>
      {
        content && content.map((item) =>
        <img key={item.id} src={item.urls.regular} alt=''/>
         )
      }
    </div>
  )
}

export default Gallery