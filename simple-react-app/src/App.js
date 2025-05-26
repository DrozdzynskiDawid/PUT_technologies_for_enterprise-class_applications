import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(response => setProducts(response.data.products))
      .catch(error => console.error(error));
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <ProductList products={products} />,
    },
    {
      path: 'details/:id',
      element: <ProductDetails products={products} />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
