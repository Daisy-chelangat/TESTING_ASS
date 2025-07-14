const BugItem = ({ bug, onUpdate, onDelete }) => {
    return (
      <div className="border p-4 flex justify-between items-center">
        <div>
          <h3 className="font-bold">{bug.title}</h3>
          <p>{bug.description}</p>
          <p className="text-sm text-gray-500">Status: {bug.status}</p>
        </div>
        <div className="space-x-2">
          <select
            value={bug.status}
            onChange={(e) => onUpdate(bug._id, { status: e.target.value })}
            className="border p-1"
          >
            <option value="open">Open</option>
            <option value="in-progress">In Progress</option>
            <option value="resolved">Resolved</option>
          </select>
          <button onClick={() => onDelete(bug._id)} className="text-red-600">
            Delete
          </button>
        </div>
      </div>
    );
  };
  
  export default BugItem;
  