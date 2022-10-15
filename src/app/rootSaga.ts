


import { PayloadAction } from "@reduxjs/toolkit"
import {takeEvery,delay,put,takeLatest} from "@redux-saga/core/effects"
import { incrementSaga ,incrementSagaSuccess} from "../features/counter/counterSlice"


function* handleIncrementSaga(action:PayloadAction<number>){
    console.log("saga start");
    yield delay(2000);
    console.log("increat value");
    yield put(incrementSagaSuccess(action.payload))

}
export default function* rootSaga() {
    yield takeLatest(incrementSaga.toString(), handleIncrementSaga)
}