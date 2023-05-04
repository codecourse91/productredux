import './App.css';
import Counter from './components/Counter.js';
import { Routes, Route } from "react-router-dom"
import Single from './components/Single';

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={ <Counter/> } />
        <Route path="single/:id" element={ <Single/> } />
      </Routes>
    </div>
  );
}

export default App;
