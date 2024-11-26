import { ComponentProps, ReactNode } from 'react'

interface SpanIconOfText extends ComponentProps<'label'> {
  children: ReactNode
}

export function SpanText({ children, ...props }: SpanIconOfText) {
  return (
    <span
      {...props}
      className="w-full py-2 px-4 text-sm text-gray-200 cursor-pointer"
    >
      {children}
    </span>
  )
}

export function SpanIcon({ children, ...props }: SpanIconOfText) {
  return (
    <span {...props} className="bg-violet-500 py-3 px-4 rounded-s-lg">
      {children}
    </span>
  )
}

type RootProps = ComponentProps<'div'>

export function Root(props: RootProps) {
  return <div {...props} className="w-full flex items-center bg-[#363041]" />
}
