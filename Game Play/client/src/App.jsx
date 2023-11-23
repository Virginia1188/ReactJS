import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState } from "react";

import * as authService from './services/authService';
import {AuthProvider} from "./contexts/authContext";
import Path from './paths';

import CreateGame from "./components/Create-Game/CreateGame";
import GameList from "./components/Game-List/GameList";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import GameDetails from "./components/Game-Details/GameDetails";
import Logout from './components/Logout/Logout';

function App() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(() => {
    localStorage.removeItem('accessToken');
    return {};
  });

  const loginSubmitHandler = async (values) => {
    const result = await authService.login(values.email, values.password);

    setAuth(result);
    localStorage.setItem('accessToken', result.accessToken);
    navigate(Path.Home);

  }

  const registerSubmitHandler = async (values) => {
    const result = await authService.register(values.email, values.password);

    setAuth(result);
    localStorage.setItem('accessToken', result.accessToken);
    navigate(Path.Home);

  }

  const logoutHandler = () => {
    setAuth({});
    localStorage.removeItem('accessToken');
  }

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    username: auth.username || auth.email,
    email: auth.email,
    isAuthenticated: !!auth.accessToken,
  }

  return (
    <AuthProvider value={values}>
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
        </Routes>


      </div>
    </AuthProvider>
  )
}

export default App
