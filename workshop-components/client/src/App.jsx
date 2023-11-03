import { useState } from 'react'
import './styles.css'

import Header from './components/Header'
import Footer from './components/Foother'
import UserList from './components/UserList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />

      <main className="main">
      <UserList />


      </main>

      <Footer />
    </div>
  )
}

export default App
