import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Drawer } from 'react-native-paper';
import {COLORS} from '../constants/Theme';
import {AuthContext} from '../components/AuthContext';

const DrawerContent =(props)=>{
    const {signOut} = React.useContext(AuthContext)
    return(
        <View style={style.container}>
            <View style={style.header}>
            <Image 
            source={require('../assets/images/user.jpg')}
            style={style.profile}
            />
            <Text style={style.name}>Bashamlan</Text>
            </View>
            
            <Drawer.Section style={{flex:1}}>
                <View style={{...StyleSheet.absoluteFillObject, backgroundColor:'rgba(255, 153, 0,0.1)', 
               }}>
                  <View style={{
                      paddingTop:20, borderTopLeftRadius:50, borderBottomRightRadius:50, 
                      backgroundColor:'rgba(96,89,71,0.1)',flex:1,
                      
                  }}>
                      <DrawerItem 
                      icon={()=>(
                          <Icon 
                          name='home-outline'
                          color={COLORS.primary}
                          size={25}
                          />
                      )}
                      label="Home"
                      labelStyle={{color:COLORS.primary}}
                      onPress={()=>{}}
                      />
                      <DrawerItem 
                      icon={()=>(
                          <Icon 
                          name="account-outline"
                          color={COLORS.primary}
                          size={25}
                          />
                      )}
                      label="My account"
                      labelStyle={{color:COLORS.primary}}
                      onPress={()=>{}}
                      />
                      <DrawerItem 
                      icon={()=>(
                          <MaterialIcons 
                          name="shopping-basket"
                          color={COLORS.primary}
                          size={25}
                          />
                      )}
                      label="My Orders"
                      labelStyle={{color:COLORS.primary}}
                      onPress={()=>{}}
                      
                      />
                      <DrawerItem
                      icon={()=>(
                          <MaterialIcons
                          name="settings"
                          color={COLORS.primary}
                          size={25}
                          />
                      )}
                      label="Settings"
                      labelStyle={{color:COLORS.primary}}
                      onPress={()=>{}}
                      />
                      <DrawerItem
                      icon={()=>(
                          <Icon 
                          name="account-check-outline"
                          color={COLORS.primary}
                          size={25}
                          />
                      )}
                      label="Support"
                      labelStyle={{color:COLORS.primary}}
                      onPress={()=>{}}
                      />

                  </View>
                </View>

            </Drawer.Section>
            <View style={style.exit}>
             <DrawerItem 
             icon={()=>(
                 <Icon 
                 name="exit-to-app"
                 color={COLORS.primary}
                 size={25}
                 />
             )}
             label="Sign Out"
             labelStyle={{color:COLORS.primary}}
             onPress={()=>{signOut()}}
             />
            </View>

        </View>

    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
       
    },
    header:{
        flex:0.3,
        backgroundColor:'rgba(96,89,71,0.1)',
        borderBottomRightRadius:50,
        borderBottomColor:COLORS.primary,
        borderBottomWidth:1
    },
    profile:{
        width:80,
        height:80,
        borderRadius:40,
        borderWidth:2,
        borderColor:COLORS.primary,
        padding:10,
        alignSelf:'center',
        marginTop:10
    },
    name:{
        color:COLORS.primary,
        fontSize:20,
        fontWeight:'800',
        textAlign:'center',
        paddingVertical:10
    },
    drawerItem:{
       
        borderTopColor:COLORS.primary,
        borderTopWidth:1
    },
    exit:{
        height:55, 
        marginBottom:-10, 
        bottom:5, 
        backgroundColor:'rgba(96,89,71,0.1)',
        borderTopLeftRadius:50,
        borderTopColor:COLORS.primary,
        borderTopWidth:1
        },
})

export default DrawerContent;