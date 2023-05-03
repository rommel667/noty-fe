import { Navbar, Dropdown, Avatar } from 'flowbite-react'
import { FC } from 'react'

interface ProfileProps {

}

const Profile: FC<ProfileProps> = ({ }) => {
    return (
        <div className="flex md:order-2">
            <Dropdown
                arrowIcon={false}
                inline={true}
                label={<Avatar alt='avatar' img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true} />}
            >
                <Dropdown.Header>
                    <span className="block text-sm">
                        Bonnie Green
                    </span>
                    <span className="block truncate text-sm font-medium">
                        name@flowbite.com
                    </span>
                </Dropdown.Header>
                <Dropdown.Item>
                    Dashboard
                </Dropdown.Item>
                <Dropdown.Item>
                    Settings
                </Dropdown.Item>
                <Dropdown.Item>
                    Earnings
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={() => console.log("TEST SIGN OUT")}>
                    Sign out
                </Dropdown.Item>
            </Dropdown>
            <Navbar.Toggle />
        </div>
    )
}

export default Profile