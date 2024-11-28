import { FilePlus } from 'lucide-react'

export function AddTasks() {
  return (
    <div className="flex items-center gap-2">
      <FilePlus className="h-5 w-5 text-zinc-200" />
      <span className="cursor-pointer text-zinc-200 font-medium">Add Task</span>
    </div>
  )
}
