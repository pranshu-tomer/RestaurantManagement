import { useRef } from "react"
import { useNavigate } from "react-router-dom";

function Popup({onClose}){
    const navigate = useNavigate()

    const modalRef = useRef()
    const closeModal = (e) => {
        if(modalRef.current === e.target){
            onClose()
        }
    }

    const handleRestaurant = () => {
        navigate('/restaurant/register')
    }

    const handleCustmer = () => {
        navigate('/user/register')
    }

    return (
        <>
        <div ref={modalRef} onClick={closeModal} className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex  items-center justify-center">
            <div className="w-[400px] bg-white rounded-xl px-5 py-5 flex flex-col">
                <div className="flex mt-1 gap-2 justify-between">
                    <button className="border px-2 py-2  bg-white rounded-lg" onClick={() => handleCustmer()}>Register as Custmer</button>
                    <button className="border px-2 py-2 bg-[#9f5bff] text-white rounded-lg" onClick={() => handleRestaurant()}>Register as Restaurant</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Popup