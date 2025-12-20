import * as React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'
import { cn } from '@/lib/utils'

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      'relative flex w-full touch-none select-none items-center',
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-1 w-full grow overflow-hidden rounded-full bg-surface">
      <SliderPrimitive.Range className="absolute h-full bg-gradient-to-r from-accent-primary to-accent-secondary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb
      className={cn(
        'block h-4 w-4 rounded-full',
        'bg-gradient-to-br from-accent-primary to-accent-secondary',
        'shadow-[0_2px_8px_var(--color-accent-glow)]',
        'transition-all duration-fast ease-out-back',
        'hover:scale-[1.15] hover:shadow-[0_4px_16px_var(--color-accent-glow)]',
        'focus-visible:outline-none',
        'disabled:pointer-events-none disabled:opacity-50',
        'cursor-grab active:cursor-grabbing active:scale-105'
      )}
    />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
