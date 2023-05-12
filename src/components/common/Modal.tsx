import { FC } from 'react'

import { AiOutlineClose, } from 'react-icons/ai'

interface ModalProps {
    isVisible: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ isVisible, onClose, children }) => {

    const handleClose = (e: any) => {
        if (e.target.id === 'wrapper') onClose()
    }

    if (!isVisible) return null;

    return (
        <div
            onClick={handleClose}
            id='wrapper'
            className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-10'
        >
            <div className='w-[600px] flex flex-col rounded-md shadow-md dark:bg-gray-800'>

                <div className='bg-white dark:bg-gray-800 p-2 rounded'>
                    <div className='flex justify-end'>
                        <AiOutlineClose onClick={onClose} className='text-gray-700 dark:text-gray-300 text-xl place-self-end cursor-pointer' />
                    </div>

                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal