import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation'
import CharactersList from './components/CharactersList'
import About from './components/About';
import Home from './components/Home';
import CharacterDetails from './components/CharacterDetails';
import NotFound from './components/NotFound';

function App() {

  return (
    <>
      <Navigation />
      <h5>React Router with react bootstrap</h5>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/characters' element={<CharactersList />} />
        <Route path='/characters/:id' element={<CharacterDetails />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>

      <footer>All rights reserved &copy;</footer>
    </>
  )
}

export default App;
