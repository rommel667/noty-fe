import { gql, useQuery } from '@apollo/client';
import CategoryCard from '@/components/categories/CategoryCard';
import SkeletonCards from '@/components/common/SkeletonCards';
import { ICategory } from '@/interfaces/category.interface';

const CategoryListPage = () => {
    const { loading, error, data } = useQuery(GET_CATEGORIES);

    if (loading) {
        return (
            <SkeletonCards />
        )
    }
    if (error) {
        return <div>{`Error! ${error.message}`}</div>
    }

    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 p-4 flex-grow mt-16 overflow-auto bg-gray-200 dark:bg-gray-900'>
            {data.categories.map((category: ICategory) => (
                <CategoryCard key={category.id} category={category} />
            ))}
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