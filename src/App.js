import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Sidenav from './Components/Sidenav';
import Explore from "./Pages/Explore";
import Home from "./Pages/Home";
import Settings from "./Pages/Settings";
import Statistics from "./Pages/Statistics";

function App() {
  return (
    <div className="App">
      <Sidenav/>
      <main>
      <Routes>
        <Route  path="/" element={<Home />}/>
        <Route path="/explore" element={<Explore />} />
        <Route path="/statistics" element={<Statistics />}/>
        <Route path="/settings" element={<Settings />} />
      </Routes>
      </main>
     
    </div>
  );
}

export default App;
