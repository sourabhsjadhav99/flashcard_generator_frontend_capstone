
import { ADD_GROUP, DELETE_GROUP, ADD_MEMBER, DELETE_MEMBER } from '../../constants/flashcardConstants';

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

    case ADD_MEMBER:
      const { groupId, member } = action.payload;
      const updatedGroupsAddMember = state.groups.map(group =>
        group.id === groupId ? { ...group, members: [...group.members, member] } : group
      );
      localStorage.setItem('groups', JSON.stringify(updatedGroupsAddMember));
      return {
        ...state,
        groups: updatedGroupsAddMember,
      };

    case DELETE_MEMBER:
      const { groupId: delGroupId, memberId } = action.payload;
      const updatedGroupsDelMember = state.groups.map(group =>
        group.id === delGroupId ? { ...group, members: group.members.filter(mem => mem.id !== memberId) } : group
      );
      localStorage.setItem('groups', JSON.stringify(updatedGroupsDelMember));
      return {
        ...state,
        groups: updatedGroupsDelMember,
      };

    default:
      return state;
  }
};

export default cardsReducer;
