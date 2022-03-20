import { Link } from 'react-router-dom';

const Heading = () => (
    <div className='heading'>
        <h1>Marcos Playground</h1>

        <div>
            <Link to='/'>Home</Link>
            <Link to='/quiz'>Quiz</Link>
            <Link to='/tasks'>Tasks</Link>
        </div>
    </div>
);

export default Heading;
