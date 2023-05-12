import { IItem } from '@/interfaces/item.interface';
import { Checkbox } from 'flowbite-react';
import { FC, useState, useEffect } from 'react'

interface TodoProps {
    itemGroups: any;
}

const Card = ({ title, itemGroups }: any) => (
    <div className="mt-5">
        <h3 className='text-xl font-bold text-gray-800 dark:text-gray-300'>{title}</h3>
        <ul className='flex flex-col gap-2'>
            {itemGroups.map((itemGroup: any, index: any) => (
                <li key={index} className='bg-gray-100 dark:bg-gray-700 px-5 py-2 rounded-md flex items-center gap-3'>
                    {itemGroup.items.filter((item: any) => item.fieldName !== 'Date').reverse().map((item: any) => {
                        if (item.fieldName === 'Completed') {
                            return <Checkbox id="completed" className='focus:outline-none focus:ring-0' />
                        }
                        return <p className='text-lg text-gray-700 dark:text-gray-400'>{item.fieldValue}</p>
                    })}
                </li>
            ))}
        </ul>
    </div>
);

const Todo: FC<TodoProps> = ({ itemGroups }) => {
    const [data, setData] = useState<any>(null)

    console.log("ITEM GROUPS", itemGroups)

    useEffect(() => {
        if (itemGroups.length) {
            const res = itemGroups.reduce((result: any, obj: any) => {
                const dateObj = obj.items.find((item: IItem) => item.fieldName === "Date");
                if (dateObj) {
                    const fieldValue = dateObj.fieldValue;
                    if (!result[fieldValue]) {
                        result[fieldValue] = [];
                    }
                    result[fieldValue].push(obj);
                }

                return result;
            }, {});

            setData(res)
        }
    }, [itemGroups])

    return (
        <div>
            {data && Object.entries(data).map(([title, itemGroups], index) => {
                return < Card key={index} title={title} itemGroups={itemGroups} />
            })}
        </div>
    )
}

export default Todo