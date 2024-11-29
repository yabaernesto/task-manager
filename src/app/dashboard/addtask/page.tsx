'use client'

import { Root, ContainerDiv } from '../header'
import { Profile } from '../profile/profile'
import { MenuBar } from '../header/header'
import { ArrowLeft, CalendarDays } from 'lucide-react'
import * as RootInput from '../../components/Form/Input'
import Link from 'next/link'
import { Button } from '@/app/components/Button'
import { useState, useEffect } from 'react'
import { ListTask } from './../task/ListTask'

interface Task {
  id: string
  title: string
  description: string
  isCompleted: boolean
  time: string
}

function AddTask() {
  const [task, setTask] = useState('')
  const [day, setDay] = useState('')
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks')
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks))
    }
  }, [])

  const addTask = () => {
    if (!day.trim() || !task.trim()) {
      return alert('Preencha a Tarefa e o Dia!')
    }

    const newTask = {
      id: Date.now().toString(),
      title: task,
      description: '',
      isCompleted: false,
      time: day,
    }

    const updatedTasks = [...tasks, newTask]
    setTasks(updatedTasks)
    localStorage.setItem('tasks', JSON.stringify(updatedTasks))

    setTask('')
    setDay('')
  }

  const onTaskClick = (taskId: string) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted }
      }
      return task
    })

    setTasks(updatedTasks)
    localStorage.setItem('tasks', JSON.stringify(updatedTasks))
  }

  const onDeleteTaskClick = (taskId: string) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId)
    setTasks(updatedTasks)
    localStorage.setItem('tasks', JSON.stringify(updatedTasks))
  }

  return (
    <div>
      <Root>
        <ContainerDiv>
          <MenuBar />
        </ContainerDiv>
        <Profile
          className="h-14 w-14 rounded-full cursor-pointer"
          src="https://github.com/yabaernesto.png"
          name="Yaba Ernesto"
        />
      </Root>

      <main className="h-96 flex justify-center items-center">
        <div className="w-[600px] mt-24 p-2">
          <div className="flex items-center gap-5">
            <div className="bg-secondary p-4 rounded-full cursor-pointer">
              <Link href="/dashboard">
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </div>
            <div className="space-y-1">
              <h1 className="text-2xl font-bold">Add Task</h1>
              <p className="text-zinc-200 text-sm">
                Add your tasks to be registered.
              </p>
            </div>
          </div>
          <form className="mt-4 space-y-6">
            <RootInput.FormRoot>
              <RootInput.Label>Title task</RootInput.Label>
              <RootInput.InputFild
                value={task}
                onChange={event => setTask(event.target.value)}
                id="task"
                placeholder="Insert your task"
              />
            </RootInput.FormRoot>

            <RootInput.FormRoot>
              <RootInput.Label>Date</RootInput.Label>
              <div className="flex items-center py-3 px-4 bg-secondary">
                <input
                  type="text"
                  value={day}
                  onChange={event => setDay(event.target.value)}
                  placeholder="Today"
                  className="bg-secondary w-full outline-none text-sm"
                />
                <CalendarDays className="h-5 w-5 text-zinc-200 cursor-pointer" />
              </div>
            </RootInput.FormRoot>

            <Button
              type="button"
              onClick={addTask}
              className="w-full text-sm px-2 py-4"
            >
              Create Task
            </Button>
          </form>

          <div style={{ display: 'none' }}>
            <ListTask
              tasks={tasks}
              onTaskClick={onTaskClick}
              onDeleteTaskClick={onDeleteTaskClick}
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default AddTask
