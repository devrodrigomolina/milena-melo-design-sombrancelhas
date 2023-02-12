import * as C from './styles'

interface TitlesTypes {
  title: string,
  subtitle: string
}


const Titles = ({title, subtitle}: TitlesTypes) => {
  return (
    <C.ContainerTitles>
        <p className='quality'>{subtitle}</p>
        <h2 className='welcome'>{title}</h2>
    </C.ContainerTitles>
  )
}

export default Titles