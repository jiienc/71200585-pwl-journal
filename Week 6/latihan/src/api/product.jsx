export const getProducts = async () => {
    const result = await fetch("https://dummyjson.com/products");
    return result.json();
};

export const getProductsByQuery = async (query) => {
    const result = await fetch(
        `https://dummyjson.com/products/search?q=${query}`
    );
    return result.json();
};
