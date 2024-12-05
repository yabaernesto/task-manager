import { Menu } from 'lucide-react'
// biome-ignore lint/style/useImportType: <explanation>
import { ComponentProps } from 'react'
import { ButtonAddTasks } from './ButtonAddTask'

export function ButtonTask() {
  return <ButtonAddTasks />
}

export function MenuBar() {
  return <Menu className="text-2xl h-6 cursor-pointer text-zinc-400" />
}

type ContainerDivProps = ComponentProps<'div'>

export function ContainerDiv(props: ContainerDivProps) {
  return <div {...props} className="flex items-center gap-4" />
}

type RootProps = ComponentProps<'div'>

export function Root(props: RootProps) {
  return (
    <header
      {...props}
      className="px-8 py-6 h-20 bg-secondary flex items-center justify-between"
    />
  )
}
