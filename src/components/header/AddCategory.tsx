import { Button, Label, Modal, Select, TextInput } from 'flowbite-react'
import { FC, useEffect, useState } from 'react'
import { suggestedFields } from '../main/suggestions'
import { gql, useMutation } from '@apollo/client'
import { useUserStore } from '@/state/user.store'

interface AddCategoryProps {

}

const AddCategory: FC<AddCategoryProps> = ({ }) => {

    const [open, setOpen] = useState(false)
    const [isProcessing, setIsProcessing] = useState(false)
    const [categoryName, setCategoryName] = useState('')
    const [selectedCategoryType, setSelectedCategoryType] = useState('')
    const [fields, setFields] = useState<any>(null)
    const { isAuth } = useUserStore()

    const [addCategory] = useMutation(ADD_CATEGORY, {
        onError(error, clientOptions) {
            console.log("ERROR", error)
        },
        onCompleted(data, clientOptions) {
            console.log("DATA", data)
            setIsProcessing(false)
        },
    })

    useEffect(() => {
        const result = suggestedFields[selectedCategoryType]
        console.log("RESULT", result)
        setFields(result)
    }, [selectedCategoryType])

    const handleSubmit = () => {
        setIsProcessing(true)
        addCategory({ variables: { createCategoryInput: { name: categoryName, type: selectedCategoryType, userId: isAuth?.id, fields } } })
    }

    return (
        <>
            <Button onClick={() => setOpen(true)}>
                Add Category
            </Button>
            <Modal
                show={open}
                size="md"
                popup={true}
                onClose={() => setOpen(false)}
            >
                <Modal.Header />
                <Modal.Body>
                    <div className="flex flex-col gap-2">
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
                                id="name"
                                type='text'
                                placeholder="Enter category name"
                                required={true}
                                value={categoryName}
                                onChange={(e) => setCategoryName(e.target.value)}
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
                        {fields?.map((field: any) => {
                            return (
                                <div className='flex gap-1'><TextInput
                                    id="details"
                                    // placeholder="name@company.com"
                                    required={true}
                                    className='w-full'
                                    value={field.fieldName}
                                />

                                    <Select
                                        id="countries"
                                        required={true}
                                        className='w-full'
                                        value={field.fieldType}
                                        onChange={() => { }}
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

                    </div>
                </Modal.Body>
            </Modal>
        </>
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