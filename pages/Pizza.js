import React from 'react';
import {View, Text,StyleSheet, TouchableHighlight, Image,
     FlatList, TouchableOpacity} from 'react-native';
import {COLORS} from '../constants/Theme';
import {PizzaData} from '../model/Data';
import Icon from 'react-native-vector-icons/MaterialIcons';
import StarRating from '../model/StarRating';
const Pizza=({navigation})=>{
        
    const renderItem=({item})=>{
        return(
            <TouchableOpacity onPress={()=>navigation.navigate('details',{item})}>
            <View style={style.card}>
             <View style={{alignItems:'center', top:-40}}>
                 <Image 
                 source={item.photo}
                 style={{width:120, height:120, backgroundColor:COLORS.tertiary, borderRadius:80}}/>
                 </View>
                
                 <View style={{ 
               backgroundColor:COLORS.tertiary, 
               borderTopRightRadius:55,
               borderBottomLeftRadius:35, top:-35}}>
             
               <Text style={{fontSize:18, fontWeight:'bold', color:COLORS.primary, marginLeft:3}}>{item.name}</Text>
                <StarRating  ratings={4} reviews={99} />
                <Text style={{fontSize:17, textAlign:'center', fontWeight:'bold', color:COLORS.primary, marginTop:2}}>RM{item.price}</Text>
                <Icon name='add' size={28} color={COLORS.tertiary} style={style.add}/>
             
              </View>
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
        marginTop:2, marginHorizontal:'5%'}}>FAVIROUTE PIZZA</Text>
        
          <Text style={{fontSize:30, fontWeight:'bold', color:COLORS.tertiary,
        marginTop:2, marginHorizontal:'5%',}}>30% OFF</Text>
            </View>
            </View>

            <View style={style.body}>
             <View style={{...StyleSheet.absoluteFillObject, backgroundColor:COLORS.primary}} />
              <View style={{flex:1, backgroundColor:COLORS.tertiary, borderTopLeftRadius:50}}>
              <View>
              <Image
              resizeMode="cover"
              source={require('../assets/images/p7.png')}
              style={{width:150, height:150,top:-100 , alignSelf:'flex-end',marginRight:'8%'}}
              />
              </View>

              <View style={{alignItems:'center', height:'90%', position:'relative', top:"-20%"}}>
                <FlatList
                  showsVerticalScrollIndicator={false}
                  data={PizzaData}
                  keyExtractor={item=>item.id}
                  renderItem={renderItem}
                  numColumns={2}
                  contentContainerStyle={{marginBottom:'10%'}}
                  />
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
    body:{
        flex:2
    },
    card:{
        height:180,
        width:160,
        marginHorizontal:10,
        marginBottom:20,
        marginTop:30,
        borderRadius:20,
        backgroundColor:COLORS.primary,
        shadowColor: COLORS.black,
        shadowOffset: {
        width: 0,
        height: 10,
    },
        shadowOpacity: 0.60,
        shadowRadius: 7.68,

    },
    add:{
        height:30,
        width:30,
        borderRadius:20,
        backgroundColor:COLORS.primary,
        justifyContent:'flex-end',
       alignSelf:'flex-end',
       marginRight:5,
        top:-50
    }
})

export default Pizza;