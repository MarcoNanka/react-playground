import Heading from './components/Heading';
import List from './components/List';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Quiz from './components/Quiz';

const App = () => (
  <BrowserRouter>
  <div className='wrapper'>
     <Heading />
     <Routes>
       <Route path='/quiz' element={<Quiz />}/>
       <Route path='/tasks' element={<List />}/>
     </Routes>
  </div>
  </BrowserRouter>
)

export default App;
