import { FC } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

interface AuthenticationProps {

}

const Authentication: FC<AuthenticationProps> = ({ }) => {

    const location = useLocation()

    return (
        <div className='md:w-3/4 lg:w-1/2 xl:w-1/3 mx-auto border rounded-md shadow-md p-5 mt-10'>
            <p className='font-semibold text-center py-2'>{location.pathname.split('/')[2].toUpperCase()}</p>
            <Outlet />
        </div>
    )
}

export default Authentication