import React ,{useReducer, useContext,createContext} from 'react';
import { Data, BugerData} from '../model/Data';
import images from '../constants/Images';

const CartStateContext = createContext();
const CartDispatchContext = createContext();
const initialState = {
  
    products: Data,
    cart: [],

   
  
  };
 
const reducer = (state = initialState, action)=>{
    switch(action.type){
        case 'ADD':
            const item = state.products.find(
                (product) => product.id === action.payload.id
              );
              // Check if Item is in cart already
              const inCart = state.cart.find((item) =>
                item.id === action.payload.id ? true : false
              );
        
              return {
                ...state,
                cart: inCart
                  ? state.cart.map((item) =>
                      item.id === action.payload.id
                        ? { ...item, qty: item.qty + 1 }
                        : item
                    )
                  : [...state.cart, { ...item, qty: 1 }],
              };
            
        case 'DELETE':
        return {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload.id),
          };
       
        case 'INCREASE':
               const tempCart = state.cart.map((cartItem) => {
                if (cartItem.id === action.payLoad.id) {
                  return { ...cartItem, qty: cartItem.qty + 1 };
                }
                return cartItem;
              });
              return { ...state, cart: tempCart };
        
        case 'DECREASE':
                const temp = state.cart
                  .map((cartItem) => {
                    if (cartItem.id === action.payLoad.id) {
                      return { ...cartItem, qty: cartItem.qty - 1 };
                    }
                 return cartItem;
                  })
                  .filter((cartItem) => cartItem.qty !== 0);
                return { ...state, cart: temp };
              
        case 'CLEAR':
              return {cart :[]}
           
        default:
            throw new Error(`unknow action.${action.type}`)
    }

}

export const CartProvider =({children})=>{
    const [state, dispatch] = useReducer(reducer,initialState)
    return(
        <CartDispatchContext.Provider value={dispatch}>
        <CartStateContext.Provider value={state}>
            {children}
        </CartStateContext.Provider>

        </CartDispatchContext.Provider>
    )
}

export const useCart = ()=>useContext(CartStateContext);
export const useDispatch =()=> useContext(CartDispatchContext);