import React from 'react'
import NavLinks from './NavLinks'

const MenuOverlay = ({ links }) => {
    return (
        <ul className='fixed inset-0 z-10 flex flex-col py-4 items-center bg-black opacity-500'>
            {links.map((link, i) => (
                <li key={i}>
                    <NavLinks href={link.path} title={link.title} />
                </li>
            ))}
        </ul>
    )
}

export default MenuOverlay