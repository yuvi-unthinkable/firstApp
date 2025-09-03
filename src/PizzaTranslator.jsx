import React, { useState } from 'react';
import { TextInput, View, Text } from 'react-native'

function PizzaTranslator() {
    const [text, setText] = useState('');

  return (
    <>
    <View style = {{padding : 10, flex:1, justifyContent:"center", alignContent:"center"}} >
        <TextInput 
        style = {{height : 40, width : 40}}
        placeholder = "Type here to start"
        onChangeText = {newText => setText(newText)}
        defaultValue = {text}
        />
        <Text
        style = {{ height: 40, fontSize:40 }}>
        {text.split(' ')
        .map(word => word && '🍕')
        .join( ' ')

        }
        

        </Text>

    </View>

    </>
  );
}

export default PizzaTranslator;
