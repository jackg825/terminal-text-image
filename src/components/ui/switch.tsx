import * as React from 'react'
import * as SwitchPrimitives from '@radix-ui/react-switch'
import { cn } from '@/lib/utils'

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      'peer inline-flex h-5 w-[38px] shrink-0 cursor-pointer items-center',
      'rounded-full bg-surface',
      'transition-all duration-normal ease-out-expo',
      'focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-accent-glow',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-accent-primary data-[state=checked]:to-accent-secondary',
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        'pointer-events-none block h-4 w-4 rounded-full',
        'bg-text-tertiary shadow-sm',
        'transition-all duration-normal ease-out-expo',
        'data-[state=checked]:translate-x-[18px] data-[state=checked]:bg-white data-[state=checked]:shadow-[0_2px_4px_rgba(0,0,0,0.2)]',
        'data-[state=unchecked]:translate-x-0.5'
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
