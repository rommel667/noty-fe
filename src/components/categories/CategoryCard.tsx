import { GET_CATEGORIES } from '@/pages/CategoryListPage'
import { gql, useMutation } from '@apollo/client'
import { Badge, Card } from 'flowbite-react'
import moment from 'moment'
import { FC } from 'react'
import { HiTrash } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'

interface CategoryCardProps {
    category: any
}

const CategoryCard: FC<CategoryCardProps> = ({ category }) => {
    const navigate = useNavigate()

    const [deletecategory] = useMutation(DELETE_CATEGORY, {
        refetchQueries: [GET_CATEGORIES, 'GetCategories'],
    })

    return (
        <Card className='border-l-rose-500 border-l-2 relative'>
            <HiTrash
                className='w-10 text-red-700 cursor-pointer absolute top-2 right-0'
                onClick={() => deletecategory({ variables: { id: category.id } })}
            />
            <h5 onClick={() => navigate(`/${category.id}`)} className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white cursor-pointer">
                {category.name}
            </h5>
            <Badge color="info" size='xs' className='w-fit'>
                {category.type}
            </Badge>
            <div className='flex justify-between'>
                <p className='font-extralight text-sm'>Created: {moment(category.createdAt).fromNow()}</p>
                <p className='font-extralight text-sm'>Last update: {moment(category.updatedAt).fromNow()}</p>
            </div>
        </Card>
    )
}

const DELETE_CATEGORY = gql`
  mutation RemoveCategory($id: Int!) {
    removeCategory(id: $id) {
        id
        name
        type
        createdAt
        updatedAt
    }
  }
`;


export default CategoryCard