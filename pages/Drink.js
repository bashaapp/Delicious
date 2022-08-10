import React from 'react';
import {View, Text,StyleSheet,FlatList,Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../constants/Theme';
import {DrinkData} from '../model/Data';
import {SoftDrink} from '../model/Data';


const Drink=({navigation})=>{

    const renderItem=({item})=>{
        return(
            
            <TouchableOpacity onPress={()=>navigation.navigate('details',{item})}
            style={style.flatlist}
            > 
                 
                <Image
                source={item.photo}
                resizeMode="contain"
                style={[style.image,]}
                /> 
                <View style={[style.itemDetails,{alignSelf:'center', marginLeft:'33%'}]}>
                <Text style={{fontSize:17, fontWeight:'bold', color:COLORS.primary,}}>{item.name}</Text>
                <Text style={style.price}>RM{item.price}</Text> 
                </View>
            </TouchableOpacity>
           
        )
    }
    return(
        <View style={style.container}>
            <View style={style.header}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Icon name='arrow-back' size={26} 
                style={{margin:10, width:30, height:30,color:COLORS.primary, 
                backgroundColor:COLORS.tertiary, borderRadius:10}}/>
            </TouchableOpacity>
           <View>
            <Text style={{fontSize:17, fontWeight:'bold', color:COLORS.lightGray,
        marginTop:'2%', marginHorizontal:'5%'}}>GET YOUR</Text>
          <Text style={{fontSize:20, fontWeight:'bold', color:COLORS.lightGray,
        marginTop:2, marginHorizontal:'5%'}}>FAVIROUTE CUP</Text>
        
          <Text style={{fontSize:30, fontWeight:'bold', color:COLORS.tertiary,
        marginTop:2, marginHorizontal:'5%',}}>70% OFF</Text>
            </View>
            </View>
            
            <View style={style.body}>

            <View style={{...StyleSheet.absoluteFillObject, backgroundColor:COLORS.primary}}/>
            <View style={{flex:1,backgroundColor: COLORS.tertiary, flex:1,borderTopLeftRadius:50}}>
            <View style={{flex:1, marginLeft:'50%', flexDirection:'row'}}>
            <Image
                   source={require('../assets/icons/cup.png')}
                   resizeMode="cover"
                   style={style.cup}
                   />
                  
            </View>
            <View style={{flex:1, position:'relative', top:-90}}>
                <View>
            <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={DrinkData}
            keyExtractor={item=>item.id}
            renderItem={renderItem}
            />
            </View>
            <View>
            <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={SoftDrink}
            keyExtractor={item=>item.id}
            renderItem={renderItem}
            />
           </View>
            </View>
          
            </View>
          
            </View>
        </View>
    )
}




const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.tertiary
    },
     header:{
      flex:1,
      backgroundColor:COLORS.primary,
      borderBottomRightRadius:50

    },
    cup:{
        width:'100%',
        height:'130%',
        top:'-70%',
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 10,
    },
        shadowOpacity: 0.60,
        shadowRadius: 7.68,
},
    body:{
        flex:2,
    },
    flatlist:{
        height:'40%',
        width:120,
        backgroundColor:COLORS.primary,
        borderTopRightRadius:60,
        borderBottomLeftRadius:60,
        marginLeft:10,
        marginRight:5,   
    },
    image:{
        height:90, 
        width:100, 
        alignSelf:'center', 
    
        shadowColor: COLORS.black,
        shadowOffset: {
        width: 0,
        height: 20,
    },
    shadowOpacity: 0.80,
    shadowRadius: 10.65,
    },
    itemDetails:{
        marginTop:5, 
        backgroundColor:COLORS.tertiary, 
        borderTopRightRadius:60,
        borderBottomLeftRadius:62,
    },
  
    price:{
        fontSize:17, 
        fontWeight:'bold',
        color:COLORS.primary,
        margin:5,
        textAlign:'center'
        },
})

export default Drink;