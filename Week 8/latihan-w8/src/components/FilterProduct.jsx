export const FilterProduct = (props) => {
    const { products } = props;
    const uniqueProductList = [
        ...new Set(
            products.map((product) => {
                return product.category;
            })
        ),
    ];
    const options = uniqueProductList.map((item) => {
        return {
            title: item,
            value: item,
        };
    });
    return (
        <select name="productCategory" id="productCategory">
            {options.map((option) => {
                return (
                    <>
                        <option value={option.value}>{option.title}</option>
                    </>
                );
            })}
        </select>
    );
};
