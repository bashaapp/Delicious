import React from 'react';
import {View, StyleSheet, Text, ImageBackground, Image, TouchableOpacity} from 'react-native';
import images from '../constants/Images';
import {COLORS} from '../constants/Theme';

const Splash =({navigation})=>{
    return(
     <ImageBackground
        source={require('../assets/images/bc4.jpg')}
        resizeMode="cover"
        style={{
           width:'100%',
           height:"100%",
           flex:1
       }}
       >
        <View style={{background:"rgba(0,0,0,0.6)", flex:1, }}>
        <View style={style.header}>
         <Image
          resizeMode="contain"
          source={images.logo}
          style={{
              width:'140%',
              height:"140%",
              tintColor:COLORS.primary,

              
          }}/>
          </View>
         <View style={style.body}>
          <Image 
          source={require('../assets/images/app_name.png')}
          style={{
              width:"70%",
              height:"70%",
              tintColor:COLORS.primary,
              position:'absolute',
              top:-90
              
          }}
          />
          <TouchableOpacity style={style.btn} onPress={()=>navigation.navigate('Login')}>
            <Text style={style.textBtn}>Let's Started</Text>
          </TouchableOpacity>

         </View>
           
           <Text style={{color:COLORS.primary, fontSize:14, bottom:20, textAlign:'center'}}>Powered By @Bashamlan</Text>
          </View>
           </ImageBackground>
       
       
    )
}

export default Splash;

const style =StyleSheet.create({
    header:{
        flex:1,
        alignItems:'center'
    },
    body:{
        flex:1,
         justifyContent:'center',
         alignItems:"center",
},
btn:{
    width:'80%',
    height:45,
    borderRadius:30,
    borderWidth:2,
    borderColor:COLORS.primary,
    marginTop:10,
    alignItems:'center',
    justifyContent:'center'
},
textBtn:{
    fontSize:22, 
    fontWeight:'bold',
    textAlign:'center', 
    color:COLORS.primary
}
})