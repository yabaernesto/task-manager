import { Root, ContainerDiv } from '../header'
import { Profile } from '../header/profile'
import { MenuBar } from '../header/header'
import { ArrowLeft, CalendarDays } from 'lucide-react'
import * as RootInput from '../../components/Form/Input'
import Link from 'next/link'
import { Button } from '@/app/components/Button'

function AddTask() {
  return (
    <div>
      <Root>
        <ContainerDiv>
          <MenuBar />
        </ContainerDiv>
        <Profile src="https://github.com/yabaernesto.png" name="Yaba Ernesto" />
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
          <div className="mt-4 space-y-6">
            <RootInput.FormRoot>
              <RootInput.Label>Title task</RootInput.Label>
              <RootInput.InputFild id="task" placeholder="Insert your task" />
            </RootInput.FormRoot>

            <RootInput.FormRoot>
              <RootInput.Label>Date</RootInput.Label>
              <div className="flex items-center py-3 px-4 bg-secondary">
                <input
                  type="text"
                  placeholder="Today"
                  className="bg-secondary w-full outline-none text-sm"
                />
                <CalendarDays className="h-5 w-5 text-zinc-200 cursor-pointer" />
              </div>
            </RootInput.FormRoot>

            <Button className="w-full text-sm px-2 py-4">Create Task</Button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default AddTask
