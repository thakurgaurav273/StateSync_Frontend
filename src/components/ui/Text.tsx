import { SIZES } from '@/lib/constants';
import React from 'react'

const Text = ({ children, className, size, ...props }: { children: React.ReactNode; className?: string, size?: string, [key: string]: any }) => {
    const textSize = SIZES.TEXT_SIZE[size as keyof typeof SIZES.TEXT_SIZE] || SIZES.TEXT_SIZE.base;
    return (
        <div className={`${textSize} ${className || ""}`} {...props}>
            {children}
        </div>
    )
}

export default Text;
