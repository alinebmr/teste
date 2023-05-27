import {FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa";
import "./styles.css"

function Footer() {
    return (<div id="footer">
        <ul>
            <li>
                <FaFacebook/>
            </li>
            <li>
                <FaInstagram/>
            </li>
            <li>
                <FaLinkedin/>
            </li>
            <p><span>My ToDoList</span> &copy; 2023</p>
        </ul>
    </div>)
}

export default Footer;