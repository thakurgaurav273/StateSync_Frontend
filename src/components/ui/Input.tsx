import React from 'react'

const Input = ({prefix, suffix, className, ...props}: {prefix?: React.ReactNode; suffix?: React.ReactNode; className?: string, [key: string]: any}) => {
  return (
    <div className={`flex items-center ${className} border-b border-[var(--text-muted)]`}>
      {prefix && <span className="px-2">{prefix}</span>}
      <input
        {...props}
        type="text"
        className="flex-1 h-[30px] outline-none bg-bg-secondary text-text-primary rounded-md px-2"
      />
      {suffix && <span className="px-2">{suffix}</span>}
    </div>
  )
}

export default Input
