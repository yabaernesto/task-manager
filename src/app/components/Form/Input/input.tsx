// biome-ignore lint/style/useImportType: <explanation>
import { ComponentProps, ReactNode } from 'react'
import clsx from 'clsx'

type LabelProps = ComponentProps<'label'> & {
  children: ReactNode
}

export function Label({ children, className, ...props }: LabelProps) {
  return (
    // biome-ignore lint/a11y/noLabelWithoutControl: <explanation>
    <label
      className={clsx('text-[#B4ACF9] font-bold text-base', className)}
      {...props}
    >
      {children}
    </label>
  )
}

type ControlProps = ComponentProps<'input'>

export function InputFild({ className, ...props }: ControlProps) {
  return (
    <input
      className={clsx(
        'p-4 bg-secondary w-full outline-none font-medium text-xs text-white/80 rounded-md',
        className
      )}
      {...props}
    />
  )
}

type RootProps = ComponentProps<'div'>

export function FormRoot(props: RootProps) {
  return <div className="h-[60px]" {...props} />
}
