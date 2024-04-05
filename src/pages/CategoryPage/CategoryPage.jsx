import { useParams } from "react-router-dom";
import ProductCarousel from "../../components/ProductCarousel/ProductCarousel";

const CategoryPage = () => {
    const {category}= useParams() || {}
    console.log(category);
    return (
        <div className="container">
            
            <ProductCarousel></ProductCarousel>
        </div>
    );
};

export default CategoryPage;