import { FC } from 'react'
import Header from '../header/Header';
import { useUserStore } from '@/state/user.store';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {

    const { isAuth } = useUserStore()

    return (
        <div>
            {isAuth ? <Header /> : null}
            {children}
        </div>
    )
}

export default Layout