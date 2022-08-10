import React from 'react';
import {View, Text,StyleSheet, TouchableOpacity, FlatList,Image} from 'react-native';
//import { color } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../constants/Theme';
import {SandData} from '../model/Data';
import {Option} from '../model/Data';
import StarRating from '../model/StarRating';

const Sandwish=({navigation})=>{
    const [selected, setSelected] = React.useState(0);
    const [Category, setCategory] = React.useState(SandData);

    const onSelect=(category)=>{
        let sandwishList = SandData.fill(a=>a.categories.includes(category.id))
         setCategory(sandwishList);
         setSelected(category)

    }

    const renderHeader=()=>{
        return(
            <View style={style.header} >
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Icon name='arrow-back' size={26} 
                style={{margin:10, width:30, height:30,color:COLORS.primary, 
                backgroundColor:COLORS.tertiary, borderRadius:10}}/>
            </TouchableOpacity>

            <View style={style.btnWrap}>
           {Option.map((cat)=>(

             <TouchableOpacity style={[style.btn,{backgroundColor:(selected?.id == cat.id)? COLORS.primary: COLORS.tertiary}]} 
                  onPress={()=>onSelect(cat)}>
                  <Text style={[style.txtOption,{color: (selected?.id==cat.id)? COLORS.tertiary: COLORS.primary}]}>{cat.name}</Text>
                </TouchableOpacity>
            ))}
            </View>
            
          </View>

        )
    }
    const renderItem=({item})=>{
        return(
            <TouchableOpacity onPress={()=>navigation.navigate('details',{item})}>
                <View style={style.wrapped}>
                  <View style={style.imgContainer}>
                      <Image 
                      resizeMode="cover"
                      source={item.photo}
                      style={style.image}
                      />
                    </View>
                    <View style={style.titleContainer}>
                    <Text style={style.name}>{item.name}</Text>
                    <StarRating  ratings={4} reviews={99} />
                    <Text style={style.name}>RM{item.price}</Text>
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
                  data={Category}
                  keyExtractor={Item =>Item.id}
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
        borderBottomRightRadius:60,
        borderBottomLeftRadius:60,

    },
    btnWrap:{
        
        width:'80%',
        height:60,
        borderRadius:20,
        borderBottomLeftRadius:60,
        borderTopRightRadius:55,
        top:'25%',
        backgroundColor:COLORS.tertiary,
        alignSelf:'center', 
        flexDirection:'row',  
        justifyContent:'space-between',  
        marginTop:5,
        paddingRight:7,
        paddingLeft:7  
       
        },

    txtOption:{
        fontSize:16, 
        fontWeight:'bold',
        textAlign:'center', 
      
        },
        btn:{
            marginTop:'5%',
            width:'32%',
            height:'50%',
            borderBottomLeftRadius:60,
            borderTopRightRadius:55,
            borderColor:COLORS.primary,
            borderWidth:2,
            justifyContent:'center',
            marginVertical:5,
            flexDirection:'row',
            paddingHorizontal:10
        },
    body:{
        flex:3,
        

    },
    wrapped:{
        height:100,
        flexDirection:'row',
        marginRight:5,
        borderRadius:20,
        marginTop:'2%',
        marginLeft:'3%',
        marginVertical:3,
        borderWidth:1,
        borderRadius:20,
        borderColor:COLORS.primary,
      
         
         
     },
     imgContainer:{
         flex:1.3
     },
     image:{
         height:'100%',
         width:'100%',
         alignItems:'center',
         borderColor:COLORS.primary,
         borderWidth:2,
         borderRadius:20,
         
     },

     titleContainer:{
         flex:2,
         borderRadius:20,
         padding: 10,
         borderRadius:10,
      //   marginLeft:20
      
     },
     name:{
        fontWeight: 'bold',
        fontSize:20,
        color:COLORS.primary
     },
  
    
})

export default Sandwish;