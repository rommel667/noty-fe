import { FC, useEffect, useState } from 'react'
import { categoryTypes, dataTypes, suggestedFields } from '@/constants/suggestions'
import { useUserStore } from '@/state/user.store'
import { gql, useMutation } from '@apollo/client'
import { Button, Label, Select, TextInput } from 'flowbite-react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';
import { HiTrash } from 'react-icons/hi'
import { IField } from '@/interfaces/field.interface'
import { GET_CATEGORIES } from '@/pages/CategoryListPage'

interface AddCategoryFormProps {
    onClose: () => void;
}

const AddCategoryForm: FC<AddCategoryFormProps> = ({ onClose }) => {
    const [isProcessing, setIsProcessing] = useState(false)
    const [categoryName, setCategoryName] = useState('')
    const [selectedCategoryType, setSelectedCategoryType] = useState('Todo')
    const [fields, setFields] = useState<IField[]>([])
    const { isAuth } = useUserStore()
    const navigate = useNavigate()

    const [addCategory] = useMutation(ADD_CATEGORY, {
        onError() {
            setIsProcessing(false)
        },
        onCompleted() {
            setIsProcessing(false)
            navigate('/')
        },
        refetchQueries: [GET_CATEGORIES, 'GetCategories'],
    })

    useEffect(() => {
        if (selectedCategoryType === 'Custom') {
            setFields([{ fieldName: "", fieldType: "Text" }])
        } else {
            setFields(suggestedFields[selectedCategoryType])
        }
    }, [selectedCategoryType])

    const handleSubmit = (e: any) => {
        e.preventDefault()
        setIsProcessing(true)
        onClose()
        toast.promise(addCategory({ variables: { createCategoryInput: { name: categoryName, type: selectedCategoryType, userId: isAuth?.id, fields } } }),
            {
                loading: 'Saving',
                success: 'Successfully saved',
                error: 'Error saving',
            }, {
            style: {
                minWidth: '250px',
            },
        })
    }


    const handleDeleteField = (index: number) => {
        const newFields = fields?.filter((_: any, i: number) => i !== index)
        setFields([...newFields])
    }

    return (
        <form className="p-5" onSubmit={handleSubmit}>
            <h3 className="text-xl font-medium text-gray-900 dark:text-gray-200">
                Create new category
            </h3>
            <div>
                <div className="mb-1 block">
                    <Label
                        htmlFor="name"
                        value="Category Name"
                    />
                </div>
                <TextInput
                    type='text'
                    key='category'
                    placeholder="Enter category name"
                    required={true}
                    value={categoryName}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCategoryName(e.target.value)}
                />
            </div>
            <div id="select">
                <div className="mb-1 block">
                    <Label
                        htmlFor="categories"
                        value="Select type"
                    />
                </div>
                <Select
                    id="categories"
                    required={true}
                    value={selectedCategoryType}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedCategoryType(e.target.value)}
                >
                    {categoryTypes.map((category: string, index: number) => (
                        <option key={index}>{category}</option>
                    ))}
                </Select>
            </div>
            <div className='flex justify-center gap-1'>
                <div className="w-full text-center">
                    <Label
                        value="Field Name"
                    />
                </div>
                <div className="w-full text-center">
                    <Label
                        value="Field Type"
                    />
                </div>
            </div>

            <div className='flex flex-col gap-2'>
                {fields?.map((field1: IField, index1: number) => {
                    return (
                        <div key={index1} className='flex gap-1 items-center'>
                            <TextInput
                                disabled={selectedCategoryType === 'Custom' ? false : true}
                                id="details"
                                required={true}
                                className='w-full'
                                value={field1.fieldName}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    const tempFields: IField[] = []
                                    fields.map((field2: IField, index2: number) => {
                                        if (index1 === index2) {
                                            tempFields.push({ ...field2, fieldName: e.target.value })
                                        } else {
                                            tempFields.push({ ...field2 })
                                        }
                                        // return <div key={index2}>Test</div>
                                    })
                                    setFields(tempFields)
                                }}
                            />

                            <Select
                                disabled={selectedCategoryType === 'Custom' ? false : true}
                                id="options"
                                required={true}
                                className='w-full'
                                value={field1.fieldType}
                                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                                    const tempFields: IField[] = []
                                    fields.map((field2: IField, index2: number) => {
                                        if (index1 === index2) {
                                            tempFields.push({ ...field2, fieldType: e.target.value })
                                        } else {
                                            tempFields.push({ ...field2 })
                                        }
                                        // return <div key={index2}>Test</div>
                                    })
                                    setFields(tempFields)
                                }}
                            >
                                {dataTypes.map((type: string, index: number) => (
                                    <option key={index}>{type}</option>
                                ))}

                            </Select>
                            <Button
                                disabled={selectedCategoryType === 'Custom' ? false : true}
                                color='failure'
                                className='w-9'
                                onClick={() => handleDeleteField(index1)}>
                                <HiTrash />
                            </Button>

                        </div>
                    )
                })}
            </div>

            {selectedCategoryType === 'Custom' &&
                <Button
                    size="xs"
                    disabled={selectedCategoryType === 'Custom' ? false : true}
                    onClick={() => setFields([...fields, { fieldName: "", fieldType: "" }])}
                    className='w-full mt-2'
                >
                    Add new field
                </Button>}

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

const ADD_CATEGORY = gql`
  mutation AddCategory($createCategoryInput: CreateCategoryInput!) {
    createCategory(createCategoryInput: $createCategoryInput) {
        id
        name
        type
        fields(populate: true) {
            id
            fieldName
            fieldType
        }
    }
  }
`;


export default AddCategoryForm