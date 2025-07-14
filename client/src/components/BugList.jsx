import React from 'react';
const BugList = ({ bugs }) => {
  if (!bugs || bugs.length === 0) {
    return <p>No bugs found.</p>;
  }

  return (
    <ul className="space-y-2">
      {bugs.map((bug) => (
        <li key={bug._id} className="p-4 border rounded shadow">
          <h2 className="font-bold">{bug.title}</h2>
          <p>{bug.description}</p>
          <span className="text-sm text-gray-500">Status: {bug.status}</span>
        </li>
      ))}
    </ul>
  );
};

export default BugList;
