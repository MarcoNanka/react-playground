import Heading from './components/Heading';
import List from './components/List';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';

const App = () => (
  <BrowserRouter>
  <div className='wrapper'>
     <Heading />
     <Routes>
       <Route path='/about' element={<About />}/>
       <Route path='/list' element={<List />}/>
     </Routes>
  </div>
  </BrowserRouter>
)

export default App;
