"use client";

import { useEffect, useState } from "react";
import { Check, Search, Trash2 } from "lucide-react";
interface Task {
  id: string;
  title?: string;
  description?: string;
  isCompleted?: boolean;
  time?: string;
}

interface ListTaskProps {
  tasks?: Task[];
  onTaskClick?: (taskId: string) => void;
  onDeleteTaskClick?: (taskId: string) => void;
}

export function ListTask({
  tasks,
  onTaskClick,
  onDeleteTaskClick,
}: ListTaskProps) {
  const [localTasks, setLocalTasks] = useState<Task[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setLocalTasks(JSON.parse(storedTasks));
    } else {
      setLocalTasks([]);
    }
  }, []);

  useEffect(() => {
    if (localTasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(localTasks));
    }
  }, [localTasks]);

  const filteredTasks = localTasks.filter(
    (task) =>
      task.title?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false,
  );

  function handleTaskClick(taskId: string) {
    const updatedTasks = localTasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setLocalTasks(updatedTasks);
  }

  function handleDeleteTaskClick(taskId: string) {
    const updatedTasks = localTasks.filter((task) => task.id !== taskId);
    setLocalTasks(updatedTasks);
  }

  return (
    <>
      <div className="space-y-4">
        <div className="my-8 flex h-[3.75rem] w-full items-center gap-1 rounded-lg bg-secondary px-4 py-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-primaryColor">
            <Search className="h-6 w-6 text-white/80" />
          </span>
          <input
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Find of tasks"
            className="no-clear w-full bg-secondary p-1 text-xs text-white/80 outline-none"
          />
        </div>

        <h1 className="text-xl font-bold">Tasks - {filteredTasks.length}</h1>

        <div className="h-[4.6875rem] space-y-2">
          {filteredTasks.length > 0 ? (
            filteredTasks.map((task) => (
              <div
                key={task.id}
                className="flex h-full justify-between rounded-xl bg-secondary px-4 py-3"
              >
                <div className="flex gap-2">
                  {task.isCompleted ? (
                    <>
                      <button
                        type="button"
                        onClick={() => handleTaskClick(task.id)}
                        className={`h-7 w-7 ${task.isCompleted && "line-through"}`}
                      >
                        <div className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-md border bg-primaryColor">
                          <Check className="h-4 w-5 text-white/80" />
                        </div>
                      </button>
                    </>
                  ) : (
                    <button
                      type="button"
                      onClick={() => handleTaskClick(task.id)}
                      className={`h-7 w-7 ${task.isCompleted && "line-through"}`}
                    >
                      <div className="h-7 w-7 cursor-pointer rounded-md border border-primaryColor" />
                    </button>
                  )}

                  <div className="flex flex-col">
                    <button
                      type="button"
                      onClick={() => handleTaskClick(task.id)}
                      className={`cursor-pointer text-lg font-medium text-white/80 ${task.isCompleted && "line-through"}`}
                    >
                      {task.title}
                    </button>
                    <span className="text-xs font-bold text-primaryColor">
                      {task.time}
                    </span>
                  </div>
                </div>

                {task.isCompleted && (
                  <button
                    type="button"
                    onClick={() => handleDeleteTaskClick(task.id)}
                  >
                    <Trash2 className="h-5 w-5 cursor-pointer text-white/80" />
                  </button>
                )}
              </div>
            ))
          ) : (
            <p className="text-white/80">Nenhuma tarefa disponível</p>
          )}
        </div>
      </div>
    </>
  );
}
