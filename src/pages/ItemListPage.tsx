import Modal from '@/components/common/Modal';
import CreateItemGroupForm from '@/components/forms/CreateItemGroupForm';
import Todo from '@/components/items/Todo';
import { gql, useQuery } from '@apollo/client';
import { Button } from 'flowbite-react';
import { FC, useState } from 'react'
import { useParams } from 'react-router-dom';

interface ItemListPageProps {

}

const ItemListPage: FC<ItemListPageProps> = ({ }) => {

  const { id } = useParams()
  const [showModal, setShowModal] = useState(false)

  const { data } = useQuery(GET_CATEGORY, { variables: { id } });


  return (
    <div className='flex-grow mt-16 overflow-auto bg-gray-200 dark:bg-gray-900 p-5 relative'>
      <Button onClick={() => setShowModal(true)}>Add Item</Button>
      {data && <Todo itemGroups={data?.category?.itemGroups} />}
      <Modal isVisible={showModal} onClose={() => setShowModal(false)} >
        <CreateItemGroupForm onClose={() => setShowModal(false)} fields={data?.category.fields} />
      </Modal>
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
              fieldName
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

