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
                style={{margin:10, width:30, height:30,color:COLORS.primary,borderRadius:10}}/>
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
           
        <ScrollView
        style={{marginTop:'3%', marginBottom:'10%'}}>
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
                     style={{width:60,backgroundColor:COLORS.primary, height:30, justifyContent:'center', alignItems:'center', borderRadius:20}}>
                         <Text style={{ fontSize:30, fontWeight:'bold', }}>+</Text>
                     </TouchableOpacity>

                     <View style={{backgroundColor:COLORS.primary, borderRadius:20,width:40, height:30, marginHorizontal:4}}>
                         <Text style={{fontSize:25, fontWeight:'bold', textAlign:'center',}}>{item.qty}</Text>
                     </View> 

                     <TouchableOpacity  onPress={()=>decrease(item)}
                      style={{width:60,backgroundColor:COLORS.primary, height:30, justifyContent:'center', alignItems:'center', borderRadius:20}}>
                         <Text style={{ fontSize:30, fontWeight:'bold', }}>-</Text>
                     </TouchableOpacity> 
                     </View>

                     <TouchableOpacity style={{marginRight:'2%'}} onPress={()=>Delete(item)}>
                        <FontAwesome name="trash" size={35} color={COLORS.primary} />
                     </TouchableOpacity> 
                    </View>
                    </View>
                </View>
            </View>
            )}
            </ScrollView>
            <View  style={{
                             flexDirection:'row',
                             top: -30,
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginLeft:7,
                            marginRight:7
                        }}> <TouchableOpacity
                            style={{
                                width: '63%',
                                padding: 10,
                                backgroundColor: COLORS.primary,
                                alignItems: 'center',
                                borderRadius: 10
                            }}
                           
                            onPress={() =>Clear()}
                        >
                            <Text style={{ color:COLORS.black, fontSize: 20, fontWeight: 'bold' }}>Place Order</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                width: '35%',
                                padding: 10,
                                backgroundColor: COLORS.primary,
                                alignItems: 'center',
                                borderRadius: 10
                            }}
                            onPress={() =>navigation.goBack()}
                        >
                            <Text style={{ color:COLORS.black, fontSize: 20, fontWeight: 'bold' }}>Back</Text>
                        </TouchableOpacity>
                        </View>
            </View>
           
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
