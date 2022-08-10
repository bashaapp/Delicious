import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Splash from './Splash';
import Login from './Login';
import Register from './Register';


const RootStack = createStackNavigator();

const Authentication =()=>{
    return(
        <RootStack.Navigator headerMode="none">
           <RootStack.Screen name='Splash' component={Splash}/>
            <RootStack.Screen name='Login' component={Login}  />
            <RootStack.Screen name='Register' component={Register}/>
        </RootStack.Navigator>
    )
}

export default Authentication;