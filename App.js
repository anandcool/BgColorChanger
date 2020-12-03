import React,{useState} from 'react'
import {Text, View,StyleSheet, TouchableOpacity, StatusBar} from 'react-native'



const App = () =>{
  const [randomColor,setRandomColor] = useState('rgb(32,0,126)')

  const changeBG = () =>{
      let color = `rgb(
        ${Math.floor(Math.random() * 256)},
        ${Math.floor(Math.random() * 256)},
        ${Math.floor(Math.random() * 256)}

      )`
      setRandomColor(color)
  }
  const reset = () =>{
    let color = '	rgb(0,0,0)'
    setRandomColor(color)
  }

  return(
    <>
    <StatusBar backgroundColor={randomColor}/>
    <View style={[styles.container,{backgroundColor:randomColor}]}>
      <TouchableOpacity  onPress={changeBG}> 
    <Text style={styles.text}>Tap Me</Text>
    </TouchableOpacity>
    <View style={{marginTop:'20%'}}>
    <TouchableOpacity onPress={reset}>
    <Text style={[styles.text,{backgroundColor:'blue'}]}>Reset</Text>
    </TouchableOpacity>
   </View>
 
    </View>
    </>
  );
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    color:'#fff',
    fontSize:30,
    backgroundColor:"#BB2CD9",
    paddingVertical:10,
    paddingHorizontal:60,
    borderRadius:50,
    textTransform:'uppercase'
  }
})