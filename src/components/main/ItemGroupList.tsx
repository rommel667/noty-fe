
import { useQuery, gql } from '@apollo/client';
import ItemGroupCard from './ItemGroupCard';
// import ItemGroupCard from './ItemGroupCard';


const ItemGroupList = () => {

    const { loading, error, data } = useQuery(GET_ITEM_GROUPS);

    if (loading) {
        console.log("Loading")
        return <div>Loading</div>
    }
    if (error) {
        return <div>{`Error! ${error.message}`}</div>
    }
    console.log("DATA", data)

    return (

        <div>
            {data.itemGroups.map((item: any) => (
                <ItemGroupCard key={item.id} item={item} />
            ))}
        </div>
    )
}

const GET_ITEM_GROUPS = gql`
      query GetItemGroups {
        itemGroups {
          id
          name
          type
        }
      }
    `;

export default ItemGroupList