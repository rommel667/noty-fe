import { FC } from 'react'

interface SkeletonCardsProps {

}

const SkeletonCards: FC<SkeletonCardsProps> = ({ }) => {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 p-4 animate-pulse">
            <div className="flex flex-col justify-between px-4 py-8 w-full h-40 bg-gray-300 dark:bg-gray-700">
                <div className="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
                <div className="h-4 w-1/3 bg-gray-200 rounded-full dark:bg-gray-700 mb-4"></div>
                <div className='flex justify-between gap-3'>
                    <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                    <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                </div>
            </div>
            <div className="flex flex-col justify-between px-4 py-8 w-full h-40 bg-gray-300 dark:bg-gray-700">
                <div className="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
                <div className="h-4 w-1/3 bg-gray-200 rounded-full dark:bg-gray-700 mb-4"></div>
                <div className='flex justify-between gap-3'>
                    <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                    <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                </div>
            </div>
            <div className="flex flex-col justify-between px-4 py-8 w-full h-40 bg-gray-300 dark:bg-gray-700">
                <div className="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
                <div className="h-4 w-1/3 bg-gray-200 rounded-full dark:bg-gray-700 mb-4"></div>
                <div className='flex justify-between gap-3'>
                    <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                    <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                </div>
            </div>
            <div className="flex flex-col justify-between px-4 py-8 w-full h-40 bg-gray-300 dark:bg-gray-700">
                <div className="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
                <div className="h-4 w-1/3 bg-gray-200 rounded-full dark:bg-gray-700 mb-4"></div>
                <div className='flex justify-between gap-3'>
                    <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                    <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                </div>
            </div>
            <div className="flex flex-col justify-between px-4 py-8 w-full h-40 bg-gray-300 dark:bg-gray-700">
                <div className="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
                <div className="h-4 w-1/3 bg-gray-200 rounded-full dark:bg-gray-700 mb-4"></div>
                <div className='flex justify-between gap-3'>
                    <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                    <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                </div>
            </div>
            <div className="flex flex-col justify-between px-4 py-8 w-full h-40 bg-gray-300 dark:bg-gray-700">
                <div className="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
                <div className="h-4 w-1/3 bg-gray-200 rounded-full dark:bg-gray-700 mb-4"></div>
                <div className='flex justify-between gap-3'>
                    <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                    <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                </div>
            </div>
            <div className="flex flex-col justify-between px-4 py-8 w-full h-40 bg-gray-300 dark:bg-gray-700">
                <div className="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
                <div className="h-4 w-1/3 bg-gray-200 rounded-full dark:bg-gray-700 mb-4"></div>
                <div className='flex justify-between gap-3'>
                    <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                    <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                </div>
            </div>
            <div className="flex flex-col justify-between px-4 py-8 w-full h-40 bg-gray-300 dark:bg-gray-700">
                <div className="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
                <div className="h-4 w-1/3 bg-gray-200 rounded-full dark:bg-gray-700 mb-4"></div>
                <div className='flex justify-between gap-3'>
                    <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                    <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                </div>
            </div>
        </div>
    )
}

export default SkeletonCards