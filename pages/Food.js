import React from 'react';
import {View,
    StyleSheet, 
    TouchableOpacity, 
    Image, 
    ScrollView, 
    Text, FlatList} from 'react-native';
import {COLORS} from '../constants/Theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Food} from '../model/Data';
import {Category} from '../model/Data';
import StarRating from '../model/StarRating';


const FoodScreen=({navigation})=>{
    const [selectedCategory, setSelectedCategory] = React.useState(0)
    const [restaurants, setRestaurants] = React.useState(Food)
    
    const onSelect=(category)=>{
        let restaurantList = Food.filter(a => a.categories.includes(category.id))
           setRestaurants(restaurantList);
           setSelectedCategory(category)
         
      }
  
             {/* Header Section*/}

    const renderHeader=()=>{
        return(
            <View style={style.header}>
              <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Icon name='arrow-back' size={26} 
                style={{margin:10, width:30, height:30,color:COLORS.primary, 
                backgroundColor:COLORS.tertiary, borderRadius:10}}/>
            </TouchableOpacity>
           <View style={style.btnWrap}>
            {Category.map((cat,index)=>(
              
                <TouchableOpacity style={[style.btn,{backgroundColor:(selectedCategory?.id ==cat.id)? COLORS.primary : COLORS.tertiary,}]} 
                  onPress={()=>onSelect(cat)}>
                  <Text style={[style.txtOption,{color:(selectedCategory?.id==cat.id)? COLORS.tertiary : COLORS.primary}]}>{cat.name}</Text>
                </TouchableOpacity>
                
             
           ))}
           </View>

           <View style={{justifyContent:'center', alignItems:'center',}}>
                <Image 
                source={require('../assets/images/banner4.png')}
                resizeMode="cover"
                style={style.img}
                />
            </View>
              
            </View>
        )
    }

                {/* Body Section */}

    const renderItem=({item})=>{
        return(
          
            <TouchableOpacity onPress={()=>navigation.navigate('details',{item})} style={{backgroundColor:COLORS.tertiary,}}>
            <View style={style.card}>
            <View style={style.cardImgWrapper}>
              <Image
                source={item.photo}
                resizeMode="cover"
                style={style.cardImg}
              />
            </View>
            <View style={style.cardInfo}>
                <View style={{flexDirection:'row',justifyContent:"space-between"}}>
                <Text style={style.cardTitle}>{item.name}</Text>
                <Text style={style.cardTitle}>RM{item.price}</Text>

                </View>
              <StarRating  ratings={4} reviews={99} />
              <Text style={style.cardDetails}>
               {item.description}
              </Text>
            </View>
          </View>
  </TouchableOpacity>
  
        )
    }
    return(
        <View style={style.container}>
            {renderHeader()}

          <View style={style.body}>
            <FlatList
            showsVerticalScrollIndicator={false}
            data={restaurants}
            keyExtractor={item=>item.id}
            renderItem={renderItem}
            />
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
        flex:1,
        backgroundColor:COLORS.primary,
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
    },
    btnWrap:{
        
        width:'75%',
        height:'70%',
        borderRadius:25,
        top:'50%',
        backgroundColor:COLORS.tertiary,
        alignSelf:'center', 
        flexDirection:'row',  
        justifyContent:'space-between',  
        marginTop:5,
        paddingRight:7,
        paddingLeft:7  
       
        },

    txtOption:{
        fontSize:18, 
        fontWeight:'bold',
        textAlign:'center', 
      
        },
   
    btn:{
        width:'32%',
        height:'25%',
        borderRadius:25,
        borderColor:COLORS.primary,
        borderWidth:2,
        justifyContent:'center',
        marginVertical:5,
        flexDirection:'row',
        paddingHorizontal:10
    },
    img:{
        width:'90%',
        height:190,
        position:"absolute", 
        bottom:40,
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 5,
    },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

    },
    body:{
        flex:2,
       marginTop:'10%'
    },
    card: {
        height: 100,
        marginLeft:5,
        marginRight:5,
        marginVertical: 5,
        flexDirection: 'row',
       
      },
      cardImgWrapper: {
        flex: 1,
        backgroundColor:COLORS.tertiary,
        borderColor:COLORS.primary,
        borderWidth:2,
        borderTopLeftRadius:52,
        borderEndColor:COLORS.tertiary
     
 
      },
      cardImg: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
      //  borderRadius: 20,
        borderColor:COLORS.primary,
        borderWidth:2,
        borderTopLeftRadius:51,
        borderBottomRightRadius:51, 
      },
      cardInfo: {
        flex: 2,
        padding: 10,
        backgroundColor:COLORS.tertiary,
        borderEndWidth:30,
        borderTopWidth:2,
        borderTopColor:COLORS.primary,
        borderBottomWidth:2,
        borderBottomColor:COLORS.primary,
        borderEndColor:COLORS.primary,
        borderEndWidth:2,
        borderRadius:20,
        borderTopStartRadius:0,
        borderBottomStartRadius:0
        
      },
      cardTitle: {
        fontWeight: 'bold',
        fontSize:20,
        color:COLORS.primary
      },
      cardDetails: {
        fontSize: 14,
        color: COLORS.primary,
      },

})

export default FoodScreen;