//6
import { createSlice, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import watchSaga from "../saga/saga";

//7
const dataSlice = createSlice({

    name: "Kitty",
    initialState: {
        facted: "", //15
        dogFact: [],
    },

    reducers: {//8
        //16
        fetchData: (state, action) => {
            return {
                ...state,
                facted: action.payload,
            };
        },
        fetchDataDog: (state, action) => {
            // console.log(fetchDataDog)
            return {
                ...state,
                dogFact: action.payload,
            }
        }
    },
});
console.log(dataSlice)
export const { fetchData } = dataSlice.actions;//17\
export const { fetchDataDog } = dataSlice.actions
//9
const sagaMiddleware = createSagaMiddleware();


//10
const store = configureStore({
    reducer: {
        catFact: dataSlice.reducer,
        dogPhoto: dataSlice.reducer,
    },
    middleware: [sagaMiddleware],

});
// console.log(store)


//11 run middleware

sagaMiddleware.run(watchSaga)

export default store;