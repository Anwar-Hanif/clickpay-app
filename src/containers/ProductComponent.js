import React from 'react';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {
        const {id, title,image,price,category,description} = product;
        return(
            <div className='col-lg-3' key={id}>
                <Link to={`/product/${id}`}>
                    <div className="card">
                        <img className="card-img-top" src={image} alt={title} />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <h6>{category}</h6>
                            <p className="card-text">{price}</p>
                        </div>
                    </div>
                </Link>
            </div>
        )
    })
  return (
    <div className='row'>
          {renderList}
    </div>
      
  )
}

export default ProductComponent