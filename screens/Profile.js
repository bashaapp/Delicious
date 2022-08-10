import React from 'react';
import {View, Text, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';
import {COLORS} from '../constants/Theme';
import Svg,{Path} from 'react-native-svg';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


const Profile =()=>{
    return(
        <View style={styles.container}>
          <View style={styles.header}>
            
      <Svg height="50%" width="100%" style={styles.svg} viewBox="0 0 1440 320">
        <Path
          fill={COLORS.primary}
          d="M0,160L120,176C240,192,480,224,720,218.7C960,213,1200,171,1320,149.3L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
        />
      </Svg>
      </View>
      <View style={styles.body}>
        <View style={styles.wrap}>
          <View>
          <Image 
          source={require('../assets/images/user.jpg')}
          style={styles.img}
          />
          <Icon name='camera' color={COLORS.lightGray} size={33} style={{alignSelf:'center', position:'absolute'}} />
          </View>

          <View style={{top:-30,alignSelf:'center'}}>
          <Text style={{fontSize:30, fontWeight:'bold', color:COLORS.primary}}>Bashamlan</Text>
          <Text style={{fontSize:15, fontWeight:'500', color:COLORS.lightGray4, textAlign:'center'}}>@basha_2020</Text>
          </View>

          <View style={{top:-30, }}>
            <View style={{flexDirection:'row',}}>
              <Icon name='user' size={30} color={COLORS.primary} style={{marginLeft:20, bottom:7, position:'absolute'}}/>
              <TextInput 
               placeholder="Name..."
               style={[styles.textInput,{marginLeft:15,paddingLeft:40, }]}
              />
            </View>
           
            <View style={{flexDirection:'row'}}>
              <Icon name='lock' size={30} color={COLORS.primary} style={{marginLeft:20, bottom:7, position:'absolute'}}/>
              <TextInput 
               placeholder="Password..."
               style={[styles.textInput,{marginLeft:15,paddingLeft:40, }]}
              />
            </View>
            <View style={{flexDirection:'row'}}>
              <MaterialCommunityIcons name='email-outline' size={30} color={COLORS.primary} style={{marginLeft:20, bottom:7, position:'absolute'}}/>
              <TextInput 
               placeholder="Email..."
               style={[styles.textInput,{marginLeft:15,paddingLeft:40, }]}
              />
            </View>
            <View style={{flexDirection:'row'}}>
              <Icon name='phone' size={30} color={COLORS.primary} style={{marginLeft:20, bottom:7, position:'absolute'}}/>
              <TextInput 
               placeholder="Phone..."
               style={[styles.textInput,{marginLeft:15,paddingLeft:40, }]}
              />
            </View>
          </View>
          <TouchableOpacity style={styles.btn}>
            <Text style={{fontSize:25, fontWeight:'bold', textAlign:'center', color:COLORS.black}}>Save</Text>
          </TouchableOpacity>
        </View>
        </View>
          
    </View>
           
         

          
     
    )
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.tertiary
    },
    header:{ 
      backgroundColor:COLORS.primary, 
      height: 180,
    },
    svg: {
      position: 'absolute',
      top: 170,
    },
    body:{
      flex:2,
      alignItems:'center',
    },
    img:{
      width:100,
      height:100,
      top:-30,
      borderRadius:50,
      borderColor:COLORS.primary,
      borderWidth:2,
      alignSelf:'center'
    },
    wrap:{
      width:'90%', 
      height:'100%', 
    backgroundColor:'rgba(0,0,0,0.7)', 
    top:-40, 
    borderRadius:30
  },
  textInput:{
    height:50, 
    width:'90%',
    borderBottomColor:COLORS.primary, 
    borderBottomWidth:2,
    alignSelf:'center'
  },
  btn:{
    marginTop:'8%',
    width:'60%', height:40, 
    alignSelf:'center',
     backgroundColor:COLORS.primary, 
     borderRadius:30
}
  
  
  });

export default Profile;