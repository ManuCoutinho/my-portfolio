import { ButtonHTMLAttributes } from 'react'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
	ButtonStyleProps

export type ButtonStyleProps = {
	size?: ButtonSize
	variant?: ButtonVariant
}

export type ButtonSize = 'sm' | 'md' | 'full'
export type ButtonVariant = 'outline' | 'filled' | 'ghost'
