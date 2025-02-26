"use client";

import { useState, useContext } from "react";
import { Check, Plus, Search, Trash2 } from "lucide-react";
import { TaskContext } from "../context/task-context";
import { useRouter } from "next/navigation";

export function ListTask() {
  const router = useRouter();
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("AddTask deve ser usado dentro de um TaskProvider");
  }

  const { tasks, toggleTaskCompletion, deleteTask } = context;
  const [searchTerm, setSearchTerm] = useState("");

  // Filtra as tarefas conforme a pesquisa
  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleClick = () => router.push("/dashboard/addtask");

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
                  <button
                    type="button"
                    onClick={() => toggleTaskCompletion(task.id)}
                    className="h-7 w-7"
                  >
                    {task.isCompleted ? (
                      <div className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-md border bg-primaryColor">
                        <Check className="h-4 w-5 text-white/80" />
                      </div>
                    ) : (
                      <div className="h-7 w-7 cursor-pointer rounded-md border border-primaryColor" />
                    )}
                  </button>

                  <div className="flex flex-col">
                    <button
                      type="button"
                      onClick={() => toggleTaskCompletion(task.id)}
                      className={`cursor-pointer text-lg font-medium text-white/80 ${
                        task.isCompleted && "line-through"
                      }`}
                    >
                      {task.title}
                    </button>
                    <span className="text-xs font-bold text-primaryColor">
                      {task.time}
                    </span>
                  </div>
                </div>

                {task.isCompleted && (
                  <button type="button" onClick={() => deleteTask(task.id)}>
                    <Trash2 className="h-5 w-5 cursor-pointer text-white/80" />
                  </button>
                )}
              </div>
            ))
          ) : (
            <p className="text-white/80">Nenhuma tarefa disponível</p>
          )}
        </div>

        <div className="m-auto flex h-16 w-16 cursor-pointer rounded-lg bg-[#B4ACF9] p-5 text-[#2E2938] lg:hidden">
          <Plus size={24} onClick={handleClick} />
        </div>
      </div>
    </>
  );
}
