import { Button, Modal } from 'flowbite-react'
import { FC } from 'react'
import { HiOutlineExclamationCircle } from 'react-icons/hi'

interface DeleteConfirmationProps {
    open: boolean;
    setOpen: (value: boolean) => void;
    handleConfirm: () => void;
    isProcessing: boolean;
}

const DeleteConfirmation: FC<DeleteConfirmationProps> = ({ open, setOpen, handleConfirm, isProcessing }) => {
    return (
        <Modal
            show={open}
            size="md"
            popup={true}
            onClose={() => setOpen(false)}
            className='dark:bg-gray-800'
        >
            <Modal.Header />
            <Modal.Body>
                <div className="text-center dark:bg-gray-800">
                    <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                    <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                        Are you sure you want to delete this category?
                    </h3>
                    <div className="flex justify-center gap-4">
                        <Button
                            color="failure"
                            onClick={handleConfirm}
                            disabled={isProcessing}
                        >
                            Yes, I'm sure
                        </Button>
                        <Button
                            color="gray"
                            onClick={() => setOpen(false)}
                            disabled={isProcessing}
                        >
                            No, cancel
                        </Button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default DeleteConfirmation