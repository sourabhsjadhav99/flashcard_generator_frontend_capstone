

import { ADD_GROUP, DELETE_GROUP,ADD_MEMBER,DELETE_MEMBER  } from '../../constants/flashcardConstants';
export const addGroup = group => ({
  type: ADD_GROUP,
  payload: group,
});

export const deleteGroup = groupId => ({
  type: DELETE_GROUP,
  payload: groupId,
});

export const addMember = (groupId, member) => ({
  type: ADD_MEMBER,
  payload: { groupId, member },
});

export const deleteMember = (groupId, memberId) => ({
  type: DELETE_MEMBER,
  payload: { groupId, memberId },
});