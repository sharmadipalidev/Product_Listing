import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [error, setError] = useState("");

  const getProductListing = async () => {
    const url =
      "https://api.freeapi.app/api/v1/public/randomproducts/product/random";
    const options = { method: "GET", headers: { accept: "application/json" } };

    try {
      setProducts([]);

      const productRequest = Array.from({ length: 12 }, async () => {
        const response = await fetch(url, options);
        const productData = await response.json();
        return productData.data;
      });

      const fetchProduct = await Promise.all(productRequest);
      setProducts(fetchProduct);
      setError("");
    } catch (error) {
      console.error(error);
      setProducts(undefined);
      setError("Failed to load Product");
    }
  };

  useEffect(() => {
    getProductListing();
  }, [page]);

  return (
    <div>
      <h1>Product Listing </h1>

      {error && <p>{error}</p>}

      <div>
        {products.map((product, index) => (
          <div key={index}>
            <img src={product?.thumbnail} alt={product.title} width="200" />
            <h3>{product.title}</h3>
            <p>₹{product.price}</p>
          </div>
        ))}
      </div>

      <button onClick={() => setPage(page + 1)}>Next Page</button>
    </div>
  );
}

export default App;
