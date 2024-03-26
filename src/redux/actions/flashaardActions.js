
// Action to add a new group
import { ADD_GROUP, DELETE_GROUP} from '../../constants/flashcardConstants';
export const addGroup = group => ({
  type: ADD_GROUP,
  payload: group,
});

// Action to delete a group by ID
export const deleteGroup = groupId => ({
  type: DELETE_GROUP,
  payload: groupId,
});

