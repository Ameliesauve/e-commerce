import React from 'react';
import ReactStars from 'react-stars';

import './Product.css';

export default ({ product }) => {
  if (product) {
    return (
      <div className="container product-container mt-3">
        <div className="row">
          <div className="col-sm-5">
            <img src={product.image} alt={product.name} className="img-fluid" />
          </div>
          <div className="col-sm-7">
            <div className="row">
              <div className="col-sm-12">
                <h1>{product.name}</h1>
                <p>
                  <div className="rating-wrap align-middle">
                    <ReactStars
                      count={5}
                      value={product.rating}
                      edit={false}
                      size={20}
                    />
                  </div>{' '}
                  <small>(13 reviews)</small>
                </p>
              </div>
            </div>
            <div className="row ">
              <div className="col-sm-12">
                <h2 className="price">$ {product.price}</h2>
                <p>
                  <small>
                    Hasta 6 x $ {(product.price / 6).toFixed(2)} cuotas sin
                    interés
                  </small>
                </p>
              </div>
            </div>
            <div className="row ">
              <div className="col-sm-2">
                <form>
                  <div className="form-group">
                    <select className="form-control" id="quantity">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                </form>
              </div>
              <div className="col-sm-10">
                <button type="button" className="btn btn-secondary">
                  Comprar
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-12">
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    );
  } else {
    return <div />;
  }
};
