
import { ChatBubbleLeftRightIcon, HomeIcon, ListBulletIcon, MapPinIcon, UserIcon, UserPlusIcon } from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
    return (

        <div className="sidebar pt-[4rem] lg:fixed w-full lg:w-[250px] flex flex-row lg:flex-col lg:flex-nowrap flex-wrap overflow-auto h-full shadow bg-gray-800 text-white">

            <NavLink to="/admin/" className="flex flex-row gap-4 p-4 no-underline">
                <HomeIcon className="block h-6 w-6 flex-start" aria-hidden="true" />
                <span className='flex-end'>Home</span>
            </NavLink>

            <NavLink to="/admin/profile" className="flex flex-row gap-4 p-4 no-underline">
                <UserIcon className="block h-6 w-6 flex-start" aria-hidden="true" />
                <span>Profile</span>
            </NavLink>

            <NavLink to="/admin/types" className="flex flex-row gap-4 p-4 no-underline">
                <UserPlusIcon className="block h-6 w-6 flex-start" aria-hidden="true" />
                <span>Types</span>
            </NavLink>

            <NavLink to="/admin/skills" className="flex flex-row gap-4 p-4 no-underline">
                <ListBulletIcon className="block h-6 w-6 flex-start" aria-hidden="true" />
                <span>Skills</span>
            </NavLink>


            <NavLink to="/admin/experiences" className="flex flex-row gap-4 p-4 no-underline">
                <MapPinIcon className="block h-6 w-6 flex-start" aria-hidden="true" />
                <span>Experience</span>
            </NavLink>

            <NavLink to="/admin/work" className="flex flex-row gap-4 p-4 no-underline">
                <ChatBubbleLeftRightIcon className="block h-6 w-6 flex-start" aria-hidden="true" />
                <span>Work</span>
            </NavLink>

            <NavLink to="/admin/about" className="flex flex-row gap-4 p-4 no-underline">
                <ChatBubbleLeftRightIcon className="block h-6 w-6 flex-start" aria-hidden="true" />
                <span>About</span>
            </NavLink>


        </div>

    )
}
