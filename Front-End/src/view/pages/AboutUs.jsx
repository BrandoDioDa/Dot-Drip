import {Link} from "react-router-dom";
import "../cssDesign/clothes.css";


const AboutUs =() =>
{
    return(
        <div className="BackgroundColor">
            <h1>
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