import { Button, Label, Modal, Select, TextInput } from 'flowbite-react'
import { FC, useEffect, useState } from 'react'

import { gql, useMutation } from '@apollo/client'
import { useUserStore } from '@/state/user.store'
import { suggestedFields } from '@/constants/suggestions';

//##########################################################################################
//##########   COMPONENT DISCONTINUED DUE TO ISSUE ON TEXTINPUT ONCHANGE  ##################
//##########################################################################################

interface AddCategoryProps {
    open: boolean;
    setOpen: (value: boolean) => void;
}

const AddCategory: FC<AddCategoryProps> = ({ open, setOpen }) => {
    const [isProcessing, setIsProcessing] = useState(false)
    const [categoryName, setCategoryName] = useState('')
    const [selectedCategoryType, setSelectedCategoryType] = useState('Todo')
    const [fields, setFields] = useState<any>(null)
    const { isAuth } = useUserStore()

    const [addCategory] = useMutation(ADD_CATEGORY, {
        onError(error) {
            console.log("ERROR", error)
        },
        onCompleted(data) {
            console.log("DATA", data)
            setIsProcessing(false)
        },
    })

    useEffect(() => {
        const result = suggestedFields[selectedCategoryType]
        setFields(result)
    }, [selectedCategoryType])

    const handleSubmit = () => {
        setIsProcessing(true)
        addCategory({ variables: { createCategoryInput: { name: categoryName, type: selectedCategoryType, userId: isAuth?.id, fields } } })
    }

    return (

        <Modal
            show={open}
            size="md"
            popup={true}
            onClose={() => setOpen(false)}
        >
            <Modal.Header />
            <Modal.Body>
                <form className="flex flex-col gap-2">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">
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
                            // placeholder="Enter category name"
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
                            id="countries"
                            required={true}
                            value={selectedCategoryType}
                            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedCategoryType(e.target.value)}
                        >
                            <option>
                                Todo
                            </option>
                            <option>
                                Password
                            </option>
                            <option>
                                Bookmark
                            </option>
                            <option>
                                Image
                            </option>
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
                    {fields?.map((field1: any, index1: number) => {
                        return (
                            <div className='flex gap-1'><TextInput
                                id="details"
                                required={true}
                                className='w-full'
                                value={field1.fieldName}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    const tempFields: any = []
                                    fields.map((field2: any, index2: number) => {
                                        if (index1 === index2) {
                                            tempFields.push({ ...field2, fieldName: e.target.value })
                                        } else {
                                            tempFields.push({ ...field2 })
                                        }
                                        return <div key={index2}>Test</div>
                                    })
                                    setFields(tempFields)
                                }}
                                key={index1}
                            />

                                <Select
                                    id="countries"
                                    required={true}
                                    className='w-full'
                                    value={field1.fieldType}
                                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {

                                    }}
                                >
                                    <option>
                                        Text
                                    </option>
                                    <option>
                                        Long Text
                                    </option>
                                    <option>
                                        Image
                                    </option>
                                    <option>
                                        Password
                                    </option>
                                    <option>
                                        Date
                                    </option>
                                </Select>
                            </div>
                        )
                    })}

                    <Button
                        size="xs"
                        onClick={() => setFields([...fields, { fieldName: "", fieldType: "" }])}
                        className='w-full'
                    >
                        Add new field
                    </Button>


                    <div className="flex justify-between gap-4 mt-4">
                        <Button
                            isProcessing={isProcessing}
                            disabled={isProcessing}
                            color="success"
                            onClick={handleSubmit}
                            className='w-full'
                        >
                            Confirm
                        </Button>
                        <Button
                            color="gray"
                            onClick={() => setOpen(false)}
                            className='w-full'
                        >
                            Cancel
                        </Button>
                    </div>

                </form>
            </Modal.Body>
        </Modal>

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

export default AddCategory