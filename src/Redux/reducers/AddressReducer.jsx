import { allProducts } from "../../Data/Products_data";
import { ADDRESS, DELETEADD } from "../actions/AddressAction";

const address = [
  {
    "addressType": "Home Address",
    "firstName": "Ashok",
    "lastName": "N",
    "email": "ashokmsd0232@gmail.com ",
    "company": "TechnoKey Learning",
    "address1": "Gobichettipalayam",
    "address2": "Coimbatore",
    "country": "India",
    "state": "Tamilnadu",
    "district": "Erode",
    "pincode": "638476",
    "phone": "6369885434",
    }
]
 
const Addressreducer = (state = address, action) => {   
  switch (action.type) {
    case ADDRESS:
        return [...state,action.key];    
    
    case DELETEADD:
     return state.filter((item, index) => index !== action.index);
            
    default:
        return state;
    }
  };
  
  export default Addressreducer;