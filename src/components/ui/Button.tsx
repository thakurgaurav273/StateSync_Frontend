import React from 'react'

const Button = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <button className={`text-white px-3 py-1 rounded-sm ${className}`}>
      {children}
    </button>
  )
}

export default Button
