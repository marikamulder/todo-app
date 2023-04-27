import './Header.scss';
import { FaTasks } from 'react-icons/fa';
import MainMenu from '../MainMenu/MainMenu';


function Header() {
    return (
        <>
        <header>
            <FaTasks/>
            <div>
                <div className="title">Check It</div>
                <div className="author">by Marika Mulder</div>
            </div>
        </header>
        <MainMenu />
        </>
    );
}

export default Header;