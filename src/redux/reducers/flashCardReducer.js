
import { ADD_GROUP, DELETE_GROUP} from '../../constants/flashcardConstants';

const initialState = {
  groups: JSON.parse(localStorage.getItem('groups')) || [],
};

const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GROUP:
      const newGroupsAdd = [...state.groups, action.payload];
      localStorage.setItem('groups', JSON.stringify(newGroupsAdd));
      return {
        ...state,
        groups: newGroupsAdd,
      };

    case DELETE_GROUP:
      const newGroupsDel = state.groups.filter(group => group.id !== action.payload);
      localStorage.setItem('groups', JSON.stringify(newGroupsDel));
      return {
        ...state,
        groups: newGroupsDel,
      };

    default:
      return state;
  }
};

export default cardsReducer;
