import { useSettingStore } from '@/state/setting.store'
import { FC } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

interface ModeProps {

}

const Mode: FC<ModeProps> = ({ }) => {

    const { mode, toggleMode } = useSettingStore()
    return (
        <div className='text-gray-500 flex items-center' onClick={toggleMode}>
            {mode === "dark" ? <FaSun className='w-6 h-6' /> : <FaMoon className='w-6 h-6' />}
        </div>
    )
}

export default Mode