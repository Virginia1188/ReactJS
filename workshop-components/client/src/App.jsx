import { useState } from 'react'
import './styles.css'

import Header from './components/Header'
import Footer from './components/Foother'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Working</h1>

      <Header />


      <Footer />
    </div>
  )
}

export default App
