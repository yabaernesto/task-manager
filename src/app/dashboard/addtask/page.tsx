"use client";

import { Root, ContainerDiv } from "../header";
import { Profile } from "../profile/profile";
import { MenuBar } from "../header/header";
import { ArrowLeft, CalendarDays } from "lucide-react";
import * as RootInput from "../../components/Form/Input";
import Link from "next/link";
import { Button } from "@/app/components/Button";
import { useState, useEffect } from "react";
import { ListTask } from "./../task/ListTask";

interface Task {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
  time: string;
}

function AddTask() {
  const [task, setTask] = useState("");
  const [day, setDay] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  const addTask = () => {
    if (!day.trim() || !task.trim()) {
      return alert("Preencha a Tarefa e o Dia!");
    }

    const newTask = {
      id: Date.now().toString(),
      title: task,
      description: "",
      isCompleted: false,
      time: day,
    };

    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    setTask("");
    setDay("");
  };

  const onTaskClick = (taskId: string) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });

    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const onDeleteTaskClick = (taskId: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return (
    <div>
      <Root>
        <ContainerDiv>
          <MenuBar />
        </ContainerDiv>
        <Profile
          className="h-14 w-14 cursor-pointer rounded-full"
          src="https://github.com/yabaernesto.png"
          name="Yaba Ernesto"
        />
      </Root>

      <main className="flex h-[85vh] items-center justify-center">
        <div className="m-auto flex w-[37.6875rem] flex-col space-y-10 p-4 lg:p-2">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-secondary lg:h-14 lg:w-14">
              <Link href="/dashboard">
                <ArrowLeft className="h-5 text-white/80" />
              </Link>
            </div>

            <div className="space-y-1">
              <h1 className="text-2xl font-bold lg:text-3xl">Add Task</h1>
              <p className="text-xs font-medium text-white/80 lg:text-lg">
                Add your tasks to be registered.
              </p>
            </div>
          </div>

          <form className="space-y-2">
            <div className="mb-8 space-y-4">
              <RootInput.FormRoot className="space-y-1">
                <RootInput.Label className="font-medium">
                  Title task
                </RootInput.Label>
                <RootInput.InputFild
                  value={task}
                  onChange={(event) => setTask(event.target.value)}
                  id="task"
                  placeholder="Insert your task"
                  className="h-[3.75rem]"
                />
              </RootInput.FormRoot>

              <RootInput.FormRoot>
                <RootInput.Label>Date</RootInput.Label>
                <div className="flex h-[3.75rem] items-center rounded-md bg-secondary px-4 py-3">
                  <input
                    type="text"
                    value={day}
                    onChange={(event) => setDay(event.target.value)}
                    placeholder="Today"
                    className="w-full bg-secondary text-xs font-medium text-white/80 outline-none"
                  />
                  <CalendarDays className="h-5 w-5 cursor-pointer text-white/80" />
                </div>
              </RootInput.FormRoot>
            </div>

            <Button
              type="button"
              onClick={addTask}
              className="h-[3.75rem] w-full text-lg font-medium text-[#2E2938]"
            >
              Create Task
            </Button>
          </form>

          <div style={{ display: "none" }}>
            <ListTask
              tasks={tasks}
              onTaskClick={onTaskClick}
              onDeleteTaskClick={onDeleteTaskClick}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default AddTask;
