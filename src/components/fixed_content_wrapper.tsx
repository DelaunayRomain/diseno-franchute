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
  <div
    className={cn(
      'fixed inset-0 h-full',
      'overflow-y-auto overscroll-contain scroll-smooth no-scrollbar scroll-touch',
      hideContent && '-z-10',
    )}
  >
    <div className='relative w-full max-w-full min-w-0 overflow-hidden'>
      <div className='w-full max-w-full min-w-0'>
        <div className={className}>
          {children}
        </div>
      </div>
    </div>
  </div>
)
