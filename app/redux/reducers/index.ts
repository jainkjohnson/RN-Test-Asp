import {combineReducers} from 'redux';
import {debitDetailsReducer} from './debitDetails';

export const rootReducer = combineReducers({
  debitDetailsStore: debitDetailsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
