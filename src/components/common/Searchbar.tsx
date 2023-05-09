import { Button, Dropdown, TextInput } from 'flowbite-react'
import { FC, useState } from 'react'
import { HiSearch } from 'react-icons/hi'

const categories = ["All", "Todos", "Images", "Passwords", "Codes"]

interface SearchbarProps {

}

const Searchbar: FC<SearchbarProps> = ({ }) => {

    const [selectedCategory, setSelectedCategory] = useState("All")

    return (
        <form className="flex w-full">
            <Dropdown
                label={selectedCategory}
                dismissOnClick={true}
                className='max-w-5xl'
                style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
            // value={"TEST"}
            >
                {categories.map((category) => {
                    return (
                        <Dropdown.Item key={category} onClick={() => setSelectedCategory(category)}>
                            {category}
                        </Dropdown.Item>
                    )
                })}
            </Dropdown>
            <TextInput
                id="email1"
                type="text"
                placeholder="Search..."
                required={true}
                className='w-full'
                style={{ borderRadius: 0 }}
            />
            <Button className='rounded-l-none'>
                <HiSearch className="h-5 w-5" />
            </Button>


        </form>

    )
}

export default Searchbar