import { actions } from "../saga-action/actions"//3
import { takeEvery, call, put } from "redux-saga/effects"//4
import axios from "axios";
import { fetchData, fetchDataDog } from "../store/store";//18

const callCatFactApi = async (url) => {
    return await axios({
        url: "https://catfact.ninja/fact",
    });
}; //13

const dogPhotoApi = async (url) => {
    // console.log(dogPhotoApi)
    return await axios({
        url: "https://dog.ceo/api/breeds/image/random",
    });
   
};


export function* apiSaga() {
    // console.log(1234);
    const result = yield call(callCatFactApi)
    yield put(fetchData(result.data.fact))
        // console.log(result, 111)
}

export function* apiDogSaga() {
    const resultDogPhoto = yield call(dogPhotoApi)
    yield put(fetchDataDog(resultDogPhoto.data.message))
    // console.log(resultDogPhoto, 111)
}


function* watchSaga() {
    // console.log(12312)
    yield takeEvery(actions.GET_FACT, apiSaga)//5
    yield takeEvery(actions.GET_D0G_PHOTO,apiDogSaga)
}
export default watchSaga

//1\\