// biome-ignore lint/style/useImportType: <explanation>
import { ComponentProps } from 'react'
// biome-ignore lint/style/useImportType: <explanation>
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'py-2 px-3 hover:bg-violet-400 text-violet-900 rounded-md',

  variants: {
    vartiant: {
      primary: 'bg-violet-300 hover:text-violet-900',
      outline: 'bg-zinc-300 border border-zinc-400',
      ghost: 'border border-zinc-200 text-zinc-700',
    },
  },

  defaultVariants: {
    vartiant: 'primary',
  },
})

export type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export function Button({ vartiant, className, ...props }: ButtonProps) {
  return <button {...props} className={button({ vartiant, className })} />
}
