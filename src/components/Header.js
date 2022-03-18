import {Link} from 'react-router-dom';
import './header.css';

const Header = () =>{
    return (
        <div className="header">
            <h1>DV200: React Hooks Tutorial</h1>
            <div className='btn-group'>
                <div className='btn btn-primary'><Link to="/">Exercise One</Link></div>
                <div className='btn btn-primary'><Link to="/extwo">Exercise Two</Link></div>
                <div className='btn btn-primary'> <Link to="/exthree">Exercise Three</Link></div>
            </div>
            
            
        </div>
    );
}

export default Header;