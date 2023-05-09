import CreateItemGroup from '@/components/items/CreateItemGroup';
import { gql, useQuery } from '@apollo/client';
import { Button } from 'flowbite-react';
import { FC, useState } from 'react'
import { useParams } from 'react-router-dom';

interface ItemListPageProps {

}

const ItemListPage: FC<ItemListPageProps> = ({ }) => {

  const { id } = useParams()
  const [open, setOpen] = useState(false)

  console.log("ID", id)

  const { loading, error, data } = useQuery(GET_CATEGORY, { variables: { id } });

  return (
    <div className='flex-grow mt-16 overflow-auto bg-gray-200 dark:bg-gray-900 relative'>
      {data?.category.itemGroups.map((itemGroup: any) => {
        return (
          <div key={itemGroup.id}>
            <p>{itemGroup.id}</p>
            {itemGroup.items.map((item: any) => {
              return (
                <div>
                  <p>{item.fieldValue}</p>
                </div>
              )
            })}
          </div>
        )
      })}
      <Button onClick={() => setOpen(true)}>Add Item</Button>
      {open ? <CreateItemGroup fields={data?.category.fields} setOpen={setOpen} /> : null}
    </div>
  )
}

export const GET_CATEGORY = gql`
      query GetCategory($id: String!) {
        category(id: $id) {
          id
          name
          type
          itemGroups(populate: true) {
            id
            items(populate: true) {
              id
              fieldValue
            }
          }
          fields(populate: true) {
            id
            fieldName
            fieldType
            defaultValue
          }
        }
      }
    `;

export default ItemListPage