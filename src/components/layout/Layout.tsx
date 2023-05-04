import { FC } from 'react'
import Header from '../header/Header';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}

export default Layout