import Team from './Pages/Team';
import Main from './Pages/Main';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
<BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
          <Route exact path="/team" element={<Team />} />
          
      </Routes>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
