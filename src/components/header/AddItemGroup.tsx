import { Button, Label, Modal, Select, TextInput } from 'flowbite-react'
import { FC, useState } from 'react'

interface AddItemGroupProps {

}

const AddItemGroup: FC<AddItemGroupProps> = ({ }) => {

    const [open, setOpen] = useState(false)
    const [isProcessing, setIsProcessing] = useState(false)

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
                        <div className='flex gap-1'>

                            <TextInput
                                id="details"
                                placeholder="name@company.com"
                                required={true}
                                className='w-full'
                            />

                            <Select
                                id="countries"
                                required={true}
                                className='w-full'
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
                        <Button
                            size="xs"
                            onClick={() => setOpen(false)}
                            className='w-full'
                        >
                            Add new field
                        </Button>


                        <div className="flex justify-between gap-4 mt-4">
                            <Button
                                isProcessing={isProcessing}
                                disabled={isProcessing}
                                color="success"
                                onClick={() => setIsProcessing(true)}
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

export default AddItemGroup