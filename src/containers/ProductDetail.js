import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {selectedProduct} from "../redux/actions/productActions";

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { image, title, price, category, description} = product;

    const {productId} = useParams();
    const dispatch = useDispatch();
    console.log(product);
    const fetchProductDetail = async () => {
      const response = await axios
        .get(`https://fakestoreapi.com/products/${productId}`)
        .catch((err)=>{
          console.log("Err", err);
        });
        dispatch(selectedProduct(response.data));
    }
    useEffect(()=>{
      if(productId && productId !== "") fetchProductDetail();
      },[productId]);

  return (
    <div>
      {Object.keys(product).length === 0 ? (
        <div>Loading..</div>
      ): (
          <div className="card">
            <img src="{image}" className="card-img-top" alt={title} />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
              </div>
          </div>
      )}
    </div>
  )
}

export default ProductDetail