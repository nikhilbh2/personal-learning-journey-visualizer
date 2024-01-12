// UserNode.js

import React from 'react';

const UserNode = ({ user }) => {
  return (
    <div>
      <h2>{user.name}</h2>
      <img src={user.picture} alt={user.name} />
      <ul>
        <li>Connected Subjects</li>
        {/* Display connected subjects as links or buttons */}
      </ul>
      <div>
        <button>Edit Profile</button>
        <button>Settings</button>
      </div>
    </div>
  );
};

export default UserNode;