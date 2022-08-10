import React,{useState} from 'react';
import {View, Text, 
    StyleSheet, 
    ImageBackground, 
    TouchableOpacity, 
    TextInput} from 'react-native';
import {COLORS} from '../constants/Theme';
import Icon from 'react-native-vector-icons/FontAwesome';
import Svg,{Path} from 'react-native-svg';
 import Zocial from 'react-native-vector-icons/Zocial';
import axios from 'axios';


const Register = ({navigation})=>{
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 




  const signupHandler = () => {
    const signupData = {
      fullName: fullName,
      username: username,
      email: email,
      password: password,
     
    }
   axios.post('http://localhost:4000/app/signup', signupData)
        .then(response => console.log(response.data))
  }


    return(
        <View style={style.container}>
            <ImageBackground source={require('../assets/images/bc7.jpg')}
               resizeMode="cover"
               style={{
                   width:'100%', height:'100%',
                   }}
            >
                <View style={{marginTop:'10%', marginLeft:'5%',  backgroundColor:'rgba(0,0,0,0.5)', flex :0.2}}>
                    <Text style={{fontSize:40, fontWeight:'bold', color:COLORS.primary}}>Create an account</Text>
                </View>

             <View style={style.body}>
             <Svg height="50%" width="100%" style={style.svg} viewBox="0 0 1440 320">
        <Path
          fill={COLORS.primary}
          d="M0,320L48,266.7C96,213,192,107,288,96C384,85,480,171,576,
          197.3C672,224,768,192,864,154.7C960,117,1056,75,1152,101.3C1248,
          128,1344,224,1392,272L1440,320L1440,0L1392,0C1344,0,1248,0,
          1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,
          288,0C192,0,96,0,48,0L0,0Z"
        />
      </Svg> 

              <View style={{marginTop:10, alignItems:'center', backgroundColor:COLORS.primary,top:-10,
             borderTopLeftRadius:50,
             borderTopRightRadius:50,}}>
              <Text style={{fontSize:30, fontWeight:'bold', color:COLORS.primary}}>Register</Text>
              </View>

            <View style={{marginTop:'20%', marginLeft:'3%',marginRight:'3%'}}>
            <View style={{flexDirection:'row',}}>
              <Icon name='user' size={30} color={COLORS.primary} style={{marginLeft:2, bottom:7, position:'absolute'}}/>
              <TextInput 
               placeholder="Full Name"
               onChangeText={text => setFullName(text)} value={fullName}
               style={style.textInput}
              />
            </View>
            </View>

            <View style={{marginTop:'5%', marginLeft:'3%',marginRight:'3%'}}>
            <View style={{flexDirection:'row',}}>
              <Icon name='user' size={30} color={COLORS.primary} style={{marginLeft:2, bottom:7, position:'absolute'}}/>
              <TextInput 
               placeholder="User Name"
               onChangeText={text => setUsername(text)} value={username}
               style={style.textInput}
              />
            </View>
            </View>

            <View style={{marginTop:'5%', marginLeft:'3%',marginRight:'3%'}}>
            <View style={{flexDirection:'row',}}>
              <Zocial name='email' size={30} color={COLORS.primary} style={{marginLeft:2, bottom:7, position:'absolute'}}/>
              <TextInput 
               placeholder="email"
               onChangeText={text => setEmail(text)} value={email}
               style={style.textInput}
              />
            </View>
            </View>

            <View style={{marginTop:'5%', marginLeft:'3%',marginRight:'3%'}}>
            <View style={{flexDirection:'row',}}>
              <Icon name='lock' size={30} color={COLORS.primary} style={{marginLeft:2, bottom:7, position:'absolute'}}/>
              <TextInput 
               placeholder="Passcode"
               secureTextEntry
               onChangeText={text => setPassword(text)} value={password}
               style={style.textInput}
              />
            </View>
            </View>

          

            <View style={{marginTop:'10%', alignItems:'center', flexDirection:'row',}}>
             <TouchableOpacity onPress={signupHandler}
             style={{width:'55%', height:45, marginHorizontal:8,
               backgroundColor:COLORS.primary, borderRadius:10}}>
               <Text style={{fontSize:25, fontWeight:'bold', textAlign:'center',
                color:COLORS.black}}>Register</Text>
             </TouchableOpacity>
             <TouchableOpacity onPress={()=>navigation.navigate('login')}
              style={{width:'40%', height:45, backgroundColor:COLORS.primary, borderRadius:10}}>
               <Text style={{fontSize:25, fontWeight:'bold', textAlign:'center',
                color:COLORS.black}}>Login</Text>
             </TouchableOpacity>
             </View>

           
             
           

            </View>
           
           </ImageBackground>
        </View>
    )
}


const style = StyleSheet.create({
    container:{
        flex:1,
      
    },
    body:{
       height:'75%',
       width:'100%',
       alignSelf:'center',
       backgroundColor:'rgba(96,89,71,0.8)',
       borderTopLeftRadius:50,
       borderTopRightRadius:50,
       position:'absolute',
       bottom:0,
     },
     svg: {
        position: 'absolute',
        top: -45,
      
        
      },
     textInput:{
        height:50, 
        outlineStyle: "none",
      
       
        width:'100%',
        borderBottomColor:COLORS.primary, 
        borderBottomWidth:2,
        alignSelf:'center',
        textAlign:'center',
        color:COLORS.primary,
        fontSize:20,
        

      },

})

export default Register;