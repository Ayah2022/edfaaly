import React ,{ Fragment }from 'react';
import PropTypes from 'prop-types';
import Rating from '@mui/material/Rating';
// import StarIcon from '@mui/icons-material/Star';

function Product(props) {
    return (
        <Fragment>
            {props.products.map(product => (
              <div className="col-6 productBox" key={product.id} color={product.color} price={product.price} rating={product.rating}>
                <div className="product">
                  <div className="w-100 product--image"><img src={product.image} alt={product.name + product.id} className="w-100" /></div>
                  <p className="product--name">{product.name}</p>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                      <p className="product--price">${product.price} <span>{product.currency}</span></p>
                      <Rating
                        name="text-feedback"
                        value={product.rating}
                        readOnly
                        precision={0.5}
                        className="product--rate"
                        // emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                      />
                  </div>
                </div>
              </div>
            ))}
        </Fragment>
    )
}
const productsPropTypes ={
    products: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        image: PropTypes.string,
        price: PropTypes.number,
        color: PropTypes.string,
        currency: PropTypes.string,
        releaseDate: PropTypes.string,
        categoryId: PropTypes.number,
        rating: PropTypes.number,
    }).isRequired)
}
Product.propTypes = productsPropTypes;

export default Product

