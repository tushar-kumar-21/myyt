import React from 'react'

const ErrorComp = ({ msg } : { msg: string }) => {
    return (
        <span className='text-red-700 text-base'>{msg}</span>
    )
}

export default ErrorComp