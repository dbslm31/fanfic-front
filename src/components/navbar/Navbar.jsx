//Assets
import Logo from '../../assets/logo.png'
import { Link } from "react-router-dom";
//MUI
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Button from '@mui/material/Button';


//CSS
import './Navbar.css'

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to={`/`}>
                    <img src={Logo} alt="Fanfiction company logo" className="navbar-logo" />
                </Link>
            </div>
            {/* <div className="navbar-links">
                <ul>
                    <li>Découvrir les fanfictions</li>
                </ul>
            </div> */}
            <div className="navbar-search">
                <Link to={`/story/create`}>
                    <Button className="navbar-create-btn btn-outline" variant="outlined" >Ecrire une histoire</Button>
                </Link>
                <SearchIcon />
                <PersonOutlineIcon />
            </div>
        </nav>
    );
}

export default Navbar;
