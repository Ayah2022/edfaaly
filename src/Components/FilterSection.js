import React ,  { Fragment } from 'react';
import PriceRangeSlider from './PriceRangeSlider';
import AverageRating from './AverageRating';
import Color from './Color.js';

function FilterSection(props) {
    var arr=[];
    props.products.map(product => {
        if(arr.indexOf(product.color) == -1){
            arr.push(product.color)
        }
        return arr;
        });
        
    return (
        <div className="filterSection">
            <h2>Filter</h2>
            <div>
                <h3 className="mt-1">Price Rnage</h3>
                <PriceRangeSlider getRange={props.getRange} />
            </div>
            <div>
                <h3 className="mt-1">Color</h3>
                <Color colors={arr} getColors={props.getCheckedColors} />
            </div>
            <div>
                <h3 className="mt-3">Average Rating</h3>
                <AverageRating getRates={props.getRates} />
            </div>
        </div>
    )
}

export default FilterSection
