import { Button } from 'flowbite-react'


//##########################################################################################
//###################   WILL BE REVISED AS AN ICONS BELOW HEADER  ##########################
//##########################################################################################


const CategorySelector = () => {
    // const [activeTab, setActiveTab] = useState<number>(0);
    // const tabsRef = useRef<TabsRef>(null);

    return (
        <>
            <Button.Group>
                <Button color="gray">
                    Profile
                </Button>
                {/* <Button color="gray" onClick={() => tabsRef.current?.setActiveTab(1)}>
                    Dashboard
                </Button>
                <Button color="gray" onClick={() => tabsRef.current?.setActiveTab(2)}>
                    Settings
                </Button>
                <Button color="gray" onClick={() => tabsRef.current?.setActiveTab(3)}>
                    Contacts
                </Button> */}
            </Button.Group>
        </>
    )
}

export default CategorySelector