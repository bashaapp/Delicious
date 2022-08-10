import React,{useEffect}from 'react';
import {View, TextInput, 
    StyleSheet, 
    TouchableOpacity, 
    Image, 
    ScrollView, 
    Text, FlatList} from 'react-native';
import {COLORS} from '../constants/Theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import icons from '../constants/Icons';
import {Data} from '../model/Data';
import StarRating from '../model/StarRating';
import {useDispatch} from '../components/Context';

const MenuOption =({icon,label,onPress})=>{

    return(
    <TouchableOpacity onPress={onPress}>
                <View style={style.list}>
               <View style={{flex:1, marginTop:3,}}>
                <Image 
                source={icon}
                resizeMode="contain"
                style={{
                    width:50,
                    height:50,
                    tintColor:COLORS.primary,
                    alignSelf:'center'}}
                
                />
                <Text style={style.text}>{label}</Text>
               </View>

                </View>
            </TouchableOpacity>
        
       

    )
}

const Home=({navigation, })=>{
  
    const dispatch = useDispatch();

    const addToCart = (item)=>{
        dispatch({type:'ADD', payload:item});
    }

        
    const renderHeader=()=>{
        return(
            <View style={style.header}>
                <View style={{flexDirection:'row', marginTop:'5%',}}>
                  <View style={{marginLeft:10}}>
                <TouchableOpacity onPress={()=> navigation.openDrawer()}>
                <Icon name='menu-open' size={28} />
                </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={()=>{}}
                 style={{flex:1,alignItems:'flex-end', marginRight:10}}>
               
            <Image  
            source={require('../assets/images/user.jpg')}
            style={{
                width:30, height:30, borderRadius:20
            }}
            />
            
                </TouchableOpacity>
            </View>
            <View style={style.inputMain}>
            <View style={style.inputContainer}>
            <Icon name='search' size={28} color={COLORS.primary}  style={style.searchIcon}/>
 
             <TextInput 
             placeholder="Search..."
             placeholderTextColor={COLORS.lightGray2}
             onFocus={false}
             style={style.input}
             />

            </View>
           </View>
              
            </View>
        )
    }

    const renderItem=({item})=>{
     
        return(
            
            <View style={style.flatlist}>
            <Image
            source={item.photo}
            resizeMode="contain"
            style={style.image}
            />
            <View style={style.itemDetails}>
            <Text style={{fontSize:15, fontWeight:'bold', color:COLORS.primary, margin:5}}>{item.name}</Text>
            <StarRating rating={4} reviews={99}/>
            <Text style={style.price}>RM{item.price}</Text>
            <TouchableOpacity
            onPress={()=>addToCart(item)}
             style={{
                marginTop:20,
                wihth:"100%",height:'40%',
                textAlign:'center', 
                color:COLORS.black, 
                backgroundColor:COLORS.primary,
                borderRadius:10,
                justifyContent:'center',
            }}>
            <Text style={{fontWeight:"bold", fontSize:20, color:COLORS.black,}}>Add To Cart</Text> 
            </TouchableOpacity>
          
            </View>
           
            </View>
            
          
          
        )
    }
    return(
        <View style={style.container}>
            {renderHeader()}
            
            <View style={style.body}>
            <View>
            <ScrollView   horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={style.scrollView}>
             <MenuOption
              icon={icons.food}
              label='Food'
              onPress={()=>navigation.navigate('food')}
             />
             <MenuOption
              icon={icons.drink}
              label='Drink'
              onPress={()=>navigation.navigate('drink')}
             />
             <MenuOption
              icon={icons.burger}
              label='Burger'
              onPress={()=>navigation.navigate('burger')}
             />
             <MenuOption
              icon={icons.pizza}
              label='Pizza'
              onPress={()=>navigation.navigate('pizza')}
             />
             <MenuOption
              icon={icons.sandwish}
              label='Sandwish'
              onPress={()=>navigation.navigate('sandwish')}
             />
             </ScrollView>
             </View>
             <View style={{marginTop:-20, marginLeft:5}}>
             <Text style={{ fontSize:18, color:COLORS.primary, fontWeight:'bold'}}> Popular Orders</Text>
             </View>
             <FlatList 
             data={Data}
             horizontal
             showsHorizontalScrollIndicator={false}
             keyExtractor={(item)=>item.id}
             renderItem={renderItem}
             />
             </View> 
             </View>
        
    )
}

const style= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.tertiary
    },
    header:{
        flex:0.8,
        backgroundColor:COLORS.primary,
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
    },
    inputMain:{
        
            width:'70%',
            height:'70%',
            borderRadius:25,
            top:'50%',
            backgroundColor:COLORS.tertiary,
            alignSelf:'center'
        
    },
   
    inputContainer:{
        width:'95%',
        height:'28%',
        borderRadius:25,
        borderColor:COLORS.primary,
        borderWidth:2,
        top:'3%',
        backgroundColor:COLORS.tertiary,
        alignSelf:'center',
        flexDirection: 'row',
    },
    searchIcon: {
        margin: 5,
    },
    input:{
        height:'50%',
         borderWidth:0, 
         flex:1,
         color:COLORS.primary, 
         outline:'none', 
         marginTop:8,
         marginRight:'5%'
       
         },
         scrollView:{
          paddingVertical:25,
          paddingHorizontal:20,
          alignItems:'center',
          flexDirection:'row',
        
          
         },
         text:{
             fontSize:15,
              fontWeight:'bold',
               color:COLORS.primary,
                textAlign:'center'
        },
        list:{
            height:80,
            width:100,
            marginRight:7,
            borderRadius:20,
            borderColor:COLORS.primary,
            borderWidth:2,
            paddingHorizontal:5,
            
        },
    body:{
        flex:2
    },
    flatlist:{
        marginTop:10,
        height:'70%',
        width:135,
        backgroundColor:COLORS.primary,
        borderRadius:20,
        marginLeft:10,
        marginRight:5,
        shadowColor: COLORS.primary,
        shadowOffset: {
	    width: 0,
	    height: 4,
    },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
    },
    image:{
        height:110, 
        width:'100%', 
        alignSelf:'center', 
        marginTop:5, 
        shadowColor: COLORS.black,
        shadowOffset: {
        width: 0,
        height: 10,
    },
    shadowOpacity: 0.50,
    shadowRadius: 4.65,
    },
    itemDetails:{
        marginTop:5, 
        backgroundColor:COLORS.tertiary, 
        borderTopRightRadius:45,
        borderBottomLeftRadius:45,
        flex:1
    },
    price:{
        fontSize:20, 
        fontWeight:'bold',
         color:COLORS.primary,
          margin:5,
           textAlign:'center'
        },

})

export default Home;