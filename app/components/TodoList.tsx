"use client";
import { todo } from "node:test";
import { useState, useEffect } from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { IoAddCircleOutline } from "react-icons/io5";
import Modal from "./Modal";

const TodoList = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState("Home");
  let loadedTodos;
  let loadedProjects;
  try {
    loadedTodos = localStorage.getItem(`todos-${currentProjectIndex}`)
      ? JSON.parse(localStorage.getItem(`todos-${currentProjectIndex}`)!)
      : []; // new
  } catch (error) {}
  try {
    loadedProjects = localStorage.getItem("projects")
      ? JSON.parse(localStorage.getItem("projects")!)
      : []; // new
  } catch (error) {}

  const [inputValue, setInputValue] = useState("");
  const [projectName, setProjectName] = useState("");
  const [projects, setProjects] = useState(loadedProjects);
  const [todos, setTodos] = useState(loadedTodos);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    const storedProjects = JSON.parse(localStorage.getItem("projects") || "[]");
    setProjects(storedProjects);
  }, []);

  useEffect(() => {
    const storedTodos = JSON.parse(
      localStorage.getItem(`todos-${currentProjectIndex}`) || "[]"
    );
    setTodos(storedTodos);
  }, [currentProjectIndex]);

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem(`todos-${currentProjectIndex}`, JSON.stringify(todos));
  }, [todos, currentProjectIndex]);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return <></>;

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue("");
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
    const updatedProjects = projects.filter((proj) => proj !== project);
    setProjects(updatedProjects);
    if (currentProjectIndex === project) {
      setCurrentProjectIndex(updatedProjects[0] || "Home");
    }
  };

  const handleProjectChange = (index) => {
    setCurrentProjectIndex(index);
  };

  return (
    <div className="grid-cols-2  sm:flex w-full h-screen">
      <div className="bg-black w-full flex flex-col sm:w-2/6 md:w-3/12  text-white p-5 shadow-2xl">
        <h1 className="text-4xl font-black">Todo list</h1>
        <div className="mt-10 text-xl ">
          <button
            key={0}
            className="hover:bg-slate-300"
            onClick={() => handleProjectChange("Home")}
          >
            Home
          </button>
        </div>
        <h3 className="text-2xl text-white mt-5 font-bold">Projects</h3>
        <div className="flex flex-col ">
          {projects &&
            projects.map((project, index) => (
              <div key={"div" + index} className=" flex justify-between ">
                <button
                  key={"proj" + index}
                  className="hover:bg-slate-300"
                  onClick={() => handleProjectChange(project)}
                >
                  {project}
                </button>
                <button
                  key={"del" + index}
                  onClick={() => handleDeleteProject(project)}
                >
                  <MdOutlineDeleteOutline />
                </button>
              </div>
            ))}
        </div>
        <button
          className="self-center bg-green-300 hover:bg-green-400 focus:bg-green-500 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center my-3 h-auto"
          onClick={toggleModal}
        >
          <h5 className="mr-2">Add Project</h5>
          <IoAddCircleOutline />
        </button>
      </div>

      {/* right side */}
      <div className="p-10 w-full bg-white bg-gradient-to-b from-gray-100 sm:bg-gradient-to-r sm:from-gray-100 text-black">
        <div className="text-3xl font-black mb-10">{currentProjectIndex}</div>

        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder=" Add new todo..."
          className="h-10"
        />
        <button
          className="bg-green-300 hover:bg-green-400 focus:bg-green-500 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center "
          onClick={handleAddTodo}
        >
          <h5 className="mr-2">Add Todo</h5>
          <IoAddCircleOutline />
        </button>

        <ul className="mt-10 w-full">
          {todos &&
            todos.map((todo, index) => (
              <li
                key={index}
                className="flex flex-row justify-between content-center mb-2 hover:bg-white"
              >
                <span className="self-center overflow-x-auto ">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleToggleTodo(index)}
                    className="mr-2 w-4 h-4"
                  />
                  <span
                    style={{
                      textDecoration: todo.completed ? "line-through" : "none",
                    }}
                  >
                    {todo.text}
                  </span>
                </span>

                <button
                  className="  bg-red-300 hover:bg-red-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center "
                  onClick={() => handleDeleteTodo(index)}
                >
                  Delete
                </button>
              </li>
            ))}
        </ul>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={toggleModal}
        handleAddProject={handleAddProject}
        inputValue={projectName}
        setInputValue={setProjectName}
      />
    </div>
  );
};

export default TodoList;
