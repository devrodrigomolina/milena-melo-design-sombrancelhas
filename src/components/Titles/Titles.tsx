import * as C from './styles'
import divider from '../../assets/divider.png'
interface TitlesTypes {
  title: string,
  subtitle: string,
  position?: string | undefined
}

const Titles = ({title, subtitle, position}: TitlesTypes) => {
  return (
    <C.ContainerTitles position={position}>
        <p className='quality'>{subtitle}</p>
        <h2 className='welcome'>{title}</h2>
        <img src={divider} />
    </C.ContainerTitles>
  )
}

export default Titles