import Buttons from '../Buttons/Buttons'
import * as C from './styles'

const Home = () => {
  return (
    <C.ContainerHome>
      <C.ImageBG></C.ImageBG>
      
      <C.TextInfos>
        <h2>Design de Sombrancelhas</h2>
        <p style={{fontSize: '18px', lineHeight: '36px',color: '#52525e', textAlign: 'right'}}className=''>Micropigmentação é a arte de criar sobrancelhas mais grossas e cheias através do uso de uma técnica de tatuagem manual</p>
        <div className="btns">
          <Buttons />
          <Buttons />
        </div>
      </C.TextInfos>
    </C.ContainerHome>
  )
}

export default Home