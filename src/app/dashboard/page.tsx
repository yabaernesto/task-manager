"use client";

import { Root, ContainerDiv, ButtonTask } from "./header";
import { ListTask } from "./task/ListTask";
import { Profile } from "./profile/profile";
import { MenuBar } from "./header/header";
import { SidebarTasks } from "./task/components/sidebarTasks";
import { useState } from "react";

function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
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
          className="h-14 w-14 cursor-pointer rounded-full"
          src="https://github.com/yabaernesto.png"
          name="Yaba Ernesto"
        />
      </Root>

      <main className="h-[85vh] w-full px-8 py-11 lg:flex lg:items-center lg:justify-center">
        <div className="flex w-11/12 flex-col lg:w-3/4">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold lg:text-3xl">My Tasks</h1>
            <p className="text-sm font-medium text-white/80 lg:text-lg">
              Register your tasks and have a better monitoring of your
              activities
            </p>
          </div>

          <ListTask />
        </div>
      </main>

      <SidebarTasks isOpen={isOpen} onClose={handleCloseModal} />
    </>
  );
}

export default Dashboard;
