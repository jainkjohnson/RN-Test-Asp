import {AnyAction} from 'redux';

export interface DebitDetails {
  amountSpendAmount: number;
  availableBalance: number;
  cardNumber: string;
  cvv: number;
  expireMonth: number;
  expireYear: number;
  name: string;
  weeklyLimit: number;
}

interface DebitDetailsState {
  debitDetails: DebitDetails;
}

const initialState = {
  debitDetails: {
    amountSpendAmount: 0,
    availableBalance: 0,
    cardNumber: '',
    cvv: 0,
    expireMonth: 0,
    expireYear: 0,
    name: '',
    weeklyLimit: 0,
  },
};

export const debitDetailsReducer = (
  state: DebitDetailsState = initialState,
  action: AnyAction,
) => {
  switch (action.type) {
    case 'GET_DEBIT_DETAILS':
      return {
        ...state,
        debitDetails: action.payload,
      };

    case 'UPDATE_WEEKLY_LIMIT':
      return {
        ...state,
        debitDetails: {
          ...state.debitDetails,
          weeklyLimit: action.payload,
        },
      };
    default:
      return state;
  }
};
