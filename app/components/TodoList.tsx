'use client'
import { todo } from 'node:test';
import { useState, useEffect } from 'react';
import { MdOutlineDeleteOutline } from "react-icons/md";
import { IoAddCircleOutline } from "react-icons/io5";
import Modal from './Modal';

const TodoList = () => {
    const [currentProjectIndex, setCurrentProjectIndex] = useState('Home');
    const storedTodoList = JSON.parse(localStorage.getItem(`todos-${currentProjectIndex}`));
    const storedProjects = JSON.parse(localStorage.getItem("projects"));
    const [projects, setProjects] = useState(storedProjects || []);
    const [inputValue, setInputValue] = useState('');
    const [projectName, setProjectName] = useState('');
    const [todos, setTodos] = useState(storedTodoList || []);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
    };
  
    useEffect(() => {
      const savedProjects = localStorage.getItem('projects');
      if (savedProjects) {
        setProjects(JSON.parse(savedProjects));
      }
    }, []);
  
    useEffect(() => {
      const savedTodos = localStorage.getItem(`todos-${currentProjectIndex}`);
      if (savedTodos) {
        setTodos(JSON.parse(savedTodos));
      }
    }, [currentProjectIndex]);
  
    useEffect(() => {
      if (projects.length >= 0) {
        localStorage.setItem('projects', JSON.stringify(projects));
      }
    }, [projects]);
  
    useEffect(() => {
      if (todos.length >= 0) {
        localStorage.setItem(`todos-${currentProjectIndex}`, JSON.stringify(todos));
      }
    }, [todos, currentProjectIndex]);
  
    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };
  
    const handleAddTodo = () => {
      if (inputValue.trim() !== '') {
        setTodos([...todos, { text: inputValue, completed: false }]);
        setInputValue('');
      }
    };
  
    const handleDeleteTodo = (index) => {
      const updatedTodos = [...todos];
      updatedTodos.splice(index, 1);
      setTodos(updatedTodos);
    };
  
    const handleToggleTodo = (index) => {
      const updatedTodos = [...todos];
      updatedTodos[index].completed = !updatedTodos[index].completed;
      setTodos(updatedTodos);
    };
  
    const handleAddProject = (e) => {
        e.preventDefault();
      if (projectName) {
        setProjects([...projects, projectName]);
        setCurrentProjectIndex(projectName);
        localStorage.setItem(`todos-${projectName}`, JSON.stringify([]));
      }
      toggleModal();
    };
  
    const handleDeleteProject = (project) => {
      localStorage.removeItem(`todos-${project}`);
      const updatedProjects = projects.filter(proj => proj !== project);
      setProjects(updatedProjects);
      if (currentProjectIndex === project) {
        setCurrentProjectIndex(updatedProjects[0] || 'Home');
      }
    };
  
    const handleProjectChange = (index) => {
      setCurrentProjectIndex(index);
    };

  return (
    <div  className="grid-cols-2 sm:flex w-full h-screen">
      <div className="bg-black w-full sm:w-2/6 md:w-1/6 text-white p-5 shadow-2xl">
        <h1 className="text-4xl font-black">Todo list</h1>
        <div className="mt-10 text-xl ">
                <button key={0} className='hover:bg-slate-300' onClick={() => handleProjectChange("Home")}>
                    Home
                </button>
                  
        </div>
        <h3 className="text-2xl text-white mt-5 font-bold">Projects</h3>
        <div className='flex flex-col '>
            
            {projects.map((project, index) => (
            <div className=" flex justify-between ">
                <button key={index} className='hover:bg-slate-300' onClick={() => handleProjectChange(project)}>
                    {project}
                </button>
                    <button onClick={() => handleDeleteProject(project)}>
                    <MdOutlineDeleteOutline />
                    </button>
            </div>
            ))}
            
        </div>
        <button className="bg-green-300 hover:bg-green-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center ml-5 mt-5  h-auto" onClick={toggleModal}>
            <h5 className='mr-2'>Add Project</h5>
            <IoAddCircleOutline /></button>
      </div>

      <div className='p-10'>
        <div className='text-3xl font-black mb-10'>
         {currentProjectIndex}
        </div>
        
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Add new todo..."
        className='h-10'
      />
      <button className="bg-green-300 hover:bg-green-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center " onClick={handleAddTodo}>
        <h5 className="mr-2">Add Todo</h5>
        <IoAddCircleOutline />
        </button>
      <ul className='mt-10'>
        {todos.map((todo, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleTodo(index)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
            
            <button className='ml-5 bg-red-300 hover:bg-red-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center ' onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
      </div>

      <Modal isOpen={isModalOpen} onClose={toggleModal} handleAddProject={handleAddProject}
      inputValue={projectName} setInputValue={setProjectName} >
      
      </Modal>
    </div>
  );
};

export default TodoList;
