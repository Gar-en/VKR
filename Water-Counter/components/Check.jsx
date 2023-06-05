import React, { useState } from 'react';
import Main from './Main';
import * as SQLite from 'expo-sqlite';
import FirstCheck from './Checks/FirstCheck'
//import SQLite from 'react-native-sqlite-storage';



//const [userData, setUserData] = useState([]);
//let db = openDatabase({name:'water.db'});
const check = (arr) => {

    let userData = []
    // const db = SQLite.openDatabase(
    //     {
    //       name: 'water.db',
    //       location: '../'
    //     },
    //     () => {},
    //     error => {
    //       console.log(error);
    //     },
    //   );
      const db = SQLite.openDatabase('dbName', version);

      db.exec([{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], false, () =>
        console.log('Foreign keys turned on')
      );

    // let arrCheck = [0,0,0]
    // if(arr[1] > 0) arrCheck[0] = 1
    // if (arr[2] || arr[3] || arr[4] || arr[5] || (arr[6] + arr[7]) || arr[8] || arr[9] > 1) {
    //     arrCheck[1] = 1
    // }
    // if (arr[10] || arr[11] > 0) arrCheck[2] = 1
    
    // if (arrCheck[0] = arrCheck[1] = arrCheck[2] = 0) alert('Чистая вода')

    // switch(arr[0]) {
    //     case (arr[0] >= 1 && arr[0] <=3):
    //         userData = FirstCheck(arrCheck);
    //     case (arr[0] > 3 && arr[0] <=5):
    //         secondCheck;
    //     case (arr[0] > 5 && arr[0] <=8):
    //         thirdCheck;
    //     case (arr[0] > 8):
    //         fourthCheck;
    // }
    return (
        //userData
        db.transaction(tx => {
            tx.executeSql(
              'SELECT * FROM fillers',
              [],
              (_, { rows }) => console.log(rows._array),
              (txobj, error) => console.log(error)
            );
          })
    )

}

    // const firstCheck = (arrCheck) => {

    //     let userData = []
    //     switch(arrCheck) {
    //         case ((arrCheck[0] = 0) (arrCheck[1] = 0) (arrCheck[2] = 1)): {
    //             switch (arr[10] > 0 && arr[10] < 3) {
    //                 case (arr[11] > 0 && arr[11] < 0.3): {
    //                     db.transaction((tx) => {
    //                         tx.executeSql(
    //                             'SELECT * FROM big_blue WHERE id = 1',
    //                             (txObj, resultSet) => userData = resultSet.rows._array,
    //                             (txObj, error) => console.log(error)
    //                         );
    //                     });
    //                 } 
    //                 case (arr[11] >= 0.3 && arr[11] < 0.9): {
    //                     db.transaction((tx) => {
    //                         tx.executeSql(
    //                             'SELECT * FROM big_blue WHERE id = 1 OR id = 2;',
    //                             //(txObj, resultSet) => setUserData(resultSet.rows._array),
    //                             (txObj, error) => console.log(error)
    //                         );
    //                     });
    //                 }
    //                 case (arr[11] >= 0.9 && arr[11] < 8): {
    //                     //БД
    //                 }
    //             }
    //             switch (arr[10] >= 3 && arr[10] < 8) {
    //                 case (arr[11] > 0 && arr[11] < 0.3): {
    //                     //бд
    //                 } 
    //                 case (arr[11] >= 0.3 && arr[11] < 8): {
    //                     //БД
    //                 }
    //             }
    //             switch (arr[10] >= 8 && arr[10] < 15) {
    //                 case (arr[11] > 0 && arr[11] < 0.3): {
    //                     //бд
    //                 }
    //                 case (arr[11] >= 0.3 && arr[11] < 8): {
    //                     //БД
    //                 }
    //                 case (arr[11] >= 8): {
    //                     //БД
    //                 }
    //             }
    //             switch (arr[10] >= 15) {
    //                 case (arr[11] >= 8): {
    //                     //бд
    //                 }
    //             }
    //         }
    //         case ((arrCheck[0] = 0) (arrCheck[1] = 1) (arrCheck[2] = 0)): {
    //             //бд
    //         }
    //         case ((arrCheck[0] = 0) (arrCheck[1] = 1) (arrCheck[2] = 1)): {
    //             switch (arr[10] > 0 && arr[10] < 3) {
    //                 case (arr[11] > 0 && arr[11] < 0.3): {
    //                     //бд
    //                 } 
    //                 case (arr[11] >= 0.3 && arr[11] < 0.9): {
    //                     //БД
    //                 }
    //                 case (arr[11] >= 0.9 && arr[11] < 8): {
    //                     //БД
    //                 }
    //             }
    //             switch (arr[10] >= 3 && arr[10] < 8) {
    //                 case (arr[11] > 0 && arr[11] < 0.3): {
    //                     //бд
    //                 } 
    //                 case (arr[11] >= 0.3 && arr[11] < 8): {
    //                     //БД
    //                 }
    //             }
    //             switch (arr[10] >= 8 && arr[10] < 15) {
    //                 case (arr[11] > 0 && arr[11] < 0.3): {
    //                     //бд
    //                 }
    //                 case (arr[11] >= 0.3 && arr[11] < 8): {
    //                     //БД
    //                 }
    //                 case (arr[11] >= 8): {
    //                     //БД
    //                 }
    //             }
    //             switch (arr[10] >= 15) {
    //                 case (arr[11] >= 8): {
    //                     //бд
    //                 }
    //             }
    //         }
    //         case ((arrCheck[0] = 1) (arrCheck[1] = 0) (arrCheck[2] = 0)): {
    //             //бд
    //         }
    //         case ((arrCheck[0] = 1) (arrCheck[1] = 0) (arrCheck[2] = 1)):
    //             ///
    //         case ((arrCheck[0] = 1) (arrCheck[1] = 1) (arrCheck[2] = 0)):
    //             ///
    //         case ((arrCheck[0] = 1) (arrCheck[1] = 1) (arrCheck[2] = 1)):
    //             ///
    //     }

    //     return userData
    // }

    export default check;