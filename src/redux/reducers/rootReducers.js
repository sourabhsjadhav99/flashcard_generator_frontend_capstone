import { combineReducers } from 'redux';
import cardsReducer from './flashCardReducer'

const rootReducer = combineReducers({
  cards: cardsReducer,
});


export default rootReducer;