import React, { memo, useEffect, useState } from 'react'
import axios from 'axios';
import StarRating from '../StarRating/StarRating';
import { useNavigate } from 'react-router-dom';


function Detailspage() {
    const [allProduct , setAllProduct] = useState([])
        useEffect(() => {
        let productDetail = () => {
            const URLParams = new URLSearchParams(window.location.search);
            const userID = URLParams.get("user");
            axios.get(`https://dummyjson.com/products/${userID}`)
            .then(res => {
                const data = res.data;
                const starRating = Math.round(data.rating / 2); // Convert rating to star rating (assuming API returns rating out of 10)
                setAllProduct({ ...data, rating: starRating });
            })
            .catch(error => console.error('Error fetching product details:', error));
        }
        productDetail();
    }, []);
    const navigate = useNavigate();
    let back = () => {
        navigate('/home')
    }
  return (
    <>
    <div className="container">
        <button className='mt-5 rounded-circle fs-5 ' style={{border : 'none' }} onClick={back} ><i class="fa-solid fa-arrow-left"></i></button>
        <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 mt-5">
                <div
                    id="carouselExampleAutoplaying"
                    className="carousel slide"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-inner">
                        {allProduct.images && allProduct.images.map((image, index) => (
                             <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                              <img src={image} className="d-block w-100" style={{ width: '100%', height: '500px' , objectFit : 'cover' }} alt={`Image ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                    <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div className="container">
        <div className="row">
            <div className="col-lg-8 col-md-12 col-sm-12 mt-5">
                <h4 className='text-capitalize' >products details</h4>
                <h5 className='mt-3' >{allProduct.title && `Title : ${allProduct.title}`}</h5>
                <p>{allProduct.description && `Description : ${allProduct.description}`}</p>
                <div className="d-flex justify-content-between">
                    <p>{allProduct.brand && `Brand : ${allProduct.brand}`}</p>
                    <p>{allProduct.category && `Category : ${allProduct.category}`}</p>
                </div>
                <div className=" d-flex justify-content-between">
                    <p>{allProduct.rating && <StarRating rating={allProduct.rating}  />}</p> {/* Star rating component */}
                    <p>{allProduct.stock && `Stock : ${allProduct.stock}`}</p>
                </div>
                    <p>{allProduct.discountPercentage && `Discount Percentage : ${allProduct.discountPercentage}%`}</p>
                    <p>{allProduct.price && `Price : $${allProduct.price}`}</p>
            </div>
        </div>
    </div>
  
    </>
  )
}

export default memo(Detailspage)