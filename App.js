import React,{useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Tabs from './navigation/Rootstack';
import DrawerContent from './screens/DrawerContent';
import {CartProvider} from './components/Context';
import Authentication from './authentication/Authentication';
import{View, ActivityIndicator} from 'react-native';
import {AuthContext} from './components/AuthContext';

const Drawer = createDrawerNavigator();

const App =()=>{

  const initialState ={
    isloading:true,
    userName:null,
    userToken:null
  }

const loginReducer = (state,action)=>{
  switch(action.type){
    case'RETRIEVE_TOKEN':
    return{
      ...state,
      userToken:action.token,
      isloading:false,
    }
    case 'LOGIN':
      return{
        ...state,
        userName:action.id,
        userToken:action.token,
        isloading:false,
      }
      case 'LOGOUT':
        return{
          ...state,
          userName:null,
          userToken:null,
          isloading:false
        }

       case 'REGISTER':
         return{
           ...state,
           userName:action.id,
           userToken:action.token,
           isloading:false
         } 
  }
}

const [loginState, dispatch] = React.useReducer(loginReducer,initialState)

const authContext = React.useMemo(()=>({
  signIn:(foundUser)=>{
    const userToken = String(foundUser[0].userToken);
    const userName = foundUser[0].username;

    dispatch({type:'LOGIN', id:userName, token: userToken})
  },
  signOut:()=>{
    dispatch({type:'LOGOUT'})
  },
  signUp:()=>{
    setUserToken('basha');
    setIsloading(false)
  }
}),[])

useEffect(()=>{
  setTimeout(()=>{
    dispatch({type:'REGISTER', token:'all'})
  },1000)
},[])

if(loginState.isloading){
  return(
    <View style={{justifyContent:'center',alignItems:'center', flex:1}}>
       <ActivityIndicator size ='large'/>
    </View>
  )
}







  return(
  <CartProvider>
   <AuthContext.Provider value={authContext}>
    <NavigationContainer>
      {loginState.userToken !=null ? (

<Drawer.Navigator
drawerStyle={{backgroundColor: 'rgba(96,89,71,0.4)'}}
drawerContent={props=> <DrawerContent {...props}/>}>

 <Drawer.Screen name="tabs" component={Tabs} /> 

 </Drawer.Navigator>    
 )
 :
 <Authentication />
}
    
    </NavigationContainer>
    </AuthContext.Provider>
  </CartProvider>
  )
}
export default App;