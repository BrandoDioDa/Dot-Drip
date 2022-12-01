import "../cssDesign/Purchasepage.css";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";

const Purchasepage =() =>
{
    let local = localStorage.getItem('userData');
    let name;
    if ( local === 'null' || local === null || local === 'undefined') {
        name = "Guest";
    }
    else {
        name = (JSON.parse(local)).username;
    }
    return(
    <div className="container center" style={{fontSize: "4.5vh"}}>Thank you for making your purchase at Dot-Drip. {name}
           
            <div className="container ce">
                <p>If you would like to contiue shopping please press the button below.</p>

                <Link to={"/Clothes"}>
                    <Button variant="dark" size={"lg"} >Continue To Browse</Button>
                </Link>
            </div>
           
        </div>

    );
}
export default Purchasepage;
