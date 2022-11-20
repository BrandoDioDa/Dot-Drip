import {Link} from "react-router-dom";
import "../cssDesign/main.css"
//import "../cssDesign/product.css"
import ProductCard from "../../Components/ProductCard";
import useAxiosGet from "../../Hooks/HttpRequests"

const Clothes =() => {

    const url = `http://localhost:4000/api/Products`;               // HTTPS breaks it for SSL reasons
    var content="";
    let products = useAxiosGet(url)

    if(products.error){
        content = <p>
            There was an error fetching the stuff!
        </p>
    }
    if(products.loading){
        content=
        <p>Loading...</p>
    }
    if(products.data){
        content = (products.data).map((product, key) =>
            <div>
                <ProductCard product={product}/>
            </div>
        )
    }

    // Content holds the dynamic JS stuff

    return(
        <div className="Bcolor">
            <h1>
                Clothes
            </h1>
            <Link to="/">
                <button type="button" className="button">
                    Home Page
                </button>              
            </Link>
            {content}
        </div>

    );
}

export default Clothes;

