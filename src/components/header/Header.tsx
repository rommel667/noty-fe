import { FC } from 'react'
import { Navbar, Button } from 'flowbite-react'
import Profile from '../common/Profile'
import Searchbar from '../common/Searchbar'
import { useNavigate } from 'react-router-dom'


interface HeaderProps {

}

const Header: FC<HeaderProps> = ({ }) => {
    const navigate = useNavigate()

    return (
        <Navbar
            fluid={true}
            rounded={true}
        >
            <Navbar.Brand onClick={() => { }}>
                <svg height="48" width="48" xmlns="http://www.w3.org/2000/svg"><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="27" x2="21" y1="42" y2="38"><stop offset="0" stopColor="#95a5a6" /><stop offset="1" stopColor="#eff0f1" /></linearGradient><linearGradient id="b" gradientUnits="userSpaceOnUse" x2="0" y1="38" y2="13"><stop offset="0" stopColor="#f39c12" /><stop offset="1" stopColor="#f5ab35" /></linearGradient><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="12.05" x2="11.415" y1="47.746" y2="42.4" /><linearGradient id="d" gradientUnits="userSpaceOnUse" x1="28" x2="24" y1="38" y2="18"><stop offset="0" stopColor="#f7bb5d" /><stop offset="1" stopColor="#fce3bc" /></linearGradient><linearGradient id="e" gradientUnits="userSpaceOnUse" x1="23" x2="38" y1="17.998" y2="32.998"><stop offset="0" stopColor="#292c2f" /><stop offset="1" stopOpacity="0" /></linearGradient><linearGradient id="f" gradientUnits="userSpaceOnUse" x1="21" x2="23" y1="40" y2="42" /><linearGradient id="g" gradientUnits="userSpaceOnUse" x1="20" x2="24" y1="38" y2="42" /><linearGradient id="h" gradientUnits="userSpaceOnUse" x1="22" x2="24" y1="42" y2="44" /><g strokeLinejoin="bevel" strokeWidth="6.2"><g strokeLinecap="round"><path d="m22 41h4v3h-4z" fill="#4d4d4d" /><g transform="matrix(.8660254 -.5 .5 .8660254 0 0)"><circle cx="8.584" cy="15.644" fill="#258e52" r="5.256" /><circle cx="9.245" cy="50.963" fill="#2980b9" r="3.488" /></g><g transform="matrix(.8660254 .5 -.5 .8660254 0 0)"><circle cx="33.429" cy="-8.612" fill="#1c7865" r="4.256" /><circle cx="31.629" cy="26.758" fill="#c0392b" r="4.01" /></g><g transform="rotate(90)"><circle cx="24" cy="-41.02" fill="#663579" r="4.975" /><circle cx="24" cy="-7" fill="#f67400" r="5" /></g></g><path d="m24 14c-5.523 0-10 4.477-10 10 .002 3.974 2 6.32 4 8.16s1 4.84 2 5.84h8c1-1 0-4 2-5.848s3.995-4.181 4-8.152c0-5.523-4.477-10-10-10" fill="url(#b)" /><path d="m20 38h8l-1 1v3l-1 1h-4l-1-1v-3z" fill="url(#a)" /></g><g fillRule="evenodd"><path d="m22 42 1 1h3v-2z" fill="url(#h)" opacity=".2" /><path d="m25 43 2-1v-3l1-1h-8z" fill="url(#g)" opacity=".2" /><path d="m21 41 1 1 5-1v-2l-6 1z" fill="url(#f)" opacity=".2" /></g><g fill="url(#c)" strokeLinecap="round" strokeLinejoin="bevel" strokeWidth="6.2"><rect height="1" rx=".5" transform="matrix(.96592583 -.25881905 .25881905 .96592583 0 0)" width="8" x="8.44" y="45.8" /><rect height="1" rx=".5" transform="matrix(.96592583 -.25881905 .25881905 .96592583 0 0)" width="8" x="8.96" y="43.87" /></g><g fillRule="evenodd"><path d="m25 18-2 14 5.342 5.342c.398-1.314-.012-3.646 1.658-5.189 1.506-1.391 3.01-3.059 3.66-5.492z" fill="url(#e)" opacity=".2" /><path d="m25 18-5 8h3v6l5-8h-3z" fill="url(#d)" /></g><g strokeLinejoin="bevel" strokeWidth="6.2"><path d="m33.973 23.434c-.149 3.7-2.049 5.942-3.973 7.719-2 1.848-1 4.848-2 5.848h-8c-1-1 0-4-2-5.84-1.922-1.768-3.825-4.02-3.973-7.721-.01.187-.027.371-.027.561.002 3.974 2 6.32 4 8.16s1 4.84 2 5.84h8c1-1 0-4 2-5.848s3.995-4.181 4-8.152c0-.191-.017-.378-.027-.566" fill="#b97c1b" /><g fill="#fcfcfc" strokeLinecap="round"><g transform="matrix(.8660254 -.5 .5 .8660254 0 0)"><circle cx="8.584" cy="15.644" r="3.256" /><circle cx="9.245" cy="50.963" r="1.512" /></g><g transform="matrix(.8660254 .5 -.5 .8660254 0 0)"><circle cx="33.429" cy="-8.612" r="1.744" /><circle cx="31.629" cy="26.758" r="1.988" /></g><g transform="rotate(90)"><circle cx="24" cy="-41.02" r="3" /><circle cx="24" cy="-7" r="1" /></g></g></g></svg>
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    BrainDump
                </span>
            </Navbar.Brand>
            <Navbar.Collapse className='flex flex-1 md:px-10 lg:px-48'>
                {/* <ItemGroupSelector /> */}
                <Searchbar />
            </Navbar.Collapse>

            <div className='flex gap-3'>
                <Button onClick={() => navigate('/new-category')}>
                    Add Category
                </Button>
                {/* {open && <AddCategory open={open} setOpen={setOpen} categoryName={categoryName} setCategoryName={setCategoryName} />} */}
                <Profile />
            </div>


        </Navbar>
    )
}

export default Header