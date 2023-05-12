import { IField } from '@/interfaces/field.interface'
import { IItem } from '@/interfaces/item.interface';
import { GET_CATEGORY } from '@/pages/ItemListPage';
import { gql, useMutation } from '@apollo/client';
import { Button, Label, TextInput } from 'flowbite-react'
import { FC, useState, useEffect } from 'react'
import { toast } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import DatePicker from '../common/DatePicker';

interface CreateItemGroupFormProps {
    fields: IField[];
    onClose: () => void;
}

const CreateItemGroupForm: FC<CreateItemGroupFormProps> = ({ fields, onClose }) => {

    const [items, setItems] = useState<IItem[]>([...fields.map((field, index) => {
        return { fieldId: `${field.id}`, fieldValue: field.fieldName === 'Date' ? new Date().toLocaleDateString() : '', fieldName: field.fieldName }
    })])
    const [isProcessing, setIsProcessing] = useState<boolean>(false)
    const { id } = useParams()

    const [addItemGroup] = useMutation(ADD_ITEM_GROUP, {
        onCompleted() {
            setIsProcessing(false)
            toast.dismiss('processing')
            toast.success("SUCCESS")
            onClose()
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
            if (item.fieldId === e.target.name) {
                return { ...item, fieldValue: e.target.value }
            } else {
                return { ...item }
            }
        }))
    }

    const handleChangeDate = (selectedDate: Date) => {
        setItems(items.map((item) => {
            if (item.fieldName === 'Date') {
                return { ...item, fieldValue: selectedDate.toLocaleDateString() }
            } else {
                return { ...item }
            }
        }))
    }

    useEffect(() => {
        console.log("ITEMS", items)
    }, [items])

    return (

        <form className="p-5" onSubmit={handleSubmit}>
            <h3 className="text-xl font-medium text-gray-900 dark:text-gray-200 mb-5">
                Create new item
            </h3>
            <div className='flex flex-col gap-3'>
                {fields.filter((field) => field.fieldName !== "Completed").map((field) => {
                    if (field.fieldType === "Date") {
                        return (
                            <div key={field.id}>
                                <div className="mb-1 block">
                                    <Label
                                        htmlFor="name"
                                        value={field.fieldName}
                                    />
                                </div>
                                <DatePicker onChange={handleChangeDate} selectedDate={items.find((item: IItem, index: number) => item.fieldName === 'Date')?.fieldValue} />
                            </div>
                        )
                    }
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
                    onClick={onClose}
                    className='w-full'
                    disabled={isProcessing}
                >
                    Cancel
                </Button>
            </div>
        </form>

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

export default CreateItemGroupForm