import React, { memo, useEffect, useState } from 'react'
import axios from 'axios';
import { useGlobalState } from '../../Context/Context';

function Motorcycle() {
    const {token , getInputSearch} = useGlobalState()
    const [products, setProducts] = useState([]);
    const [error , setError] = useState(false)
  
    useEffect(() => {
      const fetchData = async () => {
        try {
            const response = await axios.get("https://dummyjson.com/products/category/motorcycle", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setProducts(response.data.products);
        } catch (error) {
            if(error === "Network Error"){
                setError(true)
            }
            console.error('Error fetching products:', error);
        }
    };
    fetchData();
  
      return () => {
  
      }
    },[token])
    useEffect(() => {
        const fetchData = async () => {
           try {
                   const response = await axios.get(`https://dummyjson.com/products/search?q=${getInputSearch}`, {
                   headers: {
                       Authorization: `Bearer ${token}`
                   }
               });
                let product = response.data.products
               setProducts(product)
           } catch (error) {
               if(error === "Network Error"){
                   setError(true)
               }
               console.error('Error fetching products:', error);
           }
       };
       fetchData();

   },[getInputSearch])
    return (
      <>
      {
              error ? "error" : (
                  <>
                  <div className="container">
                      <div className="row mt-5 gx-3 grid gap-3">
                      {products.map((product, index) => (
                          <div className="card" style={{ width: "18rem" }} key={index}>
                              <img src={product.images[0]} className="card-img-top" alt="..." />
                              <div className="card-body">
                                  <h5 className="card-title">{product.title}</h5>
                                  <p className="card-text">
                                      {product.description}
                                  </p>
                                   {/* <Link to={`/detail?user=${product.id}`} className='text-dark text-capitalize fw-bold' >more detail <span style={{fontSize : "25px"}} >&#8594;</span></Link> */}
                              </div>
                          </div>
                      ))}
                      </div>
                  </div>
                  <div>
                  </div>
                  </>
              )
          }
      </>
    )
}

export default Motorcycle