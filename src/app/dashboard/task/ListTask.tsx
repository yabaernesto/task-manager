'use client'

import { useEffect, useState } from 'react'
import { Check, Search, Trash2 } from 'lucide-react'

interface Task {
  id: string
  title?: string
  description?: string
  isCompleted?: boolean
  time?: string
}

interface ListTaskProps {
  tasks?: Task[]
  onTaskClick?: (taskId: string) => void
  onDeleteTaskClick?: (taskId: string) => void
}

export function ListTask({
  tasks,
  onTaskClick,
  onDeleteTaskClick,
}: ListTaskProps) {
  const [localTasks, setLocalTasks] = useState<Task[]>([])
  const [searchTerm, setSearchTerm] = useState<string>('')

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks')
    if (storedTasks) {
      setLocalTasks(JSON.parse(storedTasks))
    } else {
      setLocalTasks([])
    }
  }, [])

  useEffect(() => {
    if (localTasks.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(localTasks))
    }
  }, [localTasks])

  const filteredTasks = localTasks.filter(
    task =>
      task.title?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false
  )

  function handleTaskClick(taskId: string) {
    const updatedTasks = localTasks.map(task => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted }
      }
      return task
    })
    setLocalTasks(updatedTasks)
  }

  function handleDeleteTaskClick(taskId: string) {
    const updatedTasks = localTasks.filter(task => task.id !== taskId)
    setLocalTasks(updatedTasks)
  }

  return (
    <div className="space-y-4">
      <div className="w-full my-8 py-2 px-4 bg-secondary flex items-center gap-2 rounded-lg">
        <span className="h-8 w-8 bg-primaryColor flex justify-center items-center rounded-md">
          <Search className="h-4 w-4 text-white" />
        </span>
        <input
          type="search"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          placeholder="Find of tasks"
          className="w-full p-1 bg-secondary text-sm text-zinc-200 no-clear outline-none"
        />
      </div>

      <h1 className="text-xl font-bold">Tasks - {filteredTasks.length}</h1>

      {/* Exibição das tarefas */}
      <div className="space-y-2">
        {filteredTasks.length > 0 ? (
          filteredTasks.map(task => (
            <div
              key={task.id}
              className="flex justify-between py-3 px-4 bg-secondary rounded-xl"
            >
              <div className="flex gap-2">
                {task.isCompleted ? (
                  <div className="h-5 w-5 border bg-primaryColor rounded-md flex justify-center items-center cursor-pointer">
                    <Check className="h-4 w-5 text-zinc-200" />
                  </div>
                ) : (
                  <div className="h-5 w-5 border border-primaryColor rounded-md cursor-pointer" />
                )}

                <div className="flex flex-col">
                  <button
                    type="button"
                    onClick={() => handleTaskClick(task.id)}
                    className={`text-base text-zinc-200 cursor-pointer ${task.isCompleted && 'line-through'}`}
                  >
                    {task.title}
                  </button>
                  <span className="text-xs text-primaryColor font-semibold">
                    {task.time}
                  </span>
                </div>
              </div>

              {task.isCompleted && (
                <button
                  type="button"
                  onClick={() => handleDeleteTaskClick(task.id)}
                >
                  <Trash2 className="h-5 w-5 text-zinc-200 cursor-pointer" />
                </button>
              )}
            </div>
          ))
        ) : (
          <p className="text-zinc-200">Nenhuma tarefa disponível</p>
        )}
      </div>
    </div>
  )
}
