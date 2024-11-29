import { Root, ContainerDiv, ButtonTask } from './header'
import { ListTask } from './task/ListTask'
import { Profile } from './profile/profile'
import { MenuBar } from './header/header'

function Dashboard() {
  return (
    <div className="">
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

      <main className="h-auto mt-14 flex justify-center">
        <div className="h-auto flex flex-col w-areaTask p-4">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold">My Tasks</h1>
            <p className="text-sm text-zinc-200">
              Register your tasks and have a better monitoring of your
              activities
            </p>
          </div>

          <div className="space-y-3.5">
            <ListTask />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard
