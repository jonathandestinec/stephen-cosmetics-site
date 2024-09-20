import React from 'react'

const CounterBadge = ({ count }: CounterBadgeProps) => {
    return (
        <div className=' w-4 h-4 rounded-full bg-rose-300 absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 flex items-center justify-center'>
            <span className=' text-center font-light text-xs text-white'>
                {count}
            </span>
        </div>
    )
}

export default CounterBadge