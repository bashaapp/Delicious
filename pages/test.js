//context 
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


///////////////////////////////home/////////////

import React,{useEffect}from 'react';
import {View, TextInput, 
    StyleSheet, 
    TouchableOpacity, 
    Image, 
    ScrollView, 
    Text, FlatList} from 'react-native';
import {COLORS} from '../constants/Theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import icons from '../constants/Icons';
import {Data} from '../model/Data';
import StarRating from '../model/StarRating';
import {useCart} from '../components/Context';
import {useDispatch} from '../components/Context';

const MenuOption =({icon,label,onPress})=>{

    return(
    <TouchableOpacity onPress={onPress}>
                <View style={style.list}>
               <View style={{flex:1, marginTop:3,}}>
                <Image 
                source={icon}
                resizeMode="contain"
                style={{
                    width:50,
                    height:50,
                    tintColor:COLORS.primary,
                    alignSelf:'center'}}
                
                />
                <Text style={style.text}>{label}</Text>
               </View>

                </View>
            </TouchableOpacity>
        
       

    )
}

const Home=({navigation, })=>{
    const {cart} = useCart();
    const dispatch = useDispatch();

    const addToCart = (item)=>{
        dispatch({type:'ADD', payload:item});
    }

    const [cartCount, setCartCount]=React.useState(0);
    useEffect(()=>{
        let count = 0;
        cart.forEach((item)=>{
         count +=item.qty;
        });
        setCartCount(count)
    })
    const renderHeader=()=>{
        return(
            <View style={style.header}>
                <View style={{flexDirection:'row', marginTop:'5%',}}>
                  <View style={{marginLeft:10}}>
                <TouchableOpacity onPress={()=> navigation.openDrawer()}>
                <Icon name='menu-open' size={28} />
                </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={()=>navigation.navigate('cart')}
                 style={{flex:1,alignItems:'flex-end', marginRight:10}}>
                <View style={{padding:5}}>
            <View style={{
              position:'absolute',
              height:30,
              width:30,
              borderRadius:20,
              backgroundColor:'rgba(0,0,0,0.5)',
              right:15, bottom:15, alignItems:'center',
              justifyContent:'center', zIndex:2000
            }}>
              <Text style={{fontWeight:'bold', color:COLORS.primary}}>{cartCount}</Text>
              </View>
            <MaterialCommunityIcons name="cart" color={COLORS.black} size={30} />
            </View>
                </TouchableOpacity>
            </View>
            <View style={style.inputMain}>
            <View style={style.inputContainer}>
            <Icon name='search' size={28} color={COLORS.primary}  style={style.searchIcon}/>
 
             <TextInput 
             placeholder="Search..."
             placeholderTextColor={COLORS.lightGray2}
             onFocus={false}
             style={style.input}
             />

            </View>
           </View>
              
            </View>
        )
    }

    const renderItem=({item})=>{
     
        return(
            
            <View style={style.flatlist}>
            <Image
            source={item.photo}
            resizeMode="contain"
            style={style.image}
            />
            <View style={style.itemDetails}>
            <Text style={{fontSize:15, fontWeight:'bold', color:COLORS.primary, margin:5}}>{item.name}</Text>
            <StarRating rating={4} reviews={99}/>
            <Text style={style.price}>RM{item.price}</Text>
            <TouchableOpacity
            onPress={()=>addToCart(item)}
             style={{
                marginTop:20,
                wihth:"100%",height:'40%',
                textAlign:'center', 
                color:COLORS.black, 
                backgroundColor:COLORS.primary,
                borderRadius:10,
                justifyContent:'center',
            }}>
            <Text style={{fontWeight:"bold", fontSize:20, color:COLORS.black,}}>Add To Cart</Text> 
            </TouchableOpacity>
          
            </View>
           
            </View>
            
          
          
        )
    }
    return(
        <View style={style.container}>
            {renderHeader()}
            
            <View style={style.body}>
            <View>
            <ScrollView   horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={style.scrollView}>
             <MenuOption
              icon={icons.food}
              label='Food'
              onPress={()=>navigation.navigate('food')}
             />
             <MenuOption
              icon={icons.drink}
              label='Drink'
              onPress={()=>navigation.navigate('drink')}
             />
             <MenuOption
              icon={icons.burger}
              label='Burger'
              onPress={()=>navigation.navigate('burger')}
             />
             <MenuOption
              icon={icons.pizza}
              label='Pizza'
              onPress={()=>navigation.navigate('pizza')}
             />
             <MenuOption
              icon={icons.sandwish}
              label='Sandwish'
              onPress={()=>navigation.navigate('sandwish')}
             />
             </ScrollView>
             </View>
             <View style={{marginTop:-20, marginLeft:5}}>
             <Text style={{ fontSize:18, color:COLORS.primary, fontWeight:'bold'}}> Popular Orders</Text>
             </View>
             <FlatList 
             data={Data}
             horizontal
             showsHorizontalScrollIndicator={false}
             keyExtractor={(item)=>item.id}
             renderItem={renderItem}
             />
             </View> 
             </View>
        
    )
}

