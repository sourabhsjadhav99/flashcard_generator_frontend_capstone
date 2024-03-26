

import { ADD_GROUP, DELETE_GROUP} from '../../constants/flashcardConstants';
export const addGroup = group => ({
  type: ADD_GROUP,
  payload: group,
});

export const deleteGroup = groupId => ({
  type: DELETE_GROUP,
  payload: groupId,
});

