// StepNode.js

import React from 'react';

const StepNode = ({ step }) => {
  return (
    <div>
      <h3>{step.name}</h3>
      <p>{step.description}</p>
      <ul>
        <li>Related Journeys</li>
        {/* Display related journeys as links or buttons */}
      </ul>
      <div>
        <button>Mark as Completed</button>
        <button>Edit Details</button>
      </div>
    </div>
  );
};

export default StepNode;