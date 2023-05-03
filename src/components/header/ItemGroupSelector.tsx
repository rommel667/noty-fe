import { FC, useState, useRef } from 'react'
import { Tabs, Button, TabsRef } from 'flowbite-react'

interface ItemGroupProps {

}

const ItemGroupSelector: FC<ItemGroupProps> = ({ }) => {
    const [activeTab, setActiveTab] = useState<number>(0);
    const tabsRef = useRef<TabsRef>(null);

    return (
        <>
            {/* <Tabs.Group
                aria-label="Default tabs"
                style="default"
                ref={tabsRef}
                onActiveTabChange={tab => setActiveTab(tab)}
            >
                <Tabs.Item active title="Profile">
                    Profile content
                </Tabs.Item>
                <Tabs.Item title="Dashboard">Dashboard content</Tabs.Item>
                <Tabs.Item title="Settings">Settings content</Tabs.Item>
                <Tabs.Item title="Contacts">Contacts content</Tabs.Item>
            </Tabs.Group>
            <div>Active tab: {activeTab}</div> */}
            <Button.Group>
                <Button color="gray" onClick={() => tabsRef.current?.setActiveTab(0)}>
                    Profile
                </Button>
                <Button color="gray" onClick={() => tabsRef.current?.setActiveTab(1)}>
                    Dashboard
                </Button>
                <Button color="gray" onClick={() => tabsRef.current?.setActiveTab(2)}>
                    Settings
                </Button>
                <Button color="gray" onClick={() => tabsRef.current?.setActiveTab(3)}>
                    Contacts
                </Button>
            </Button.Group>
        </>
    )
}

export default ItemGroupSelector