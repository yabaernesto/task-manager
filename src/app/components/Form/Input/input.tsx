import { ComponentProps, ReactNode } from 'react'

interface LabelProps extends ComponentProps<'label'> {
  children: ReactNode
  htmlFor?: string
}

export function Label({ children, ...props }: LabelProps) {
  return (
    <label className="text-violet-300 font-bold text-sm" {...props}>
      {children}
    </label>
  )
}

type ControlProps = ComponentProps<'input'>

export function Control(props: ControlProps) {
  return (
    <input
      className="py-3 px-4 bg-[#363041] w-full outline-none text-sm"
      {...props}
    />
  )
}

type RootProps = ComponentProps<'div'>

export function Root(props: RootProps) {
  return <div {...props} />
}
