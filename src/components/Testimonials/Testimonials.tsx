import Titles from '../Titles/Titles'
import * as C from './styles'
import testimonials from '../../assets/testmonials-1.jpg'
import img_comments from '../../assets/img_comments.png'

const Testimonials = () => {

  return (
    <C.ContainerTestimonials>
      <div className="title">
        <Titles title='O que nossos clientes têm a dizer' subtitle='COMENTARIOS' position="flex-start" />
        <img src={img_comments} alt="" />
      </div>

      <div className="container-comments">

          <div className="card">
            <div className="client-info">
              <img src={testimonials} alt=""  />
              <div className="client-name-work">
                <p className="name">Robson telinhas</p>
                <p className="work">Dev Lua</p>
              </div>
            </div>
              <p className='comment'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui corrupti repellat expedita sint. Nulla ratione, repellendus eveniet vero atque consequatur quaerat voluptates, commodi architecto illum, placeat fuga sint facere necessitatibus.</p>
          </div>

          <div className="card">
            <div className="client-info">
              <img src={testimonials} alt=""  />
              <div className="client-name-work">
                <p className="name">Robson telinhas</p>
                <p className="work">Dev Lua</p>
              </div>
            </div>
              <p className='comment'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui corrupti repellat expedita sint. Nulla ratione, repellendus eveniet vero atque consequatur quaerat voluptates, commodi architecto illum, placeat fuga sint facere necessitatibus.</p>
          </div>

          <div className="card">
            <div className="client-info">
              <img src={testimonials} alt=""  />
              <div className="client-name-work">
                <p className="name">Robson telinhas</p>
                <p className="work">Dev Lua</p>
              </div>
            </div>
              <p className='comment'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui corrupti repellat expedita sint. Nulla ratione, repellendus eveniet vero atque consequatur quaerat voluptates, commodi architecto illum, placeat fuga sint facere necessitatibus.</p>
          </div>
     

      </div>
    </C.ContainerTestimonials>
  )
}

export default Testimonials