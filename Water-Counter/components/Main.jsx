import { React, useEffect } from 'react';
import { StyleSheet, View, Button } from 'react-native';

let chislo = []

export default function Main({ navigation }) {

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
        navigation.navigate('OutputPage', {
          massive: arr
        })
    }

    const clearAll = () => {
        useEffect = () => {
          for(let i = 0; i < chislo.length; i++){
            if (chislo != '') {
              chislo[i] = ''
            }
          }

        }
    }

    const styles = StyleSheet.create({
        main: {
          width: '60%',
          alignItems: 'flex-start',
          justifyContent: 'center',
          marginLeft: '20%',
        },
        container: {
            height: 70,
            width: '60%',
            alignItems: 'flex-start',
            justifyContent: 'center',
            marginTop: 5,
            marginLeft: '20%',
        
          },
          text: {
            fontSize: 16,
            fontWeight: 'bold',
            justifyContent: 'center'
          },

          input: {
            height: 20,
            width: '100%',
            justifyContent: 'center'
          },

          butstyle: {
            height: 100,
            width: 75,
            borderWidth: 0.5,
            color: '000080',
            borderRadius: 7,
            textAlign: 'center',
            margin: 15,
            marginTop: 15
        },
      });

    return (
        <div style={styles.main} onChange={(e) => handleChange(e)} >
          <div style={styles.container}>
            <label style={styles.text}>Количество человек, проживающих в доме</label>
            <input name = "Количество человек, проживающих в доме" id='0' style={styles.input}/>
          </div>
          <div style={styles.container}>
            <label style={styles.text}>Запах</label>
            <input name = "Запах" id='1' style={styles.input}/>
          </div> 
          <div style={styles.container}>
            <label style={styles.text}>Мутность</label>
            <input name = "Мутность" id='2' style={styles.input}/>
          </div>
          <div style={styles.container}>
            <label style={styles.text}>Кислотность(pH)</label>
            <input name = "Кислотность(pH)" id='3' style={styles.input}/>
          </div>
          <div style={styles.container}>
            <label style={styles.text}>Окисляемость</label>
            <input name = "Окисляемость" id='4' style={styles.input}/>
          </div>
          <div style={styles.container}>
            <label style={styles.text}>Нитраты</label>
            <input name = "Нитраты" id='5' style={styles.input}/>
          </div>
          <div style={styles.container}>
            <label style={styles.text}>Сульфаты</label>
            <input name = "Сульфаты" id='6' style={styles.input}/> 
          </div>
          <div style={styles.container}>
            <label style={styles.text}>Хлориды</label>
            <input name = "Хлориды" id='7' style={styles.input}/>
          </div>
          <div style={styles.container}>
            <label style={styles.text}>Нитриты</label>
            <input name = "Нитриты" id='8' style={styles.input}/>
          </div>
          <div style={styles.container}>
            <label style={styles.text}>Цветность</label>
            <input name = "Цветность" id='9' style={styles.input}/>
          </div>
          <div style={styles.container}>
            <label style={styles.text}>Жёсткость</label>
            <input name = "Жёсткость" id='10' style={styles.input}/>
          </div>
          <div style={styles.container}>
            <label style={styles.text}>Железо</label>
            <input name = "Железо" id='11' style={styles.input}/>
          </div>
            <Button style={styles.butstyle} 
                title='Рассчитать'
                onPress={onPress} 
            />
            <Button style={styles.butstyle} 
                title='Отчистить'
                onPress={clearAll} 
            />
        </div>
    );
}