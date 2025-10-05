import { cn } from '../utils/tailwind'

type FixedContentWrapperProps = {
  children: React.ReactNode
  hideContent: boolean
  className?: string
}

export const FixedContentWrapper = ({
  children,
  hideContent,
  className,
}: FixedContentWrapperProps) => (
  <div className={cn('fixed inset-0', hideContent && '-z-10')}>
    <div className='h-full overflow-y-auto overscroll-contain scroll-smooth no-scrollbar'>
      <div className={className}>
        {children}
      </div>
    </div>
  </div>
)
