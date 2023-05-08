import { Outlet, useLocation } from 'react-router-dom'

const AuthenticationPage = () => {
    const location = useLocation()

    return (
        <div className='bg-gray-200 dark:bg-gray-900 flex-grow mt-10'>
            <p className='font-semibold text-center py-2'>{location.pathname.split('/')[2].toUpperCase()}</p>
            <Outlet />
        </div>
    )
}

export default AuthenticationPage