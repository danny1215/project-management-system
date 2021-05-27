import React from 'react'
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as GiIcons from 'react-icons/gi'

// Data used to map over on the Navbar component. 
export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        className: 'nav-text'
    },
    // {
    //     title: 'View Sprints',
    //     path: '/sprints',
    //     icon: <GiIcons.GiSprint />,
    //     className: 'nav-text'
    // },
    {
        title: 'View & Add Employees',
        path: '/employee',
        icon: <IoIcons.IoMdPeople />,
        className: 'nav-text'
    },
    // {
    //     title: 'Meet the Devs',
    //     path: '/devs',
    //     icon: <GiIcons.GiTeamDowngrade />,
    //     className: 'nav-text'
    // }
]