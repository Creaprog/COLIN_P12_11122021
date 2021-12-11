import './App.css';
import Home from './pages/Home/Home';
import {
  Routes,
  Route
} from "react-router-dom";
import CallUser from './services/CallUser';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home CallUser={<CallUser />}/>} />
    </Routes>
  );
}

export default App;