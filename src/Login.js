import React,{useContext} from "react";
import {View,Text,StyleSheet, TouchableHighlight,TextInput,Image} from 'react-native'

const Login=({navigation})=>{
    return(
            <View style={styles.mainview}>
    <Image style={{width: '10%', height: '20%',borderRadius:50,marginBottom:"5%",borderWidth:4,
    borderColor:"yellow"}}
          source={{uri:'https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg'}}
      />
            <TextInput placeholder="username" style={styles.username}/>
            <TextInput placeholder="password" style={styles.password}/>
            <TouchableHighlight style={styles.btn} onPress={()=>navigation.navigate('dash')}>
            <Text style={styles.btntxt}>Login</Text>
            </TouchableHighlight>

            </View>
    )
}

const styles=StyleSheet.create({
    mainview:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    btn:{
        height:"5%",
        width:"50%",
        backgroundColor:"black",
        alignItems:"center",
        justifyContent:"center"
    },
    btntxt:{
        color:"white",
        fontWeight:"bold"
    },
    username:{
        height:"7%",
        width:"75%",
        borderWidth:1,
        borderColor:"black",
        marginBottom:"5%",
        padding:10

    },
    password:{
        height:"7%",
        width:"75%",
        borderWidth:1,
        borderColor:"black",
        marginBottom:"5%",
        padding:10
    }
})

export default Login