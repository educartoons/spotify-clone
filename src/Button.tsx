import { ButtonHTMLAttributes } from 'react'

type ButtonProps = {
  children: React.ReactNode
  variant: Variants
  className?: 'Sorry You can not add the property className to this component'
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'>

type Variants = keyof typeof variants

const variants = {
  icon: 'bg-black w-7 h-7 rounded-full flex justify-center items-center',
  iconInvert: 'bg-white w-7 h-7 rounded-full flex justify-center items-center',
  text: 'text-gray-400 font-semibold px-6 py-3 hover:scale-105 hover:text-white',
  solid:
    'bg-white text-black font-semibold rounded-full px-6 py-3 hover:scale-105',
  outlined: 'border rounded-full text-white',
}

export default function Button({ variant, children, ...rest }: ButtonProps) {
  return (
    <button className={variants[variant]} {...rest}>
      {children}
    </button>
  )
}
