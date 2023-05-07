import { FC } from 'react'
import { useUserStore } from '@/state/user.store';
import Header from '@/components/header/Header';
import { Toaster } from 'react-hot-toast';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {

    const { isAuth } = useUserStore()

    return (
        <div className='md:px-10 xl:px-28'>
            {isAuth ? <Header /> : null}
            {children}
            <Toaster />
        </div>
    )
}

export default Layout