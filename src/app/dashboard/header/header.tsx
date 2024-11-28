import { Menu } from 'lucide-react'
import { Profile } from './profile'
import { AddTasks } from './AddTasks'

export function Header() {
  return (
    <header className="px-8 py-6 h-20 bg-secondary flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Menu className="h-5 w-5 cursor-pointer text-zinc-200" />
        <AddTasks />
      </div>

      <Profile src="https://github.com/yabaernesto.png" name="Yaba Ernesto" />
    </header>
  )
}
