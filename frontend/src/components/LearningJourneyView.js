// LearningJourneyView.js

import React from 'react';

const LearningJourneyView = () => {
  const nodes = [
    { id: 1, topic: 'Topic A' },
    { id: 2, topic: 'Topic B' },
    { id: 3, topic: 'Topic C' },
    // Add more nodes as needed
  ];

  return (
    <div>
      <h1>My Learning Journey</h1>
      <ul>
        {nodes.map((node) => (
          <li key={node.id}>Node {node.id}: {node.topic}</li>
        ))}
      </ul>
    </div>
  );
};

export default LearningJourneyView;