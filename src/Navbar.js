import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav>
            <a href="#"><span className="arrow">&#8678;</span>  Geri Dön </a>
            <input type="type" placeholder="Bir Şehir İsmi Giriniz..."/>
        </nav>
    )
}

export default Navbar;