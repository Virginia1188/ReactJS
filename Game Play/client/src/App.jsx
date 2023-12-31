import { Routes, Route } from 'react-router-dom'

import { AuthProvider } from "./contexts/authContext";
import Path from './paths';

import CreateGame from "./components/Create-Game/CreateGame";
import GameList from "./components/Game-List/GameList";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import GameDetails from "./components/Game-Details/GameDetails";
import Logout from './components/Logout/Logout';
import GameEdit from './components/Edit-Game/GameEdit';
import ErrorBoundry from './components/ErrorBoundry';

function App() {

  return (
    <ErrorBoundry>
      <AuthProvider>
        <div id="box">
          <Header />

          <Routes>
            <Route path={Path.Home} element={<Home />} />
            <Route path={Path.Games} element={<GameList />} />
            <Route path="/games/create" element={<CreateGame />} />
            <Route path={Path.Login} element={<Login />} />
            <Route path={Path.Logout} element={<Logout />} />
            <Route path={Path.Register} element={<Register />} />
            <Route path="/games/:gameId" element={<GameDetails />} />
            <Route path={Path.GameEdit} element={<GameEdit />} />
          </Routes>


        </div>
      </AuthProvider>
    </ErrorBoundry>
  )
}

export default App
