import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Button, Alert} from 'react-native';
import Main from './Main';

export default function ButtonCalc() {

    const onPress = () => {
        if ( Main > 0 && Main <= 3) {
            console.log('Its alive')
        }
    }
    return (
        <Button style={styles.butstyle}
            title='Рассчитать'
            onPress={onPress}
        />
    )
}

const styles = StyleSheet.create({
    butstyle: {
        height: 100,
        width: 100,
        borderWidth: 0.5,
        color: '000080',
        borderRadius: 7,
        textAlign: 'center',
        margin: 15,
    }
})