const style= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.tertiary
    },
    header:{
        flex:0.8,
        backgroundColor:COLORS.primary,
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
    },
    inputMain:{
        
            width:'70%',
            height:'70%',
            borderRadius:25,
            top:'50%',
            backgroundColor:COLORS.tertiary,
            alignSelf:'center'
        
    },
   
    inputContainer:{
        width:'95%',
        height:'28%',
        borderRadius:25,
        borderColor:COLORS.primary,
        borderWidth:2,
        top:'3%',
        backgroundColor:COLORS.tertiary,
        alignSelf:'center',
        flexDirection: 'row',
    },
    searchIcon: {
        margin: 5,
    },
    input:{
        height:'50%',
         borderWidth:0, 
         flex:1,
         color:COLORS.primary, 
         outline:'none', 
         marginTop:8,
         marginRight:'5%'
       
         },
         scrollView:{
          paddingVertical:25,
          paddingHorizontal:20,
          alignItems:'center',
          flexDirection:'row',
        
          
         },
         text:{
             fontSize:15,
              fontWeight:'bold',
               color:COLORS.primary,
                textAlign:'center'
        },
        list:{
            height:80,
            width:100,
            marginRight:7,
            borderRadius:20,
            borderColor:COLORS.primary,
            borderWidth:2,
            paddingHorizontal:5,
            
        },
    body:{
        flex:2
    },
    flatlist:{
        marginTop:10,
        height:'70%',
        width:135,
        backgroundColor:COLORS.primary,
        borderRadius:20,
        marginLeft:10,
        marginRight:5,
        shadowColor: COLORS.primary,
        shadowOffset: {
	    width: 0,
	    height: 4,
    },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
    },
    image:{
        height:110, 
        width:'100%', 
        alignSelf:'center', 
        marginTop:5, 
        shadowColor: COLORS.black,
        shadowOffset: {
        width: 0,
        height: 10,
    },
    shadowOpacity: 0.50,
    shadowRadius: 4.65,
    },
    itemDetails:{
        marginTop:5, 
        backgroundColor:COLORS.tertiary, 
        borderTopRightRadius:45,
        borderBottomLeftRadius:45,
        flex:1
    },
    price:{
        fontSize:20, 
        fontWeight:'bold',
         color:COLORS.primary,
          margin:5,
           textAlign:'center'
        },

})

export default Home;



///////////////////////////////////Cart/////////////////////



