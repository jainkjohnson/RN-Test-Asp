import {AppThunk} from '../../../App';
import * as api from '../../api';
import {DebitDetails} from '../reducers/debitDetails';

export type Action = {type: 'GET_DEBIT_DETAILS'; payload: DebitDetails};
export type ActionForWeeklyLimit = {
  type: 'UPDATE_WEEKLY_LIMIT';
  payload: DebitDetails;
};

// Action creators
export const getDebitDetails = (): AppThunk => async dispatch => {
  try {
    const {data} = await api.fetchData();
    const action = {type: 'GET_DEBIT_DETAILS', payload: data};

    dispatch(action);
  } catch (error) {
    console.log('error', error);
  }
};

export const updateWeeklyLimit =
  (amount: number): AppThunk =>
  dispatch => {
    try {
      const action = {type: 'UPDATE_WEEKLY_LIMIT', payload: amount};
      dispatch(action);
    } catch (error) {
      console.log('error', error);
    }
  };
