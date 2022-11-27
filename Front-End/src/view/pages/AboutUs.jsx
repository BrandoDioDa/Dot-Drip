import {Link} from "react-router-dom";
import "../cssDesign/about.css";


const AboutUs =() =>
{
    return(
        <div className="Bcolor">
            <h1 className="textColor">
                Who are we? /* text goes here */
            </h1>
                <Link to="/">
                    <button type="button" className="button">
                        Home Page
                    </button>
                </Link>
        </div>
    );
}

export default AboutUs;