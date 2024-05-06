import React from 'react'

const ScrollContainer = ({
    children,
}: {
    children: React.ReactNode
}) => {
  return (
    <div className='w-full overflow-y-scroll max-h-[calc(100vh-70px)] scroller'>
        {children}
    </div>
  )
}

export default ScrollContainer;