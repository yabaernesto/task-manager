// biome-ignore lint/style/useImportType: <explanation>
import { ComponentProps, ReactNode } from 'react'

interface SpanIconOfText extends ComponentProps<'label'> {
  children: ReactNode
}

export function SpanText({ children, ...props }: SpanIconOfText) {
  return (
    <span
      {...props}
      className="w-full py-2 px-4 font-medium text-base text-gray-200 cursor-pointer"
    >
      {children}
    </span>
  )
}

export function SpanIcon({ children, ...props }: SpanIconOfText) {
  return (
    <span
      {...props}
      className="h-[60px] w-16 flex items-center justify-center bg-[#B4ACF9] rounded-s-lg"
    >
      {children}
    </span>
  )
}

type RootProps = ComponentProps<'div'>

export function Root(props: RootProps) {
  return (
    <div
      {...props}
      className="w-full h-[60px] flex items-center bg-[#363041] rounded-md"
    />
  )
}
