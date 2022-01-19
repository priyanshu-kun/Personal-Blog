import './App.css';
import Home from './Pages/Home/Home';
import Topbar from './components/Topbar/Topbar';
import Single from "./Pages/Single/Single"
import Write from "./Pages/Write/Write"
import Settings from "./Pages/Home/Settings/Settings"
import Login from './Pages/Home/Login/Login';
import Register from './Pages/Home/Register/Register';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import {useContext} from "react"
import {Context} from "./context/Context"

function App() {

  const {user} = useContext(Context);

  return (
    <BrowserRouter>
        <Topbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/register" element={user ? <Home /> : <Register />}/>
          <Route path="/login" element={user ? <Home /> : <Login />} />
          <Route path="/write" element={user ? <Write /> : <Login />} />
          <Route path="/settings" element={user ? <Settings /> : <Login />} />
          <Route path="/post/:post_id" element={<Single/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
