import React from 'react';
import {View, Text,StyleSheet, FlatList, Image, TouchableOpacity, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import {COLORS} from '../constants/Theme';
import {BugerData} from '../model/Data';

const Burger=({navigation})=>{



    const renderItem=({item})=>{
        return(
            
            <TouchableHighlight onPress={()=>navigation.navigate('details',{item})}>
          <View style={style.card}>
              <View style={{alignItems:'center', top:-40}}>
                 <Image source={item.photo} style={{height:120, width:120}}/>
              </View>

           <View style={{ 
               backgroundColor:COLORS.tertiary, 
               borderTopRightRadius:55,
               borderBottomLeftRadius:62, top:-40}}>
             
               <Text style={{fontSize:15, fontWeight:'bold', color:COLORS.primary, marginLeft:3}}>{item.name}</Text>
                <Text style={{fontSize:17, textAlign:'center', fontWeight:'bold', color:COLORS.primary, marginTop:2}}>RM{item.price}</Text>
                <Icon name='add' size={28} color={COLORS.tertiary} style={style.add}/>
             
              </View>
              </View>

          
          </TouchableHighlight>

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
        marginTop:2, marginHorizontal:'5%'}}>FAVIROUTE BURGER</Text>
        
          <Text style={{fontSize:30, fontWeight:'bold', color:COLORS.tertiary,
        marginTop:2, marginHorizontal:'5%',}}>50% OFF</Text>
            </View>
               
             
           </View>
           <View style={style.body}>
           <View style={{...StyleSheet.absoluteFillObject, backgroundColor:COLORS.primary}} />
            <View style={{flex:1, backgroundColor: COLORS.tertiary,borderTopLeftRadius:50}}>
            <View>
            <Image
              resizeMode="cover"
              source={require('../assets/images/b6.png')}
              style={{width:200, height:200,top:-100 , alignSelf:'flex-end',marginRight:'8%'}}
              />
              </View>
            <View style={{ alignItems:'center',height:'90%', position:'relative', top:'-30%'}}>
            <FlatList 
            data={BugerData}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            renderItem={renderItem}
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
        height:'30%',
        backgroundColor:COLORS.primary,
        borderBottomRightRadius:50
        
    }, 
    body:{
        flex:2,
        backgroundColor:COLORS.tertiary,
        
    }, 
    card:{
        
        height:150,
        width:170,
        marginHorizontal:10,
        marginBottom:20,
        marginTop:30,
        borderRadius:3,
        backgroundColor:COLORS.primary,
        borderTopRightRadius:50,
        borderBottomLeftRadius:50,
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

export default Burger;