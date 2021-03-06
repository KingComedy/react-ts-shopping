import { all } from "@redux-saga/core/effects";
import authSaga from "./auth.sage";
import categorySage from "./category.sage";
import productSage from "./product.sage";

export default function* rootSaga() {
  yield all([authSaga(), categorySage(), productSage()])
}