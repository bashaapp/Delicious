import React,{ useState,} from 'react';
import {View, Text, 
    StyleSheet, 
    ImageBackground, 
    TouchableOpacity, 
    TextInput} from 'react-native';
import {COLORS} from '../constants/Theme';
import Icon from 'react-native-vector-icons/FontAwesome';
import Svg,{Path} from 'react-native-svg';
import Feather from 'react-native-vector-icons/Feather';
import {AuthContext} from '../components/AuthContext';
import {Users} from '../model/Users';
import * as Animatable from 'react-native-animatable';
//import axios from 'axios';

const Login = ({navigation})=>{
  
  const {signIn} = React.useContext(AuthContext)


 // const [username, putUsername] = useState("");
  //const [password, putPassword] = useState("");

 // const loginHandler = () => {
 //   const loginData = {
   //   username: username,
   //   password: password
  //  }
   // axios.get('http://localhost:4000/app/signup', loginData)
      //  .then(response => console.log(response.data))
 // }

     const [data, setData] = useState({
       username:'',
       password:'',
       check_textInput:false,
       secureTextEntry:true,
       isValidUser:true,
       isValidPassword:true
     })

  const textInput =(val)=>{
    if(val.trim().length >=4){
      setData({
        ...data,
        username:val,
        check_textInput:true,
        isValidUser:true

      })

    }else{
      setData({
        ...data,
        username:val,
        check_textInput:false,
        isValidUser:false
      })
    }
  }

   const handlePassword =(val)=>{
     if(val.trim().length >=8){
       setData({
         ...data,
         password:val,
         isValidPassword:true
       })
     }else{
       setData({
         ...data,
         password:val,
         isValidPassword:false
       })
     }
   }
     const toggle =()=>{
       setData({
         ...data,
         secureTextEntry:!data.secureTextEntry
       })
     }

  const handelValid=(val)=>{
    if(val.trim().length > 4){
      setData({
        ...data,
        isValidUser:true
      })
    }else{
      setData({
        ...data,
        isValidUser:false
      })
    }
  }

const loginHandle =(userName, password)=>{
  const foundUser = Users.filter(item =>{
    return userName == item.username && password == item.password
  })

  if(data.username.length == 0 || data.password.length == 0){
    alert('Wrong Input..! Username or Password Field is Empty',[
      {text:'Okay'}
    ])
    return;
  }
  if(foundUser.length == 0){
    alert('Invalid User..! Username or Password is Incorrect',[
      {text:'Okay'}
    ])
    return;
  }
  signIn(foundUser)
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
                    <Text style={{fontSize:40, fontWeight:'bold', color:COLORS.primary}}>Welcome To</Text>
                    <View style={{flexDirection:'row',marginTop:'4%'}}>
                    <Text style={{fontSize:17,fontWeight:'bold', color:COLORS.primary}}>DELICIOUS</Text>
                    <Text style={{fontSize:17,fontWeight:'bold', color:COLORS.lightGray}}> The Best Platform Food</Text>

                    </View>
                </View>

             <View style={style.body}>
             <Svg height="50%" width="100%" style={style.svg} viewBox="0 0 1440 320">
        <Path
          fill={COLORS.primary}
          d="M0,64L60,106.7C120,149,240,235,360,240C480,245,600,171,720,128C840,85,
          960,75,1080,90.7C1200,107,1320,149,1380,170.7L1440,192L1440,0L1380,
          0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        />
      </Svg> 

              <View style={{marginTop:10, alignItems:'center', backgroundColor:COLORS.primary,top:-10,
             borderTopLeftRadius:50,
             borderTopRightRadius:50,}}>
              <Text style={{fontSize:30, fontWeight:'bold', color:COLORS.primary}}>Login</Text>
              </View>

            <View style={{marginTop:'20%', marginLeft:'3%',marginRight:'3%'}}>
            <View style={{flexDirection:'row',}}>
              <Icon name='user' size={30} color={COLORS.primary} style={{marginLeft:2, bottom:7, position:'absolute'}}/>
              <TextInput 
               id='username'
               placeholder="Email or Username"
              // onChangeText={text => putUsername(text)}
               style={style.textInput}
               onEndEditing={(e)=>handelValid(e.nativeEvent.text)}
               onChangeText={(val)=>textInput(val)}
              />
              {data.check_textInput ?
              <Feather 
              style={{position:'absolute', right:'2%', alignSelf:'center'}}
              name="check-circle"
              color={COLORS.primary} size={20}
              />
              : null
               }
            </View>
            </View>

            {data.isValidUser ? null :
                  <Animatable.View animation='fadeInLeft'>
                      <Text  style={{color:'#dcdcdc', alignSelf:'center'}}>Username Muse be More than 4 Characters...!</Text>
                  </Animatable.View>
                 }
              
            <View style={{marginTop:'5%', marginLeft:'3%',marginRight:'3%'}}>
            <View style={{flexDirection:'row',}}>
              <Icon name='lock' size={30} color={COLORS.primary} style={{marginLeft:2, bottom:7, position:'absolute'}}/>
              <TextInput 
              id='password'
               placeholder="Passcode"
               secureTextEntry={data.secureTextEntry ? true : false}
               style={style.textInput}
              // onChangeText={text => putPassword(text)}
              onChangeText={(val)=> handlePassword(val)}
              />

              <TouchableOpacity onPress={toggle}>
                {data.secureTextEntry ?
                <Feather 
                style={{position:'absolute', right:'2%', top:8}}
                name='eye-off'
                color={COLORS.primary}
                size={20}
                />
                :
                <Feather
                style={{position:'absolute', right:'2%', top:8}}
                name="eye"
                color={COLORS.primary}
                size={20}
                
                />
                  }
              </TouchableOpacity>

            </View>
            <View style={{marginTop:10,alignItems:'flex-end'}}>
            <Text style={{fontSize:15, color:COLORS.primary, }}>Forgot Password ?</Text>
            </View>

            {data.isValidPassword ? null
                   :
                  <Animatable.View animation='fadeInLeft'>
                      <Text style={{color:'#dcdcdc', alignSelf:'center'}}>Password Must be 8 Characters</Text>
                  </Animatable.View>
                  }
            </View>
            <View style={{marginTop:'15%', alignItems:'center'}}>
             <TouchableOpacity onPress={()=>loginHandle(data.username, data.password)}
             //onPress={loginHandler}
             style={{width:'80%', height:40, backgroundColor:COLORS.primary, borderRadius:40}}>
               <Text style={{fontSize:25, fontWeight:'bold', textAlign:'center',
                color:COLORS.black}}>Login</Text>
             </TouchableOpacity>
             </View>

             <TouchableOpacity onPress={()=>navigation.navigate('register')}
             
             style={{marginTop:'7%',alignItems:'center'}}>
               <Text style={{fontSize:17, color:COLORS.primary}}>New user? Register Now</Text>
             </TouchableOpacity>
             
             <View style={{marginTop:'8%', flexDirection:'row',
             justifyContent:'space-between', marginLeft:'10%', marginRight:'10%'}}>
              <TouchableOpacity style={{
                borderRadius:50,backgroundColor:COLORS.black,
                width:50, height:50,
                alignItems:'center', justifyContent:'center'}}>
              <Icon 
              name='facebook' size={30} color={COLORS.primary} 
              
              />
              </TouchableOpacity>
              <TouchableOpacity style={{
                borderRadius:50,backgroundColor:COLORS.black,
                width:50, height:50,
                alignItems:'center', justifyContent:'center'}}>
              <Icon 
              name='google' size={30} color={COLORS.primary} 
              
              />
              </TouchableOpacity>
              <TouchableOpacity style={{
                borderRadius:50,backgroundColor:COLORS.black,
                width:50, height:50,
                alignItems:'center', justifyContent:'center'}}>
              <Icon 
              name='instagram' size={30} color={COLORS.primary} 
              
              />
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

export default Login;