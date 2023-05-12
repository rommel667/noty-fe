import { Outlet } from 'react-router-dom'

const AuthenticationPage = () => {

    return (
        <div className='bg-gray-200 dark:bg-gray-900 flex-grow mt-5 overflow-auto'>
            <Outlet />
        </div>
    )
}

export default AuthenticationPage