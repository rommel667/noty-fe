import { useSettingStore } from '@/state/setting.store'
import { FC } from 'react'
import { HiMoon, HiSun } from 'react-icons/hi'

interface ModeProps {

}

const Mode: FC<ModeProps> = ({ }) => {

    const { mode, toggleMode } = useSettingStore()
    return (
        <div className='text-gray-500' onClick={toggleMode}>
            {mode === "dark" ? <HiSun /> : <HiMoon />}
        </div>
    )
}

export default Mode