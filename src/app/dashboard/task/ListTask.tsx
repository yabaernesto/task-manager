'use client'

import { Check, Trash2 } from 'lucide-react'
import { useState } from 'react'

export function ListTask() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Estudar programacao',
      description: 'Estudar programacao em treinamentos Online',
      isCompleted: true,
      time: '1h',
    },
    {
      id: 2,
      title: 'Ingles',
      description: 'Treinamento de ingles',
      isCompleted: false,
      time: '2 days',
    },
    {
      id: 3,
      title: 'Exercicios',
      description: 'Praticar exercicios para se manter em forma!',
      isCompleted: false,
      time: '14h',
    },
  ])

  function onTaskClick(taskId: number) {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted }
      }

      return task
    })

    setTasks(newTasks)
  }

  function onDeleteTaskClick(taskId: number) {
    const newTaks = tasks.filter(task => task.id !== taskId)
    setTasks(newTaks)
  }

  return (
    <div className="space-y-2">
      {tasks.map(task => (
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
                onClick={() => onTaskClick(task.id)}
                className={`text-base text-zinc-200 cursor-pointer ${task.isCompleted && 'line-through'}`}
              >
                {task.title}
              </button>
              <span className="text-xs text-primaryColor font-semibold">
                {task.time}
              </span>
            </div>
          </div>

          {task.isCompleted ? (
            <button type="button" onClick={() => onDeleteTaskClick(task.id)}>
              <Trash2 className="h-5 w-5 text-zinc-200 cursor-pointer" />
            </button>
          ) : (
            ''
          )}
        </div>
      ))}
    </div>
  )
}
