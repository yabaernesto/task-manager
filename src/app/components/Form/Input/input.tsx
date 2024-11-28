// biome-ignore lint/style/useImportType: <explanation>
import { ComponentProps, InputHTMLAttributes, ReactNode } from 'react'

interface LabelProps extends InputHTMLAttributes<HTMLInputElement> {
  children: ReactNode
}

export function Label({ children, ...props }: LabelProps) {
  return (
    <label className="text-violet-300 font-bold text-sm" {...props}>
      {children}
    </label>
  )
}

type ControlProps = ComponentProps<'input'>

export function InputFild(props: ControlProps) {
  return (
    <input
      className="py-3 px-4 bg-secondary w-full outline-none text-sm"
      {...props}
    />
  )
}

type RootProps = ComponentProps<'div'>

export function FormRoot(props: RootProps) {
  return <div {...props} />
}
