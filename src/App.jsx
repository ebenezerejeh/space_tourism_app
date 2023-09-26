import FrontPage from './pages/FrontPage'
import CrewPage from './pages/CrewPage'
import DestinationPage from './pages/DestinationPage'
import TechnologyPage from './pages/TechnologyPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <FrontPage/>} />
          <Route path='/destination' element={ <DestinationPage/>} />
          <Route path='/crew' element={ <CrewPage/>} />
          <Route path='/technology' element={ <TechnologyPage/>} />
        </Routes>              
      </BrowserRouter>
    
    </>
  )
}

export default App
