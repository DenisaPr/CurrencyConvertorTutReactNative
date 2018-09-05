import {
  takeEvery, select, call, put,
} from 'redux-saga/effects';

import {
  SWAP_CURRENCY,
  CHANGE_BASE_CURRENCY,
  GET_INITIAL_COVERSION,
  CONVERSION_ERROR,
  CONVERSION_RESULT,
} from '../actions/currencies';

const API_KEY = 'b308947b95c23ae90324012e6a98dd37';
const getLatestRate = currency => fetch(
  `http://data.fixer.io/api/latest?access_key=${API_KEY}&base=${currency}`,
);

function* fetchLatestConversionRates(action) {
  try {
    let currency = action.currency;
    if (currency === undefined) {
      currency = yield select(state => state.currencies.baseCurrency);
    }

    const response = yield call(getLatestRate, currency);
    const result = yield response.json();

    if (result.erro) {
      yield put({ type: CONVERSION_ERROR, error: result.error });
    } else {
      yield put({ type: CONVERSION_RESULT, result });
    }
  } catch (e) {
    yield put({ type: CONVERSION_ERROR, error: e.message });
  }

  //   getLatestRate('EUR')
  //     .then(resp => resp.json())
  //     .then(resp => console.log(resp))
  //     .catch(error => console.log(error));
  //   yield;
}

export default function* rootSaga() {
  yield takeEvery(GET_INITIAL_COVERSION, fetchLatestConversionRates);
  yield takeEvery(SWAP_CURRENCY, fetchLatestConversionRates);
  yield takeEvery(CHANGE_BASE_CURRENCY, fetchLatestConversionRates);
}
