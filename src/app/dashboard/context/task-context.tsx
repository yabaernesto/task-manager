"use client";

import { createContext, useEffect, useState } from "react";

interface Task {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
  time?: string;
}

interface TaskContextType {
  tasks: Task[];
  addTask: (title: string, time: string) => void;
  toggleTaskCompletion: (id: string) => void;
  deleteTask: (id: string) => void;
}

export const TaskContext = createContext<TaskContextType | undefined>(
  undefined,
);

export function TaskProvider({ children }: { children: React.ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>([]);

  // Carregar tarefas do localStorage ao iniciar
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  // Sempre que 'tasks' mudar, atualizar o localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title: string, time: string) => {
    if (!title.trim() || !time.trim()) {
      return alert("Preencha a Tarefa e o Dia!");
    }

    const newTask: Task = {
      id: Date.now().toString(),
      title,
      description: "",
      isCompleted: false,
      time,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const toggleTaskCompletion = (id: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task,
      ),
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, toggleTaskCompletion, deleteTask }}
    >
      {children}
    </TaskContext.Provider>
  );
}
