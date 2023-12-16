import { allProducts } from "../../Data/Products_data";
import { ADDTOC } from "../actions/CheckoutAction";

const checkout = [
    //     {
    //     id:'ashok',
    //     name:'6369885434',
    //     price:'199',
    //     img:''
    // }
    ]

const CheckoutReducer = (state = checkout, action) => {
    switch (action.type) {
        case ADDTOC:
            const b = allProducts.find(product => product.id === action.id);
            if (b) {
                const checkoutProduct = {
                    id: b.id,
                    name: b.name,
                    price: b.price,
                    img: b.img
                };
                const Checkout = checkoutProduct

                return Checkout;
            }
        default:
            return state;
        }
    }

export default CheckoutReducer;
