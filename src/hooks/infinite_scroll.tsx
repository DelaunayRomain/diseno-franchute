import * as React from 'react'

export const useInfiniteScroll = (fetchData: () => void) => {
  const loadMoreRef = React.useRef<HTMLDivElement | null>(null)

  const handleIntersection = React.useCallback((entries: IntersectionObserverEntry[]) => {
    if (entries[0]?.isIntersecting) {
      fetchData()
    }
  }, [fetchData])

  React.useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px 0px 800px 0px', // trigger before entering viewport
      threshold: 0,
    })

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current)
    }

    return () => observer.disconnect()
  }, [handleIntersection])

  return { loadMoreRef }
}
