import Rating from './Rating';
const Product = ({product}) => {
    return (
        <tr>
            <td>{product.id}</td>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>{product.description.slice(0,155)}</td>
            <td>{product.category}</td>
            <td><img width="250px" src={product.image} alt={product.title}/></td>
            <td><Rating rate={product.rating.rate} count={product.rating.count}/></td>
        </tr>
    )
}

export default Product;