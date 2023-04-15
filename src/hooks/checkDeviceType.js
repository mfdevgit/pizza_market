import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setDeviceType } from '../redux/slices/settings'

export default function useCheckDeviceType() {
    const [device, setDevice] = useState('mobile')
    const dispatch = useDispatch()

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth
            const type = width < 800 ? 'mobile' : 'desktop'
            setDevice(type)
            dispatch(setDeviceType(type))
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [dispatch])

    return device
}
