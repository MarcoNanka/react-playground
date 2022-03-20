import {Link} from 'react-router-dom'; 

const Heading = () => (
    <div className="heading">
       <h1>Heading</h1>
       <Link to='/'>
         Home
       </Link>
       <Link to='/about'>
         About
       </Link>
       <Link to='/list'>
         TODO list
       </Link>
       
    </div>
  )
  
  export default Heading;
  