// components/Task.tsx
interface TaskProps {
    text: string;
    onRemove: () => void;
  }
  
  const Task: React.FC<TaskProps> = ({ text, onRemove }) => {
    return (
      <div className="flex items-center justify-between bg-white p-4 my-2 rounded-md shadow-md">
        <span>{text}</span>
        <button onClick={onRemove} className="text-red-500 hover:text-red-700">
          Remove
        </button>
      </div>
    );
  };
  
  export default Task;
  