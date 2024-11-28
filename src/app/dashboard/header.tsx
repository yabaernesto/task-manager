import { FilePlus, Menu } from 'lucide-react'
import { Profile } from './profile'

export function Header() {
  return (
    <header className="px-8 py-6 h-20 bg-secondary flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Menu className="h-5 w-5 cursor-pointer text-zinc-200" />
        <div className="flex items-center gap-2">
          <FilePlus className="h-5 w-5 text-zinc-200" />
          <span className="cursor-pointer text-zinc-200 font-medium">
            Add Task
          </span>
        </div>
      </div>

      <Profile src="https://github.com/yabaernesto.png" name="Yaba Ernesto" />
    </header>
  )
}
