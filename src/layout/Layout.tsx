import { FC } from 'react'
import { useUserStore } from '@/state/user.store';
import Header from '@/components/header/Header';

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