import React from 'react';
import{COLORS} from '../constants/Theme';
import {View, Text,StyleSheet, TouchableOpacity, FlatList,Image, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome  from 'react-native-vector-icons/FontAwesome';
import {useCart} from '../components/Context';
import {useDispatch} from '../components/Context';
const Cart=({navigation,amount})=>{
 
    const {cart}= useCart();
    const dispatch = useDispatch();
  
    
    const Clear = (index) => {
       dispatch({ type: "CLEAR", index });
     };
    const Delete = (index)=>{
        dispatch({type:'DELETE', payload:index})
    }
    const increase = (id,qty) => {
        dispatch({ type: "INCREASE", payLoad: id,qty });
      };
      const decrease = (id,qty) => {
        dispatch({ type: "DECREASE", payLoad: id,qty });
      };
    
    const [totalPrice, setTotalPrice] = React.useState(0);
    const [totalItems, setTotalItems] = React.useState(0);

  React.useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  },);

    return(
        <View style={style.container}>
            { (cart.length === 0) ?
             <View style={{ flex:1,justifyContent:'center', alignItems:'center'}}>
               <Text style={{fontSize:30, color:COLORS.primary, fontWeight:'bold'}}>Your Cart is Empty</Text>
            </View>   
           :
           <View style={style.container}>
           <View style={style.header}>
               
           <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Icon name='arrow-back' size={26} 
                style={{margin:10, width:30, height:30,color:COLORS.primary, 
                backgroundColor:COLORS.tertiary, borderRadius:10}}/>
            </TouchableOpacity>
            <View style={{
                flexDirection:'row', 
                justifyContent:'space-between',
                 marginTop:'10%', 
                 marginRight:'7%', 
                 marginLeft:'7%'
                 }}>
                <Text style={style.total}>TOTAL</Text>
                <Text style={style.price}>RM{totalPrice.toFixed(2)}</Text>

            </View>
           </View> 

        <View style={style.body}>
           
        <ScrollView>
        {cart.map((item,index)=>
        <View>
                <View style={style.wrapped}>
                  <View style={style.imgContainer}>
                      <Image 
                      resizeMode="contain"
                      source={item.photo}
                      style={style.image}
                      />
                    </View>
                    <View style={style.titleContainer}>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={style.name}>{item.name}</Text>
                    <Text style={style.name}>RM{item.price}</Text>
                    </View>
                    <View style={{flexDirection:'row', marginTop:20, justifyContent:'space-between'}}>
                        
                    <View style={{flexDirection:'row',}}>
                     <TouchableOpacity
                     onPress={()=>increase(item)}
                     style={{marginRight:'5%',width:60,backgroundColor:COLORS.primary, height:30, justifyContent:'center', alignItems:'center', borderRadius:20}}>
                         <Text style={{ fontSize:30, fontWeight:'bold', }}>+</Text>
                     </TouchableOpacity>
                     <View><Text style={{fontSize:30, fontWeight:'bold'}}>{item.qty}</Text></View> 
                     <TouchableOpacity  onPress={()=>decrease(item)}
                      style={{width:60,backgroundColor:COLORS.primary, height:30, justifyContent:'center', alignItems:'center', borderRadius:20}}>
                         <Text style={{ fontSize:30, fontWeight:'bold', }}>-</Text>
                     </TouchableOpacity> 
                     </View>

                     <TouchableOpacity style={{marginRight:'5%'}} onPress={()=>Delete(item)}>
                        <FontAwesome name="trash" size={35} color={COLORS.primary} />
                     </TouchableOpacity> 
                    </View>
                    </View>
                </View>
            </View>
            )}
            </ScrollView>
              
            </View>
            <View  style={{
                             marginTop: '13%',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}> <TouchableOpacity
                            style={{
                                width: '90%',
                                padding: 20,
                                backgroundColor: COLORS.primary,
                                alignItems: 'center',
                                borderRadius: 20
                            }}
                            onPress={() =>Clear()}
                        >
                            <Text style={{ color:COLORS.black, fontSize: 20, fontWeight: 'bold' }}>Place Order</Text>
                        </TouchableOpacity></View>
            </View>
            
            }  
            </View>
        
    )
}

const style=StyleSheet.create({
    container:{
        flex:1,
       backgroundColor:COLORS.tertiary
    },
    header:{
        flex:0.5,
        backgroundColor:COLORS.primary,
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30
    },
    total:{
        fontSize:25, 
        color:COLORS.black, 
        fontWeight:'bold', 
        backgroundColor:COLORS.primary, 
        padding:5,
        borderColor:COLORS.tertiary, 
        borderWidth:3, 
        paddingHorizontal:'10%' ,
        borderRadius:20
    },
    price:{
        fontSize:23, 
        color:COLORS.black, 
        fontWeight:'bold',
        backgroundColor:COLORS.primary,
        borderColor:COLORS.tertiary, 
        borderWidth:3,
        paddingHorizontal:'4%', 
        padding:5,
        borderRadius:20
    },
    body:{
        flex:2,
        marginTop:'5%'
    },
    wrapped:{
        height:100,
        flexDirection:'row',
        marginRight:5,
        borderRadius:10,
        marginTop:'2%',
        marginLeft:'3%',
        marginVertical:3,
        borderWidth:1,
        borderColor:COLORS.primary,
      
         
         
     },
     imgContainer:{
         flex:1.3
     },
     image:{
         height:'100%',
         width:'100%',
         alignItems:'center',
         borderColor:COLORS.primary,
         borderWidth:2,
         borderRadius:10,
 
         
     },

     titleContainer:{
         flex:2.2,
         borderRadius:20,
         padding: 10,
         borderRadius:10,
      //   marginLeft:20
      
     },
     name:{
        fontWeight: 'bold',
        fontSize:20,
        color:COLORS.primary
     },
  
    
})

export default Cart;
