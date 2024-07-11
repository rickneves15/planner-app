import clsx from 'clsx'
import { createContext, useContext } from 'react'
import {
  ActivityIndicator,
  Text,
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'

type Variants = 'primary' | 'secondary'

export type ButtonProps = TouchableOpacityProps & {
  variant?: Variants
  isLoading?: boolean
}

type ThemeContextProps = {
  variant?: Variants
}

const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps)

function Button({
  children,
  variant = 'primary',
  isLoading,
  ...rest
}: ButtonProps) {
  return (
    <TouchableOpacity
      className={clsx(
        'h-11 w-full flex-row items-center justify-center gap-2 rounded-lg',
        {
          'bg-lime-300': variant === 'primary',
          'bg-zinc-800': variant === 'secondary',
        },
      )}
      disabled={isLoading}
      activeOpacity={0.7}
      {...rest}
    >
      <ThemeContext.Provider value={{ variant }}>
        {isLoading ? <ActivityIndicator className="text-lime-950" /> : children}
      </ThemeContext.Provider>
    </TouchableOpacity>
  )
}

function Title({ children, ...rest }: TextProps) {
  const { variant } = useContext(ThemeContext)

  return (
    <Text
      className={clsx('font-semibold text-base', {
        'text-lime-950': variant === 'primary',
        'text-zinc-200': variant === 'secondary',
      })}
      {...rest}
    >
      {children}
    </Text>
  )
}
Button.Title = Title

export { Button }
