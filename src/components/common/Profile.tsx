import { useUserStore } from '@/state/user.store'
import { Navbar, Dropdown, Avatar } from 'flowbite-react'
import { FC } from 'react'

interface ProfileProps {

}

const Profile: FC<ProfileProps> = ({ }) => {

    const { logout } = useUserStore()
    const { isAuth } = useUserStore()

    return (
        <div className="flex md:order-2">
            <Dropdown
                arrowIcon={false}
                inline={true}
                label={<Avatar alt='avatar' img="images/placeholder.jpg" rounded={true} />}
            >
                <Dropdown.Header>
                    <span className="block text-sm">
                        {isAuth?.firstName} {isAuth?.lastName}
                    </span>
                    <span className="block truncate text-sm font-medium">
                        {isAuth?.email}
                    </span>
                </Dropdown.Header>

                <Dropdown.Item>
                    Settings
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={logout}>
                    Sign out
                </Dropdown.Item>
            </Dropdown>
            <Navbar.Toggle />
        </div>
    )
}

export default Profile