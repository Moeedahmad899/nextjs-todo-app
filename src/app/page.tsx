"use client"
import { useState } from 'react';
import Task from '@/components/Task';

const Home: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState<string>('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const removeTask = (index: number) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">To-Do App</h1>

      <div className="flex mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="p-2 border border-gray-300 rounded-l-md w-full"
          placeholder="Enter a new task..."
        />
        <button onClick={addTask} className="bg-blue-500 text-white p-2 rounded-r-md">
          Add
        </button>
      </div>

      <div>
        {tasks.map((task, index) => (
          <Task key={index} text={task} onRemove={() => removeTask(index)} />
        ))}
      </div>
    </div>
  );
};

export default Home;
