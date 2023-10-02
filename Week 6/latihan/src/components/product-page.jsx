import React, { useEffect, useState } from "react";
import {ProductItem} from "./product-item.jsx";
import {SearchBar} from "./search-bar.jsx";
import {getProducts} from "../api/product.jsx";
import "./product-page.css";
import {getProductsByQuery} from "../api/product.jsx";

const ProductPage = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts().then((result) => {
            setProducts(result);
        });
    }, []);

    const getProductByQuery = (query) => {
        getProductsByQuery(query).then((result) => {
            setProducts(result);
        });
    };

    return (
        <div>
            <h1>Catalog</h1>
            <SearchBar onClick={getProductByQuery} />
            {products?.products?.map((product) => {
                return <ProductItem product={product} />;
            })}
        </div>
    );
};

export default ProductPage;