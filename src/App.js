import React, {useState, useEffect} from 'react';
import LeftBlock from './components/LeftBlock';
import RightBlock from './components/RightBlock';


function App() {

  const [product, setProduct] = useState({
    name: "",
    description: "",
    sku: "",
    price: "",
    image1: "",
    image2: ""
  })

  useEffect(()=> {

      fetch("https://dev.nazdik.in/api/product/show", {
        
        method: "POST",
        
        body: JSON.stringify({
          store: 23,
          product_id: 68
          
        }),
        
        headers: {
          Accept : " application/json",
          "Content-type": "application/json; charset=UTF-8"
        }
      })

      .then(response => response.json())

      .then(json => setProduct({
        name: json.data.name,
        sku: json.data.sku,
        price: json.data.price,
        image1: json.data.images[0].images,
        image2: json.data.category.image
      }));


  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center mt-4">
        <LeftBlock 
          image1={product.image1}
          image2={product.image2}
          />

        <RightBlock
          name={product.name} 
          sku={product.sku} 
          price={product.price} 
        />
        
        
        
        
      </div>
    </div>
  );
}

export default App;
