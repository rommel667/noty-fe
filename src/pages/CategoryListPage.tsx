import { gql, useQuery } from '@apollo/client';
import CategoryCard from '@/components/categories/CategoryCard';
import SkeletonCards from '@/components/common/SkeletonCards';
import { ICategory } from '@/interfaces/category.interface';
import { toast } from 'react-hot-toast';
import Modal from '@/components/common/Modal';
import { useState } from 'react';
import AddCategoryForm from '@/components/forms/AddCategoryForm';

const CategoryListPage = () => {

    const [showModal, setShowModal] = useState(false)

    const { loading, data } = useQuery(GET_CATEGORIES, {
        onError() {
            toast.error("Something went wrong!")
        },
    });

    if (loading) {
        return (
            <SkeletonCards />
        )
    }


    return (
        <div className='mt-16 bg-gray-200 dark:bg-gray-900 flex-grow overflow-auto'>
            <button className='bg-blue-700 hover:bg-blue-600 px-5 py-2 mt-4 ml-4' onClick={() => setShowModal(true)}>Add Category</button>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 p-4  '>

                {data.categories.map((category: ICategory) => (
                    <CategoryCard key={category.id} category={category} />
                ))}

            </div>
            <Modal isVisible={showModal} onClose={() => setShowModal(false)} >
                <AddCategoryForm onClose={() => setShowModal(false)} />
            </Modal>
        </div>

    )
}

export const GET_CATEGORIES = gql`
      query GetCategories {
        categories {
          id
          name
          type
          createdAt
          updatedAt
        }
      }
    `;

export default CategoryListPage