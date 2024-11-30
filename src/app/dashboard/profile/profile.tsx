import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
// biome-ignore lint/style/useImportType: <explanation>
import { ComponentProps } from 'react'

interface ProfileProps extends ComponentProps<'img'> {
  name: string
}

export function Profile({ name, className, ...props }: ProfileProps) {
  return (
    <div className="flex justify-between items-center gap-2">
      {/* biome-ignore lint/a11y/useAltText: <explanation> */}
      <img className={className} {...props} />
      <div className="flex flex-col text-center">
        <span className="text-white text-sm font-medium">{name}</span>
        <span className="flex items-center gap-1 text-primaryColor text-xs font-bold cursor-pointer">
          <Link href="/dashboard/profile" className="text-xs font-bold">
            My account
          </Link>
          <ArrowRight className="w-3 h-3 text-white/80" />
        </span>
      </div>
    </div>
  )
}
