import Rating from '@mui/material/Rating';
import React, { Component } from 'react';


class AverageRating extends Component {
    constructor(props) {
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.state ={
          checkedRates : [],
          checkedState :new Array(5).fill(false)
        }
      }
      
      handleOnChange(position,ratevalue){
         var checkedarr=[];
        const updatedCheckedState = this.state.checkedState.map((item, index) =>
            {
              if (index === position) {
                if (index === position && item === false ) {
                  checkedarr.push(ratevalue);
                  console.log("checkedarr " + checkedarr);
                  var joined = Array.prototype.push.apply(this.state.checkedRates, checkedarr);
                  console.log("jioned " + joined)
                  this.setState({ checkedRates: joined })
                  // this.setState({ checkedRates: [...this.state.checkedRates, ratevalue] })
                  // this.setState(prevState => ({
                  //   checkedRates: [ratevalue, ...prevState.checkedRates]
                  // }))
                  // this.setState({ checkedRates: this.state.checkedRates.concat(ratevalue) }, () => console.log(this.state.checkedRates));
                    console.log("checkedRates : "+ this.state + " " + this.state.checkedRates);
                    this.props.getRates(this.state.checkedRates);
                 
                }
                return !item;
              } else {
                return item;
              }
            });
            
          this.setState({checkedState :updatedCheckedState});
        
      } 
    render() {
        const array= [1,2,3,4,5];
        return (
            <div className="d-flex flex-column-reverse rate ">
            {array.map((item, index) => 
            <div key={index} className="d-flex align-items-center ">
                <input
                    type="checkbox"
                    id={`checkbox-${index}`}
                    checked={this.state.checkedState[index]}
                    onChange={() => this.handleOnChange(index,item)}
                  />
                   <label htmlFor={`checkbox-${index}`}><Rating key={index} name="size-medium" defaultValue={item} readOnly /></label>
                
            </div> )}

        </div>
        )
    }
}

export default AverageRating

