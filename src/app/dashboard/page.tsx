'use client'

import { Root, ContainerDiv, ButtonTask } from './header'
import { ListTask } from './task/ListTask'
import { Profile } from './profile/profile'
import { MenuBar } from './header/header'
import { SidebarTasks } from './task/SidebarTasks'
import { useState } from 'react'

function Dashboard() {
  const [isOpen, setIsOpen] = useState(false)

  function handleOpenModal() {
    setIsOpen(true)
  }

  function handleCloseModal() {
    setIsOpen(false)
  }

  return (
    <>
      <Root>
        <ContainerDiv>
          <button type="button" onClick={handleOpenModal}>
            <MenuBar />
          </button>
          <ButtonTask />
        </ContainerDiv>
        <Profile
          className="h-14 w-14 rounded-full cursor-pointer"
          src="https://github.com/yabaernesto.png"
          name="Yaba Ernesto"
        />
      </Root>

      <main className="h-[85vh] w-full flex justify-center items-center m-auto pb-2">
        <div className="w-11/12 lg:w-3/4 flex flex-col">
          <div className="space-y-2">
            <h1 className="text-2xl lg:text-3xl font-bold">My Tasks</h1>
            <p className="font-medium text-sm lg:text-lg text-white/80">
              Register your tasks and have a better monitoring of your
              activities
            </p>
          </div>

          <ListTask />
        </div>
      </main>

      <SidebarTasks isOpen={isOpen} onClose={handleCloseModal} />
    </>
  )
}

export default Dashboard
