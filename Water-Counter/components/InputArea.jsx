import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, SafeAreaView, View } from 'react-native';

export const InputArea = props => {



    return (
    <View style={styles.container}>{props.id}
        <Text style={styles.text}>{props.name}</Text>
        <TextInput
            style={styles.input} placeholder='0'/>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      height: 70,
      width: 350,
      alignItems: 'flex-start',
      justifyContent: 'center',
      marginTop: 30,
  
    },
    input: {
      height: 40,
      width: 350,
      borderWidth: 1,
    },
    text: {
      fontSize: 16,
      fontWeight: 'bold',
    },
})

export default InputArea