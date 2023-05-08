import { GET_CATEGORIES } from '@/pages/CategoryListPage'
import { gql, useMutation } from '@apollo/client'
import { Badge, Card } from 'flowbite-react'
import moment from 'moment'
import { FC, useState } from 'react'
import { HiClock, HiTrash } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import DeleteConfirmation from './DeleteConfirmation'
import toast from 'react-hot-toast'

interface CategoryCardProps {
    category: any
}

const CategoryCard: FC<CategoryCardProps> = ({ category }) => {
    const navigate = useNavigate()

    const [open, setOpen] = useState(false)
    const [isProcessing, setIsProcessing] = useState(false)

    const [deletecategory] = useMutation(DELETE_CATEGORY, {
        refetchQueries: [GET_CATEGORIES, 'GetCategories'],
        onError() {
            setIsProcessing(false)
        },
        onCompleted() {
            setIsProcessing(false)
        },
    })

    const handleDeleteCategory = (id: number) => {
        setIsProcessing(true)
        toast.promise(deletecategory({ variables: { id } }),
            {
                loading: 'Deleting category',
                success: 'Deleted category',
                error: 'Error deleting category',
            }, {
            style: {
                minWidth: '250px',
            },
        })
    }

    return (
        <Card className='border-l-blue-600 border-l-2 relative h-fit dark:border-l-blue-400'>
            <HiTrash
                className='w-10 text-red-700 cursor-pointer absolute top-2 right-0'
                onClick={() => setOpen(true)}
            />
            <h4 onClick={() => navigate(`/${category.id}`)} className="text-2xl font-bold tracking-tight text-gray-800 dark:text-white cursor-pointer">
                {category.name}
            </h4>
            <Badge color="info" size='sm' className='w-fit rounded-full px-5 py-1'>
                {category.type}
            </Badge>
            <div className='flex flex-col gap-2'>
                <Badge
                    color="gray"
                    icon={HiClock}
                    size='xs'
                    className='w-fit'
                >
                    <p className='text-xs text-gray-500'>Created {moment(category.createdAt).fromNow()}</p>
                </Badge>
                <Badge
                    color="gray"
                    icon={HiClock}
                    size='xs'
                    className='w-fit'
                >
                    <p className='text-xs text-gray-500'>Updated {moment(category.updatedAt).fromNow()}</p>
                </Badge>
            </div>
            <DeleteConfirmation open={open} setOpen={setOpen} handleConfirm={() => handleDeleteCategory(category.id)} isProcessing={isProcessing} />
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