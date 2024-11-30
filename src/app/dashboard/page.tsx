import { Root, ContainerDiv, ButtonTask } from './header'
import { ListTask } from './task/ListTask'
import { Profile } from './profile/profile'
import { MenuBar } from './header/header'

function Dashboard() {
  return (
    <>
      <Root>
        <ContainerDiv>
          <MenuBar />
          <ButtonTask />
        </ContainerDiv>
        <Profile
          className="h-14 w-14 rounded-full cursor-pointer"
          src="https://github.com/yabaernesto.png"
          name="Yaba Ernesto"
        />
      </Root>

      <main className="h-[85vh] w-[1004px] flex justify-center items-center m-auto pb-2">
        <div className="w-full flex flex-col">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">My Tasks</h1>
            <p className="font-medium text-lg text-white/80">
              Register your tasks and have a better monitoring of your
              activities
            </p>
          </div>

          <ListTask />
        </div>
      </main>
    </>
  )
}

export default Dashboard
