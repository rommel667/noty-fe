import { gql, useQuery } from '@apollo/client';
import CategoryCard from '@/components/categories/CategoryCard';

const CategoryListPage = () => {
    const { loading, error, data } = useQuery(GET_CATEGORIES);

    if (loading) {
        console.log("Loading")
        return <div>Loading</div>
    }
    if (error) {
        return <div>{`Error! ${error.message}`}</div>
    }

    return (

        <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 p-4'>
            {data.categories.map((category: any) => (
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