
import '../../App.css';
import Button from '@mui/material/Button';

import Logo from '../../assets/AcmeGroup.jpg'

function Footer() {
    return (
        <nav className="footer">
            <div className="footer-infos">
                <h5>Fanfiction</h5>
                <p>Proin euismod varius turpis, vel gravida orci. Etiam ullamcorper diam eu interdum cursus. Nunc hendrerit, ligula quis facilisis hendrerit, libero est consequat massa, eu vehicula arcu quam id elit. </p>
                <p>© 2023 - 2024 |  All right reserved</p>
            </div>
            <div className="footer-links">
                <div>
                    <h4>Categorie</h4>
                    <Button className="card-footer-btn" size="small" >Lien 1</Button>
                    <Button className="card-footer-btn" size="small" >Lien 2</Button>
                    <Button className="card-footer-btn" size="small" >Lien 3</Button>
                </div>
                <div>
                    <h4>Categorie</h4>
                    <Button className="card-footer-btn" size="small" >Lien 4</Button>
                    <Button className="card-footer-btn" size="small" >Lien 5</Button>
                    <Button className="card-footer-btn" size="small" >Lien 6</Button>
                </div>
                <div>
                    <h4>Categorie</h4>
                    <Button className="card-footer-btn" size="small" >Lien 5</Button>
                    <Button className="card-footer-btn" size="small" >Lien 6</Button>
                    <Button className="card-footer-btn" size="small" >Lien 7</Button>
                </div>
            </div>

            <div className="footer-logo-container">
                <img src={Logo} alt="" className="footer-logo" />
            </div>
        </nav>
    );
}

export default Footer;
