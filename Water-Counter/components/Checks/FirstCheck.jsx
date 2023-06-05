import React from "react";


const FirstCheck = (arrCheck) => {

    let userData = []
    switch(arrCheck) {
        case ((arrCheck[0] = 0) (arrCheck[1] = 0) (arrCheck[2] = 1)): {
            switch (arr[10] > 0 && arr[10] < 3) {
                case (arr[11] > 0 && arr[11] < 0.3): {
                    db.transaction((tx) => {
                        tx.executeSql(
                            'SELECT * FROM big_blue WHERE id = 1; SELECT * FROM big_blue WHERE id = 3',
                            (txObj, resultSet) => userData = resultSet.rows._array,
                            (txObj, error) => console.log(error)
                        );
                    });
                } 
                case (arr[11] >= 0.3 && arr[11] < 0.9): {
                    db.transaction((tx) => {
                        tx.executeSql(
                            'SELECT * FROM big_blue WHERE id = 1 OR id = 2;',
                            //(txObj, resultSet) => setUserData(resultSet.rows._array),
                            (txObj, error) => console.log(error)
                        );
                    });
                }
                case (arr[11] >= 0.9 && arr[11] < 8): {
                    //БД
                }
            }
            switch (arr[10] >= 3 && arr[10] < 8) {
                case (arr[11] > 0 && arr[11] < 0.3): {
                    //бд
                } 
                case (arr[11] >= 0.3 && arr[11] < 8): {
                    //БД
                }
            }
            switch (arr[10] >= 8 && arr[10] < 15) {
                case (arr[11] > 0 && arr[11] < 0.3): {
                    //бд
                }
                case (arr[11] >= 0.3 && arr[11] < 8): {
                    //БД
                }
                case (arr[11] >= 8): {
                    //БД
                }
            }
            switch (arr[10] >= 15) {
                case (arr[11] >= 8): {
                    //бд
                }
            }
        }
        case ((arrCheck[0] = 0) (arrCheck[1] = 1) (arrCheck[2] = 0)): {
            //бд
        }
        case ((arrCheck[0] = 0) (arrCheck[1] = 1) (arrCheck[2] = 1)): {
            switch (arr[10] > 0 && arr[10] < 3) {
                case (arr[11] > 0 && arr[11] < 0.3): {
                    //бд
                } 
                case (arr[11] >= 0.3 && arr[11] < 0.9): {
                    //БД
                }
                case (arr[11] >= 0.9 && arr[11] < 8): {
                    //БД
                }
            }
            switch (arr[10] >= 3 && arr[10] < 8) {
                case (arr[11] > 0 && arr[11] < 0.3): {
                    //бд
                } 
                case (arr[11] >= 0.3 && arr[11] < 8): {
                    //БД
                }
            }
            switch (arr[10] >= 8 && arr[10] < 15) {
                case (arr[11] > 0 && arr[11] < 0.3): {
                    //бд
                }
                case (arr[11] >= 0.3 && arr[11] < 8): {
                    //БД
                }
                case (arr[11] >= 8): {
                    //БД
                }
            }
            switch (arr[10] >= 15) {
                case (arr[11] >= 8): {
                    //бд
                }
            }
        }
        case ((arrCheck[0] = 1) (arrCheck[1] = 0) (arrCheck[2] = 0)): {
            //бд
        }
        case ((arrCheck[0] = 1) (arrCheck[1] = 0) (arrCheck[2] = 1)):
            ///
        case ((arrCheck[0] = 1) (arrCheck[1] = 1) (arrCheck[2] = 0)):
            ///
        case ((arrCheck[0] = 1) (arrCheck[1] = 1) (arrCheck[2] = 1)):
            ///
    }

    return userData
}

export default FirstCheck
