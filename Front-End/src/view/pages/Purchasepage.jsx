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
    <div className="container-fluid center" style={{fontSize: "4.5vh"}}>{name}'s Order History:
            <div className="container-fluid ">
                <p>If you would like to continue shopping please press the button below.</p>

                <Link to={"/Clothes"}>
                    <Button variant="dark" size={"lg"} >Continue To Browse</Button>
                </Link>
            </div>
           
        </div>

    );
}
export default Purchasepage;
