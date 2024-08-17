import { useEffect } from 'react'
import './PreLoader.scss'
import { FaLaptopCode } from "react-icons/fa";
import { preLoaderAnim } from './PreLoaderAnimation/PreLoaderAnimation'

const PreLoader = () => {

    useEffect(() => {
        preLoaderAnim()
    },[])

  return (
    <div className="preloader">
        <div className="texts-container">
            <span>Abubakir</span>
            <span>Developer</span>
            <span className='preloader-icon'><FaLaptopCode/></span>
        </div>
    </div>
  )
}

export default PreLoader