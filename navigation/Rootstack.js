import React,{useEffect} from 'react';
import {View,Text} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import {COLORS} from '../constants/Theme';
import Icon from 'react-native-vector-icons/Ionicons';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 import FoodScreen from '../pages/Food';
 import Drink from '../pages/Drink';
 import Burger from '../pages/Burger';
 import Pizza from '../pages/Pizza';
 import Sandwish from '../pages/Sandwish';
 import OrderDetails from '../screens/OrderDetails';
 import Cart from '../pages/Cart';
 import {useCart} from '../components/Context';
 import Profile from '../screens/Profile';



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Tabs=({navigation})=>{

  const {cart} = useCart();
  const [cartCount, setCartCount]=React.useState(0);
  useEffect(()=>{
      let count = 0;
      cart.forEach((item)=>{
       count +=item.qty;
      });
      setCartCount(count)
  })
    return(
        <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        style:{
            height:50,
            borderTopWidth:2,
             borderTopColor:COLORS.primary,
            backgroundColor:COLORS.tertiary
        },
        showLabel:false,
        activeTintColor:COLORS.lightGray,
        inactiveTintColor:COLORS.primary
        
    }}
>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
        
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Home}
        options={{
         
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen 
            name="Search"
            component={Home}
            options={{
                tabBarIcon:({color})=>(
                    <View style={{
                        height:60,
                        width:60,
                        justifyContent:'center',
                        alignItems:'center',
                        backgroundColor:'#605947',
                        borderColor:COLORS.primary,
                        borderWidth:2,
                        borderRadius:50,
                        top:-20
                    }}>
                    <Icon name="md-restaurant-outline" color={color} size={28}/>


                    </View>
                )

                
            }}
            
            />
     
       <Tab.Screen
        name="cart"
        component={Cart}
        options={{
          tabBarIcon: ({ color }) => (
            <View style={{padding:5}}>
            <View style={{
              position:'absolute',
              height:30,
              width:30,
              borderRadius:20,
              backgroundColor:'rgba(0,0,0,0.8)',
              right:15, bottom:15, alignItems:'center',
              justifyContent:'center', zIndex:2000
            }}>
              <Text style={{fontWeight:'bold', color:COLORS.primary}}>{cartCount}</Text>
              </View>
            <MaterialCommunityIcons name="cart" color={color} size={30} />
            </View>
          ),
        }}
      />
       <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
    )
}

const HomeStack=()=>{
    return(
        <Stack.Navigator >
          <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
          <Stack.Screen name="food" component={FoodScreen} options={{headerShown:false}} />
          <Stack.Screen name="drink" component={Drink} options={{headerShown:false}} />
          <Stack.Screen name="burger" component={Burger} options={{headerShown:false}} />
          <Stack.Screen name="pizza" component={Pizza} options={{headerShown:false}} />
          <Stack.Screen name="sandwish" component={Sandwish} options={{headerShown:false}} />
          <Stack.Screen name="details" component={OrderDetails} options={{headerShown:false}} />
          <Stack.Screen name="cart" component={Cart} options={{headerShown:false}} />
          <Stack.Screen name="profile" component={Profile} options={{headerShown:false}} />


      





     </Stack.Navigator>
    )
}


export default Tabs;


