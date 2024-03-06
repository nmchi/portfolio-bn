import React from 'react'

const Tab = ({ active, selectTab, children }) => {
    const buttonClasses = active ? 'text-white border-b border-purple-500' : 'text-[#adb7be]';

    return (
        <span onClick={selectTab}>
            <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
                {children}
            </p>
        </span>
    )
}

export default Tab