
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteGroup } from '../redux/actions/flashaardActions';

const GroupList = () => {
  const groups = useSelector((state) => state.cards.groups);
  const dispatch = useDispatch();

  const handleDelete = (groupId) => {
    dispatch(deleteGroup(groupId));
  };

  return (
    <div>
      <h2>Group List</h2>
      <ul>
        {groups.map((group, index) => (
          <div className="border border-2 border-red-200" key={index}>
            <div className="border border-2 border-gray-500 m-4">
              <h2>{group.groupName}</h2>
              <p>{group.groupDescription}</p>
              <img src={"C:\photo.JPG"} alt="Group Image" />
            </div>
            <div className="border border-2 border-gray-500 m-4">
              {group.members.map((member, memberIndex) => (
                <div key={memberIndex}>
                  <h2>{member.name}</h2>
                  <p>{member.description}</p>
                  <img src={member.image} alt="Member Image" />
                </div>
              ))}
            </div>
            <button onClick={() => handleDelete(group.id)}>Delete</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default GroupList;
