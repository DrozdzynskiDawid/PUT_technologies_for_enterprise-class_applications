import { useParams, Link } from 'react-router-dom';

function ProductDetails({ products }) {
  const { id } = useParams();

  const matched = products.filter(product => product.id === parseInt(id));
  if (matched.length === 0) return null;

  const product = matched[0];

  return (
    <div>
      <h1>{product.title}</h1>
      Category: {product.category} <br />
      Brand: {product.brand} <br />
      Description: {product.description} <br />
      Price: ${product.price} <br />
      <img src={product.thumbnail} alt={product.title} width="300" />
      <br /><br />
      <Link to="/">Back to product list</Link>
    </div>
  );
}

export default ProductDetails;
