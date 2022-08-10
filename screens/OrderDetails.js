import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Animated} from 'react-native';
import {COLORS} from '../constants/Theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import StarRating from '../model/StarRating';
import * as Animatable from 'react-native-animatable';




const OrderDetails = ({route, navigation})=>{
    const [orderItem, setOrderItem] = React.useState([]);

    const editOrder =(action, id, price)=>{
        let orderList = orderItem.slice();
        let item = orderList.filter(a=> a.id==id)
        if(action == '+'){
    
           
            
            if(item.length > 0){
                let newQty = item[0].qty + 1
                item[0].qty = newQty
                item[0].total = newQty * price
            }else{
                const newItem = {
                    id:id,
                    qty:1,
                    price:price,
                    total:price
                }
                orderList.push(newItem)
    
            }
          setOrderItem(orderList)
    
        } else if (action =='-'){
            if(item.length > 0){
                let newQty = item[0].qty -1
                item[0].qty = newQty
                item[0].total = newQty * price
            }
            setOrderItem(orderList)
    
    
        }
    }
     const getOrderQty =(id)=>{
    
        let orderItems = orderItem.filter(a=>a.id==id)
        if(orderItems.length > 0){
            return orderItems[0].qty
        }
        return 0
    
     }
     const getItemCount =()=>{
         let itemCount = orderItem.reduce((a,b)=>a + (b.qty||0),0)
         return itemCount
          
        }
    
        const sumOrder =()=>{
            let total = orderItem.reduce((a,b)=>a+(b.total|| 0),0)
            return total.toFixed(2)
        }
    const item = route.params.item
    return(
        <Animatable.View 
        animation='fadeInUpBig'
        style={style.container}>
            <View style={style.header}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Icon name='arrow-left' size={26} 
                style={{margin:10, width:30, height:30,color:COLORS.primary, 
                backgroundColor:COLORS.tertiary, borderRadius:10}}/>
            </TouchableOpacity>
            </View>

            <View style={style.body}>
               <View style={style.icon}>
               <StarRating rating={4} reviews={99}/>
                 <Icon 
                 name="heart-outline" size={28} style={{color:COLORS.primary,}} />
               </View>

               <View style={style.wrapped}>
                 <View style={style.qty}>
                 <Text style={{fontSize:30, fontWeight:'bold', color:COLORS.black, textAlign:'center', 
                 justifyContent:'center'}}>{getOrderQty(item.id)}</Text>
                 <Text style={{fontSize:14,fontWeight:'bold', textAlign:'center', color:COLORS.black}}>Quantity</Text>
                 </View>  

                 <View style={{flex:1, flexDirection:'row', top:-20,}}>
                     <View style={{flex:3, height:'120%', marginLeft:'1%', backgroundColor:COLORS.primary, borderRadius:20}}>
                       <View style={{alignItems:'center'}}>
                       <Image
                       source={item.photo}
                       resizeMode='contain'
                       style={{
                           width:200,
                           height:200,
                          }}
                       />
                        </View>
                        <View style={{margin:'2%'}}>
                           <Text style={{fontSize:20, fontWeight:'bold', color:COLORS.black}}>{item.name}</Text> 
                           <Text style={{fontSize:20, fontWeight:'bold', color:COLORS.black}}>${item.price.toFixed()}</Text> 
                        </View>

                        <View style={{marginTop:'3%', margin:'3%', flexDirection:'row',
                         justifyContent:'space-between'}}>
                        <Text style={{fontSize:17, fontWeight:'bold', color:COLORS.black}}>{getItemCount()} item in Cart</Text>
                        <Text style={{fontSize:17, fontWeight:'bold', color:COLORS.black}}>${sumOrder()}</Text>

                        </View>
                     </View>


                     <View style={{flex:1, borderRadius:40}}>
                       <View style={[style.qtyBtn, {justifyContent:'space-between'}]}>
                         <TouchableOpacity 
                            onPress={()=> editOrder('+', item.id, item.price)}
                         style={style.plus}>
                          <Text style={style.text}>+</Text>
                         </TouchableOpacity> 

                         <TouchableOpacity    onPress={()=> editOrder('-', item.id, item.price)}
                         style={style.minus}>
                          <Text style={style.text}>-</Text>
                         </TouchableOpacity>  

                        

                       </View>
                     </View>

                 </View>
                
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
                            onPress={() =>{}}
                        >
                            <Text style={{ color:COLORS.black, fontSize: 20, fontWeight: 'bold' }}>Place Order</Text>
                        </TouchableOpacity></View>
            </View>

        </Animatable.View>
    )
}


const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.primary
    },
    header:{
        flex:0.5,
        backgroundColor:COLORS.primary
    },

    body:{
        flex:2.5,
        backgroundColor:COLORS.tertiary,
        borderTopLeftRadius:50,
        borderTopRightRadius:50
    },
    icon:{
        flexDirection:'row', 
        marginTop:6, 
        justifyContent:'space-between', 
        marginLeft:'7%', 
        marginRight:'7%'
    },
    wrapped:{
        width:'95%',
        marginTop:'3%',
        height:'63%',
        alignSelf:'center',
    },
    qty:{
        width:70, 
        height:70, 
        alignSelf:'center', 
        backgroundColor:COLORS.primary, 
        top:-40, 
        borderRadius:50,
       
    },
    qtyBtn:{
     
        height:'110%', 
        width:'50%', 
        borderRadius:50, 
        alignSelf:'center',
        marginTop:'15%', 
        backgroundColor:COLORS.primary,
       // borderWidth:3,
      
    },
    plus:{
        width:40, 
        height:40, 
        borderRadius:50,
        marginTop:'5%',
        alignSelf:'center',
    },
    minus:{
        width:40, 
        height:40, 
        borderRadius:50,
        marginBottom:'40%',
        alignSelf:'center',
    },
    text:{
        fontSize:40, 
        fontWeight:'bold',
         color:COLORS.black, 
         alignSelf:'center',
        },
})

export default OrderDetails;