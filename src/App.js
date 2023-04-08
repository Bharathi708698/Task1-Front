import './App.css';
import { Routes, Route } from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Page1 />}/>
        <Route path='/profile' element={<Page2 />}/>
        <Route/>

      </Routes>
    </div>
  );
}

export default App;
