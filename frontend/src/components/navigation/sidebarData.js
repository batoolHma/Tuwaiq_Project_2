import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
import * as GiIcons from "react-icons/gi"
export const SidebarData=[
   {
       title:'Home',
       path:'/',
       icon:<AiIcons.AiFillHome/>,
       cName:'nav-text'
   } ,
   {
    title:'Permits',
    path:'/',
    icon:<AiIcons.AiOutlineFieldTime/>,
    cName:'nav-text'
} ,
{
    title:'Reports',
    path:'/',
    icon:<IoIcons.IoIosPaper/>,
    cName:'nav-text'
} , 
 {
    title:'Notifications',
    path:'/',
    icon:<IoIcons.IoMdNotificationsOutline/>,
    cName:'nav-text'
} ,
{
    title:'Dashboard',
    path:'/dashboard',
    icon:<MdIcons.MdOutlineDashboard/>,
    cName:'nav-text'
} ,
{
    title:'Organ Donation',
    path:'/',
    icon:<GiIcons.GiHeartOrgan/>,
    cName:'nav-text'
} 
]