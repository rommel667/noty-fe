import { IField } from '@/interfaces/field.interface'
import { IItem } from '@/interfaces/item.interface';
import { GET_CATEGORY } from '@/pages/ItemListPage';
import { gql, useMutation } from '@apollo/client';
import { Button, Label, TextInput } from 'flowbite-react'
import { FC, useState } from 'react'
import { toast } from 'react-hot-toast';
import { useParams } from 'react-router-dom';

interface CreateItemGroupProps {
    fields: IField[];
    setOpen: (value: boolean) => void;
}

const CreateItemGroup: FC<CreateItemGroupProps> = ({ fields, setOpen }) => {

    const [items, setItems] = useState<IItem[]>([...fields.map((field, index) => {
        return { fieldId: `${field.id}`, fieldValue: '' }
    })])
    const [isProcessing, setIsProcessing] = useState<boolean>(false)
    const { id } = useParams()

    const [addItemGroup] = useMutation(ADD_ITEM_GROUP, {
        onCompleted() {
            setIsProcessing(false)
            toast.dismiss('processing')
            toast.success("SUCCESS")

            setOpen(false)
        },
        onError() {
            setIsProcessing(false)
            toast.dismiss('processing')
            toast.error("ERROR")

        },
        refetchQueries: [GET_CATEGORY, 'GetCategory'],
    })

    const handleSubmit = (e: any) => {
        e.preventDefault()
        setIsProcessing(true)
        toast('Processing', { id: "processing" })
        addItemGroup({ variables: { createItemGroupInput: { categoryId: id && +id, items: [...items.map((item) => ({ ...item, fieldId: +item.fieldId }))] } } })
    }

    const handleChangeItem = (e: React.ChangeEvent<HTMLInputElement>) => {
        setItems(items.map((item) => {
            console.log("ITEMS", item)
            if (item.fieldId === e.target.name) {
                return { ...item, fieldValue: e.target.value }
            } else {
                return { ...item }
            }
        }))
    }

    return (
        <div className='z-20 absolute w-fit top-0 bottom-0 left-0 right-0 m-auto'>
            <form className="dark:bg-gray-800 flex flex-col gap-2 h-fit mx-auto border rounded-md shadow-md p-5 mt-10" onSubmit={handleSubmit}>
                <h3 className="text-xl font-medium text-gray-900 dark:text-gray-200">
                    Create new item
                </h3>
                <div>

                    {fields.map((field) => {
                        return (
                            <div key={field.id}>
                                <div className="mb-1 block">
                                    <Label
                                        htmlFor="name"
                                        value={field.fieldName}
                                    />
                                </div>
                                <TextInput
                                    type='text'
                                    key='category'
                                    name={`${field.id}`}
                                    // placeholder="Enter category name"
                                    required={true}
                                    value={items.find((item: IItem, index: number) => item.fieldId === `${field.id}`)?.fieldValue}
                                    onChange={handleChangeItem}
                                />
                            </div>
                        )
                    })}

                </div>

                <div className="flex justify-between gap-4 mt-4">
                    <Button
                        isProcessing={isProcessing}
                        disabled={isProcessing}
                        color="success"
                        type='submit'
                        className='w-full'
                    >
                        Confirm
                    </Button>
                    <Button
                        color="gray"
                        onClick={() => setOpen(false)}
                        className='w-full'
                        disabled={isProcessing}
                    >
                        Cancel
                    </Button>
                </div>
            </form>
        </div>
    )
}

const ADD_ITEM_GROUP = gql`
  mutation CreateItemGroup($createItemGroupInput: CreateItemGroupInput!) {
    createItemGroup(createItemGroupInput: $createItemGroupInput) {
        id
        items(populate: true) {
            id
            fieldValue
        }
    }
  }
`;

export default CreateItemGroup