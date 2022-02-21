import { View, Text,StyleSheet,FlatList,TouchableHighlight } from 'react-native'
import React,{useContext} from 'react'
import { loginContext } from '../context/login/loginContext'

const Dashboard = () => {
    const {state}=useContext(loginContext)
    console.log({state})
  return (
    <View style={styles.mainview}>
      <Text style={styles.text}>Dashboard</Text>
      <TouchableHighlight style={styles.btn}>
            <Text style={styles.btntxt}>Add</Text>
            </TouchableHighlight>
      <FlatList data={state} keyExtractor={(item)=>item.title} renderItem={({item})=>
      {
              return(
                  <Text style={{fontSize:50}}>{item.title}</Text>
              )
          }
      }/>
      
    </View>
  )
}
const styles=StyleSheet.create({
    mainview:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    text:{
        fontWeight:"bold",
        fontSize:50,
    },
    btntxt:{
        color:"white",
        fontWeight:"bold"
    },
    btn:{
        height:"5%",
        width:"50%",
        backgroundColor:"black",
        alignItems:"center",
        justifyContent:"center"
    }
})

export default Dashboard