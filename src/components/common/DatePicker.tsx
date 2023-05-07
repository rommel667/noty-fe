import { TextInput } from 'flowbite-react'
import { FC, useState } from 'react'
import { HiCalendar } from 'react-icons/hi'

// @ts-ignore
import Datepicker from "tailwind-datepicker-react"




interface DatePickerProps {

}

const DatePicker: FC<DatePickerProps> = ({ }) => {


    const [show, setShow] = useState<boolean>(false)
    const [selectedDate, setSelectedDate] = useState<any>(null)
    const handleChange = (selectedDate: Date) => {
        setSelectedDate(selectedDate)
        console.log(selectedDate)
    }

    const handleClose = (state: boolean) => {
        setShow(state)
    }

    const options = {
        title: "Select Date",
        autoHide: true,
        todayBtn: true,
        clearBtn: true,
        maxDate: new Date("2030-01-01"),
        minDate: new Date("1950-01-01"),
        theme: {
            background: "dark:bg-gray-800",
            todayBtn: "",
            clearBtn: "",
            icons: "",
            text: "",
            // disabledText: "bg-red-500",
            input: "",
            inputIcon: "",
            selected: "",
        },
        icons: {
            // () => ReactElement | JSX.Element
            prev: () => <span className='text-sm'>Previous</span>,
            next: () => <span className='text-sm'>Next</span>,
        },
        // datepickerClassNames: "top-12",
        // defaultDate: new Date(),
        language: "en",
    }

    return (
        <Datepicker options={options} onChange={handleChange} show={show} setShow={handleClose}>
            <div>

                <TextInput
                    type='text'
                    onFocus={() => setShow(true)}
                    placeholder="Select date"
                    required={true}
                    value={new Date(selectedDate).toDateString()}
                    icon={HiCalendar}
                    readOnly
                />
            </div>
        </Datepicker>
    )
}

export default DatePicker