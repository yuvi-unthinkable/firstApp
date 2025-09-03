import React from "react";

import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  
  
} from 'react-native'

import { SafeAreaProvider } from "react-native-safe-area-context";

import PizzaTranslator from './src/PizzaTranslator'

function App(){
  return (
    <ScrollView>

  
  {/* <SafeAreaProvider> */}
    {/* <View style = {{
      flex:1,
      justifyContent : 'center',
      alignItems : 'center'

    }}> */}
      <Text style={{color:'#fff'}}>Image is present below ! </Text>
      <Image source = {{
        uri :"https://images.pexels.com/photos/33622474/pexels-photo-33622474.jpeg"}} 
        style = {{width : 200, height : 200 }}
      ></Image>
      <Text style={{color:'#fff'}}>Image is present below ! </Text>
      <Image source = {{
        uri :"https://images.pexels.com/photos/33622474/pexels-photo-33622474.jpeg"}} 
        style = {{width : 200, height : 200 }}
      ></Image>
      <Text style={{color:'#fff'}}>Image is present below ! </Text>
      <Image source = {{
        uri :"https://images.pexels.com/photos/33622474/pexels-photo-33622474.jpeg"}} 
        style = {{width : 200, height : 200 }}
      ></Image>
      <Text style={{color:'#fff'}}>Image is present below ! </Text>
      <Image source = {{
        uri :"https://images.pexels.com/photos/33622474/pexels-photo-33622474.jpeg"}} 
        style = {{width : 200, height : 200 }}
      ></Image>
      <Text style={{color:'#fff'}}>Image is present below ! </Text>
      <Image source = {{
        uri :"https://images.pexels.com/photos/33622474/pexels-photo-33622474.jpeg"}} 
        style = {{width : 200, height : 200 }}
      ></Image>
      <Text style={{color:'#fff'}}>Image is present below ! </Text>
      <Image source = {{
        uri :"https://images.pexels.com/photos/33622474/pexels-photo-33622474.jpeg"}} 
        style = {{width : 200, height : 200 }}
      ></Image>
      <Text style={{color:'#fff'}}>Image is present below ! </Text>
      <Image source = {{
        uri :"https://images.pexels.com/photos/33622474/pexels-photo-33622474.jpeg"}} 
        style = {{width : 200, height : 200 }}
      ></Image>
      <Text style={{color:'#fff'}}>Image is present below ! </Text>
      <Image source = {{
        uri :"https://images.pexels.com/photos/33622474/pexels-photo-33622474.jpeg"}} 
        style = {{width : 200, height : 200 }}
      ></Image>
      <Text style={{color:'#fff'}}>Image is present below ! </Text>
      <Image source = {{
        uri :"https://images.pexels.com/photos/33622474/pexels-photo-33622474.jpeg"}} 
        style = {{width : 200, height : 200 }}
      ></Image>
      <TextInput style={{height : 40, borderColor : 'gray', borderWidth : 2,  color : "#fff"}} 
      defaultValue="You can type here"/>
    {/* </View> */}
    <PizzaTranslator/>

  {/* </SafeAreaProvider> */}
    </ScrollView>
  )

}

export default App;