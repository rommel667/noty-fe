import { Badge, Card } from 'flowbite-react'
import moment from 'moment'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

interface CategoryCardProps {
    category: any
}

const CategoryCard: FC<CategoryCardProps> = ({ category }) => {
    const navigate = useNavigate()
    return (
        <Card onClick={() => navigate(`/${category.id}`)} className='border-l-rose-500 border-l-2'>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {category.name}
            </h5>


            {/* <p className="font-normal text-gray-700 dark:text-gray-400">
                Type: {category.type}
            </p> */}
            <Badge color="info" size='xs' className='w-fit'>
                {category.type}
            </Badge>
            <div className='flex justify-between'>
                <p className='font-extralight text-sm'>Created: {moment(category.createdAt).startOf('day').fromNow()}</p>
                <p className='font-extralight text-sm'>Last update: {moment(category.updatedAt).startOf('day').fromNow()}</p>
            </div>
        </Card>
    )
}

export default CategoryCard