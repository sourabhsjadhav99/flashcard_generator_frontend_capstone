
import { ADD_GROUP, DELETE_GROUP} from '../../constants/flashcardConstants';

// Define initial state for the reducer
const initialState = {
  groups: JSON.parse(localStorage.getItem('groups')) || [],
};


// Define the cardsReducer function to handle state updates
const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Add a new group to the groups array
    case ADD_GROUP:
      const newGroupsAdd = [...state.groups, action.payload];
      localStorage.setItem('groups', JSON.stringify(newGroupsAdd)); // Update local storage with the new groups array
      return {
        ...state,
        groups: newGroupsAdd,
      };

    case DELETE_GROUP:
      // Delete a group by ID from the groups array
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
