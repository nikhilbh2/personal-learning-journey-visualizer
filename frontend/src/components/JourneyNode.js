// JourneyNode.js

import React from 'react';

const JourneyNode = ({ journey }) => {
  return (
    <div>
      <h3>{journey.name}</h3>
      <p>{journey.description}</p>
      <ul>
        <li>Child Nodes (Steps)</li>
        {/* Display child nodes (steps) as links or buttons */}
      </ul>
      <div>
        <button>Edit Details</button>
        <button>Add Step</button>
      </div>
    </div>
  );
};

export default JourneyNode;