import "../../cssDesign/clothes.css"

import ClothesHeader from "./Header";
import ProductDisplay from "./ProductDisplay";
import Filter from "./Filter";

const Clothes =() => {
    return(
        <div className="BackgroundColor">
            <ClothesHeader/>
            <Filter/>
            <ProductDisplay/>
        </div>
    );
}

export default Clothes;

