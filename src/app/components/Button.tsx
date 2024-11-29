// biome-ignore lint/style/useImportType: <explanation>
import { ComponentProps } from 'react'
// biome-ignore lint/style/useImportType: <explanation>
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'py-2 px-3 hover:bg-violet-400 text-violet-900 rounded-md',

  variants: {
    variant: {
      primary: 'bg-violet-300 hover:text-violet-900',
      outline: 'bg-zinc-300 border border-zinc-400',
      ghost: 'bg-secondary p-4 w-96 hover:text-zinc-200 text-zinc-400 text-sm',
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
})

export type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export function Button({ variant, className, ...props }: ButtonProps) {
  return <button {...props} className={button({ variant, className })} />
}
