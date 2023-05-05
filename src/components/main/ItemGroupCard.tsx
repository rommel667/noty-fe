import { FC } from 'react'
import { Card } from 'flowbite-react'
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

interface ItemGroupCardProps {
    item: any;
}

const ItemGroupCard: FC<ItemGroupCardProps> = ({ item }) => {
    const navigate = useNavigate()
    return (
        <Card onClick={() => navigate(`/${item.id}`)}>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item.name}
            </h5>

            <p className="font-normal text-gray-700 dark:text-gray-400">
                Type: {item.type}
            </p>
            <div className='flex justify-between'>
                <p className='font-extralight text-sm'>Created: {moment(item.createdAt).startOf('day').fromNow()}</p>
                <p className='font-extralight text-sm'>Last update: {moment(item.updatedAt).startOf('day').fromNow()}</p>
            </div>
        </Card>
    )
}

export default ItemGroupCard