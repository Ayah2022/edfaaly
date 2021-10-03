import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Product from './Product.js';
import FilterSection from './FilterSection.js';

function Category() {
    const [categories, setCategories] = useState( [] );
    const [CategoryId, setCategory] = useState('');
    const [products, setProducts] = useState( [] );
    const [colors, setColors] = useState( [] );
    const [rates, setCheckedRates] = useState( [] );

   const setCheckedColors = (colors) => {
     console.log("colorsincategorychecked " + colors);
      setColors(colors);
      const filteredProducts = products.filter(product =>  colors.includes(product.color));
     console.log("colors" + colors);
     console.log("filteredProducts" + filteredProducts);
      setProducts(filteredProducts);
  }
  
  const setRatesFilter = (checkedrates) =>{
    console.log("here hecked arr " + checkedrates + typeof(checkedrates))
    setCheckedRates(checkedrates);
    console.log("rates" + rates);
    const filteredProducts = products.filter(product =>  checkedrates.includes(product.rating));
    console.log("filteredProducts" + filteredProducts);
    setProducts(filteredProducts);
    
  }

const setRangefilter = (value) =>{
  console.log("min " + value[0] + "max " + value[1]);
  const filteredProducts = products.filter(product =>  product.price >= value[0] && product.price <= value[1]);
  console.log("filteredProducts" + filteredProducts);
      setProducts(filteredProducts);
}
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios(
          'https://test-api.edfa3ly.io/category',
        );
        setCategories(result.data);
      };
   
      fetchData();
    }, []);

    useEffect(() => {
      const fetchProducts = async () => {
        const productsResult = await axios(
          `https://test-api.edfa3ly.io/product/?categoryId=${CategoryId}`,
        );
        console.log("productsResult" + productsResult.data);
        setProducts(productsResult.data);
      };
   
      fetchProducts();
    }, [CategoryId]);

    return (
      <Fragment>
        <div className="container d-flex align-items-center justify-content-between  categorySection mt-5" >
        {categories.length !== 0 ? categories.map(category => (
          <div className={category.id === CategoryId ? "categorySection--category active" : "categorySection--category"} key={category.id} onClick={() => setCategory(category.id)}>
            <img src={category.image} alt={category.name + category.id}/>
            <p>{category.name}</p>
          </div>
        )) :
        ""}
        </div>
        {products.length !==0 ?<div className="container mt-5">
          <div className="row">
            <div className="col-0 col-md-4">
              <FilterSection products={products} getCheckedColors={setCheckedColors} getRange={setRangefilter} getRates={setRatesFilter}/>
            </div>
            <div className="col-12 col-md-8">
              <div className="row">
                <Product products={products} />
              </div>
            </div>
          </div>
        </div> : ""}
        </Fragment>
    );
  }

  const categoriesPropTypes ={
    categories: PropTypes.arrayOf(PropTypes.shape({
        id:  PropTypes.number,
        name: PropTypes.string,
        image: PropTypes.string
    }).isRequired)
}
Category.propTypes = categoriesPropTypes;


export default Category;

