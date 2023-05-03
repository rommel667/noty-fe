import { FC } from 'react'
import { Card } from 'flowbite-react'

interface ItemGroupCardProps {
    item: any;
}

const ItemGroupCard: FC<ItemGroupCardProps> = ({ item }) => {
    return (
        <Card href="#">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item.name}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                {item.type}
            </p>
        </Card>
    )
}

export default ItemGroupCard