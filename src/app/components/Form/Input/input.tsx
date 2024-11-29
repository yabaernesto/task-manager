// biome-ignore lint/style/useImportType: <explanation>
import { ComponentProps, ReactNode } from 'react'

type LabelProps = ComponentProps<'label'> & {
  children: ReactNode
}

export function Label({ children, ...props }: LabelProps) {
  return (
    // biome-ignore lint/a11y/noLabelWithoutControl: <explanation>
    <label className="text-violet-300 font-bold text-base" {...props}>
      {children}
    </label>
  )
}

type ControlProps = ComponentProps<'input'>

export function InputFild(props: ControlProps) {
  return (
    <input
      className="p-4 bg-secondary w-full outline-none text-sm/3 text-zinc-200 rounded-md"
      {...props}
    />
  )
}

type RootProps = ComponentProps<'div'>

export function FormRoot(props: RootProps) {
  return <div {...props} />
}
