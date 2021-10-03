
import React, { Component, Fragment } from 'react';

class Color extends Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  
  state ={
    checkedColors : [],
    checkedState :new Array(this.props.colors.length).fill(false)
  }
  handleOnChange(position,color){
    var checkedarr=[];
    const updatedCheckedState = this.state.checkedState.map((item, index) =>
        {
          console.log("index " + index);;
          console.log("position " + position );
          if (index === position) {
            if (index === position && item === false ) {
              console.log("entered");
              console.log("color " + color );
              // this.setState(prevState => ({
              //   checkedColors: [...prevState.checkedColors, color]
              // }))
              checkedarr.push(color);
                  console.log("checkedarr " + checkedarr);
                  var joined = Array.prototype.push.apply(this.state.checkedColors, checkedarr);
                  console.log("jioned " + joined)
                  this.setState({ checkedColors: joined })
              console.log("state has " + this.state.checkedColors);
              this.props.getColors(this.state.checkedColors);
            }
            return !item;
          } else {
            return item;
          }
        });

      this.setState({checkedState :updatedCheckedState});
    
  } 
  render() {
    return (
      <Fragment>
             <div className="checkboxes">
           {
               this.props.colors.length !== 0 ? this.props.colors.map((color,index )=> (
                 <div key={color + index} className="checkbox d-flex align-items-center">
                   <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={color}
                    value={color}
                    checked={this.state.checkedState[index]}
                    onChange={() => this.handleOnChange(index,color)}
                  />
                   <label htmlFor={`custom-checkbox-${index}`}>{color}</label>
                 </div>
               )
              ) :  ""
           }
            </div>
        </Fragment>
    )
  }
}




export default Color;




// import React,{ useState,useEffect,  Fragment} from 'react';

// function Color(props) {
//     const [checkedColors ,setCheckedcolors] =useState([]);
//     const [checkedState, setCheckedState] = useState(
//       new Array(props.colors.length).fill(false)
//   ); //here we declare a state with an initial value as an array filled with the value false.


//   const handleOnChange = (position,color) => {
//     const updatedCheckedState = checkedState.map((item, index) =>
//         {
//           console.log("index " + index);;
//           console.log("position " + position );
//           if (index === position) {
//             if (index === position && item === false ) {
//               console.log("entered");
//               console.log("color " + color );
//               setCheckedcolors([...checkedColors, color], function () {
//                 console.log("checkec chekced " + checkedColors);
//               });
//               props.getColors(checkedColors);
//             }
//             return !item;
//           } else {
//             return item;
//           }
//         });
//         setCheckedState(updatedCheckedState);
    
//   } 

//     return (
//         <Fragment>
//              <div className="checkboxes">
//            {
//                props.colors.length !== 0 ? props.colors.map((color,index )=> (
//                  <div key={color + index} className="checkbox d-flex align-items-center">
//                    <input
//                     type="checkbox"
//                     id={`custom-checkbox-${index}`}
//                     name={color}
//                     value={color}
//                     checked={checkedState[index]}
//                     onChange={() => handleOnChange(index,color)}
//                   />
//                    <label htmlFor={`custom-checkbox-${index}`}>{color}</label>
//                  </div>
//                )
//               ) :  ""
//            }
//             </div>
//         </Fragment>
//     )
// }


// export default Color;

