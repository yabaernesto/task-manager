import { AddIcon } from "@/app/components/AddIcon";
import Link from "next/link";

export function ButtonAddTasks() {
  return (
    <Link href="/dashboard/addtask" className="hidden lg:flex">
      <div className="flex items-center gap-2">
        <AddIcon className="h-5 w-5 text-white/80" />
        <span className="cursor-pointer text-sm font-medium text-white/80">
          Add Task
        </span>
      </div>
    </Link>
  );
}
