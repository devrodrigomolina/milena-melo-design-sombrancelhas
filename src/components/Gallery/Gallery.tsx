import React from 'react'
import Titles from '../Titles/Titles'
import * as C from './styles'
import img_work from "../../assets/aboutimg.jpg";

const Gallery = () => {
  return (
    <C.ContainerGallery>
      <Titles title='NOSSA GALERIA' subtitle='Nossos trabalhos'/>
      <C.ContainerPhotos>
        <div className="card">
          <img src={img_work} alt="" />
          <div className="overlay">
            <h1 className='title-overlay'>Micropigmentação</h1>
            <p className='text-overlay'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias ducimus, minus obcaecati ea aut, labore repudiandae, ratione rerum ipsam ex accusantium. Ex perspiciatis dignissimos deleniti? Reprehenderit molestiae excepturi neque labore.</p>
          </div>
        </div>
        <div className="card">
          <img src={img_work} alt="" />
          <div className="overlay">
            <h1 className='title-overlay'>Micropigmentação</h1>
            <p className='text-overlay'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias ducimus, minus obcaecati ea aut, labore repudiandae, ratione rerum ipsam ex accusantium. Ex perspiciatis dignissimos deleniti? Reprehenderit molestiae excepturi neque labore.</p>
          </div>
        </div>
        <div className="card">
          <img src={img_work} alt="" />
          <div className="overlay">
            <h1 className='title-overlay'>Micropigmentação</h1>
            <p className='text-overlay'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias ducimus, minus obcaecati ea aut, labore repudiandae, ratione rerum ipsam ex accusantium. Ex perspiciatis dignissimos deleniti? Reprehenderit molestiae excepturi neque labore.</p>
          </div>
        </div>
        <div className="card">
          <img src={img_work} alt="" />
          <div className="overlay">
            <h1 className='title-overlay'>Micropigmentação</h1>
            <p className='text-overlay'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias ducimus, minus obcaecati ea aut, labore repudiandae, ratione rerum ipsam ex accusantium. Ex perspiciatis dignissimos deleniti? Reprehenderit molestiae excepturi neque labore.</p>
          </div>
        </div>
        <div className="card">
          <img src={img_work} alt="" />
          <div className="overlay">
            <h1 className='title-overlay'>Micropigmentação</h1>
            <p className='text-overlay'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias ducimus, minus obcaecati ea aut, labore repudiandae, ratione rerum ipsam ex accusantium. Ex perspiciatis dignissimos deleniti? Reprehenderit molestiae excepturi neque labore.</p>
          </div>
        </div>
        <div className="card">
          <img src={img_work} alt="" />
          <div className="overlay">
            <h1 className='title-overlay'>Micropigmentação</h1>
            <p className='text-overlay'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias ducimus, minus obcaecati ea aut, labore repudiandae, ratione rerum ipsam ex accusantium. Ex perspiciatis dignissimos deleniti? Reprehenderit molestiae excepturi neque labore.</p>
          </div>
        </div>
      </C.ContainerPhotos>
    </C.ContainerGallery>
  )
}

export default Gallery