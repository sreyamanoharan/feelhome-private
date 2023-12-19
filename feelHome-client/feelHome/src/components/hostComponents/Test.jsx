// import React from 'react';
// import PlacesAutocomplete, {
//   geocodeByAddress,
//   getLatLng,
// } from 'react-places-autocomplete';

// class Test extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { address: '' };
//   }

//   handleChange = (address) => {
//     this.setState({ address });
//   };

//   handleSelect = (address) => {
//     geocodeByAddress(address)
//       .then((results) => getLatLng(results[0]))
//       .then((latLng) => console.log('Success', latLng))
//       .catch((error) => console.error('Error', error));
//   };

//   render() {
//     return (
//       <div>
//         <PlacesAutocomplete
//           value={this.state.address}
//           onChange={this.handleChange}
//           onSelect={this.handleSelect}
//         >
//           {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
//             <div>
//               <input
//                 {...getInputProps({
//                   placeholder: 'Search Places ...',
//                   className: 'location-search-input',
//                 })}
//               />
//               <div className="autocomplete-dropdown-container">
//                 {loading && <div>Loading...</div>}
//                 {suggestions.map((suggestion) => {
//                   const className = suggestion.active
//                     ? 'suggestion-item--active'
//                     : 'suggestion-item';
//                   // Inline style for demonstration purposes
//                   const style = suggestion.active
//                     ? { backgroundColor: '#fafafa', cursor: 'pointer' }
//                     : { backgroundColor: '#ffffff', cursor: 'pointer' };
//                   return (
//                     <div
//                       {...getSuggestionItemProps(suggestion, {
//                         className,
//                         style,
//                       })}
//                     >
//                       <span>{suggestion.description}</span>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           )}
//         </PlacesAutocomplete>
//       </div>
//     );
//   }
// }

// export default Test;

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Navbar from "../userComponents/homeComponents/Navbar";
import Banner from "../userComponents/homeComponents/Banner";
 
export default function Test() {
  return (
<Banner/>
  );
}