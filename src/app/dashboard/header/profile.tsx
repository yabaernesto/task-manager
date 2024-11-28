import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
// biome-ignore lint/style/useImportType: <explanation>
import { ComponentProps } from 'react'

interface ProfileProps extends ComponentProps<'img'> {
  name: string
}

export function Profile({ name, ...props }: ProfileProps) {
  return (
    <div className="flex justify-between items-center gap-2">
      {/* biome-ignore lint/a11y/useAltText: <explanation> */}
      <img className="h-14 w-14 rounded-full cursor-pointer" {...props} />
      <div className="flex flex-col text-center">
        <span className="text-white text-sm">{name}</span>
        <span className="flex items-center gap-1 text-primaryColor text-xs font-bold cursor-pointer">
          <Link href="/my-account">My account</Link>
          <ArrowRight className="w-3 h-3 text-zinc-100" />
        </span>
      </div>
    </div>
  )
}
