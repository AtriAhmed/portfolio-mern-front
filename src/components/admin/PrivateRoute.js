import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import API from '../../utils/API'

export default function PrivateRoute({ component: Component }) {
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        async function getStatus() {
            try {
                const res = await API.getLoginStatus()
                if (res.data.user.type == "visitor") {
                    navigate("/login")
                }
                setLoading(false)
            } catch (err) {
                console.log(err)
            }
        }

        getStatus()

    }, [])

    if (loading) {
        return (<div>loading</div>)
    }

    return (
        <Component />
    )

}