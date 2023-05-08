import { FC } from 'react'
import { useUserStore } from '@/state/user.store';
import Header from '@/components/header/Header';
import { Toaster } from 'react-hot-toast';
import { useSettingStore } from '@/state/setting.store';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {

    const { isAuth } = useUserStore()
    const { mode } = useSettingStore()

    return (
        <div className={`${mode} h-full`}>
            <div className='h-full flex flex-col bg-gray-100 dark:bg-gray-900'>
                {isAuth ? <Header /> : null}
                {children}
            </div>
            <Toaster />
        </div>
    )
}

export default Layout