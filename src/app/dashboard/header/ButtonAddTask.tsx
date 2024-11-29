import { FilePlus } from 'lucide-react'
import Link from 'next/link'

export function ButtonAddTasks() {
  return (
    <Link href="/dashboard/addtask">
      <div className="flex items-center gap-2">
        <FilePlus className="h-5 w-5 text-zinc-200" />
        <span className="cursor-pointer text-zinc-200 font-medium">
          Add Task
        </span>
      </div>
    </Link>
  )
}