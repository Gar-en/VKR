import { StatusBar } from 'expo-status-bar';
import { React, useState, useEffect } from 'react';
import { StyleSheet, View, Button, Alert, TextInput } from 'react-native';
import { InputArea } from './InputArea';
import  ButtonCalc  from './ButtonCalc';
import * as SQLite from 'expo-sqlite'
import check from './Check';




export default function Main({ navigation }) {
    //const db = SQLite.openDatabase('water.db');
    let chislo = []
    //const [results, setResults] = useState([])
    
    // const send = (arr) => {
    //     fetch("http://localhost:8080/result?smell=" + arr[0] + "&turbidity=" + arr[1])
    //     .then((res) => res.json())
    //     .then((data) => setStations(data))
    //     .catch((err) => console.log(err.message));
    // };


    const handleChange = (e) => {
        if (chislo.includes(e.target.id) === false) {
            chislo.push(e.target.id)
        }
    }

    const onPress = () => {
        let numbers = chislo.map(Number)
        let arr = []
        if (numbers.length < 1) {
            alert('Заполните все поля')
        }
        numbers.map(el => {
            arr.push(Number(document.getElementById(el).value))
        })
        
        // fetch("http://localhost:8080/result?smell=" + arr[0] + "&turbidity=" + arr[1])
        // .then((res) => res.json())
        // .then((data) => setResults(data))
        // .catch((err) => console.log(err.message))
        //.finally(() => console.log(results));
        //return (arr)
        // send(arr)
        //getData(arr)
        // let a = []
        // a = getData(arr)
        navigation.navigate('OutputPage', {
          massive: arr
        })
        // console.log(a)
        


    }

    const styles = StyleSheet.create({
        main: {
          width: '60%',
          alignItems: 'center',
          justifyContent: 'flex-start',
          marginLeft: '20%',
        },
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
          butstyle: {
            height: 100,
            width: 100,
            borderWidth: 0.5,
            color: '000080',
            borderRadius: 7,
            textAlign: 'center',
            margin: 15,
        },
      });

    return (
        <div style={styles.main} onChange={(e) => handleChange(e)} >
            <label>Количество человек, проживающих в доме</label>
            <input name = "Количество человек, проживающих в доме" id='0' style={styles.main}/>
            <label>Запах</label>
            <input name = "Запах" id='1' style={styles.main}/>
            <label>Мутность</label>
            <input name = "Мутность" id='2' style={styles.main}/>
            <label>Кислотность(pH)</label>
            <input name = "Кислотность(pH)" id='3' style={styles.main}/>
            <label>Окисляемость</label>
            <input name = "Окисляемость" id='4' style={styles.main}/>
            <label>Нитраты</label>
            <input name = "Нитраты" id='5' style={styles.main}/>
            <label>Сульфаты</label>
            <input name = "Сульфаты" id='6' style={styles.main}/> 
            <label>Хлориды</label>
            <input name = "Хлориды" id='7' style={styles.main}/>
            <label>Нитриты</label>
            <input name = "Нитриты" id='8' style={styles.main}/>
            <label>Цветность</label>
            <input name = "Цветность" id='9' style={styles.main}/>
            <label>Жёсткость</label>
            <input name = "Жёсткость" id='10' style={styles.main}/>
            <label>Железо</label>
            <input name = "Железо" id='11' style={styles.main}/>

            <Button style={styles.butstyle} 
                title='Рассчитать'
                onPress={onPress} //(e) => onPress(e)
            />
        </div>
    );
}