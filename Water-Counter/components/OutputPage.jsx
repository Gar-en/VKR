import React, { useState } from 'react';
import { StyleSheet, View, Button} from 'react-native';

export default function Output({ route, navigation }) {
    const [aeration, setAeration] = useState([])
    const [big_blue, setBigBlue] = useState([])
    const [containers, setContainers] = useState([])
    const [contriol_blocks, setControlBlocks] = useState([])
    const [fillers, setFillers] = useState([])

    const {massive} = route.params;

    async function getData(massive) {
        try {
          const response = await (fetch("http://localhost:8080/result?smell=" + massive[1] + "&turbidity=" + massive[2] + "&pH=" + massive[3] + "&oxidizability=" + massive[4] + "&nitrates=" + massive[5] + "&sulfates=" + massive[6] + "&chlorides=" + massive[7] + "&nitrites=" + massive[8] + "&chromaticity=" + massive[9] + "&hardness=" + massive[10] + "&iron=" + massive[11] + "&numb_of_people=" + massive[0]));
          const data = await response.json();
          return data
        } catch (error) {
          console.log(error.message);
        }
      }
    const onPress = () => {
        navigation.navigate('Main')
    }
    const styles = StyleSheet.create({
        main: {
          width: '60%',
          alignItems: 'center',
          justifyContent: 'flex-start',
          marginLeft: '20%',
        }
    });
    let a = []
    getData(massive).then(function(result){
        a = (Object.entries(result)) //3 массива объектов
        setAeration(a[0][1])
        setBigBlue(a[1][1])
        setContainers(a[2][1])
        setControlBlocks(a[3][1])
        setFillers(a[4][1])
    })
    return (
       <View style={StyleSheet.main}>
            <div>Аерация:{aeration.map((value, i) => {
                    return (
                        <div key = {value.id}>
                            Название: {value.name};
                            Цена: {value.price}
                        </div>
                    )
            })}</div>
            <div>Big Blue:{big_blue.map((value, i) => {
                    return (
                        <div key = {value.id}>
                            Название: {value.name};
                            Цена: {value.price}
                        </div>
                    )
            })}</div>
            <div>Контейнеры:{containers.map((value, i) => {
                    return (
                        <div key = {value.id}>
                            Название: {value.name};
                            Цена: {value.price};
                            Объём: {value.capacity}
                        </div>
                    )
            })}</div>
            <div>Контрольный блок:{contriol_blocks.map((value, i) => {
                    return (
                        <div key = {value.id}>
                            Название: {value.name};
                            Цена: {value.price}
                        </div>
                    )
            })}</div>
            <div>Наполнители:{fillers.map((value, i) => {
                    return (
                        <div key = {value.id}>
                            Название: {value.name};
                            Цена: {value.price};
                            Объём: {value.capacity}
                        </div>
                    )
            })}</div>
            <Button title='Назад' onPress={onPress}
            />
       </View> 
    );
}

