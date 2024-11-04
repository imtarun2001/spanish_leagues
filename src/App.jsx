import { spanishLeagueData } from './Data'
import Container from './components/Container'
import Title from './components/Title'
import './App.css'

function App() {

  return (
    <div className='app'>
      <Title spanishLeagueData={spanishLeagueData}></Title>
      <Container spanishLeagueData={spanishLeagueData}></Container>
    </div>
  )
}

export default App
