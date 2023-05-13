/* eslint-disable no-restricted-globals */
import React from 'react'
import { Outlet } from 'react-router'
import Navbare from './Navbare'
import Footer from './Footer'

export default function Layout() {
    const locations = ["/login", "/register"]

    const haveLayout = () => {
        for (let loc of locations) {
            if (location?.pathname.indexOf(loc) == 0)
                return false
        }
        return true
    }

    return (
        <>
            {haveLayout() ? <Navbare /> : ""}
            <div className="p-10" ><Outlet /></div>
            {/*haveLayout() ? <Footer /> : ""*/}
        </>
    )
}
