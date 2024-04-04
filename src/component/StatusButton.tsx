import axios from "axios"

const StatusButton = (props: {
    status: number,
    bookingId: string
}) => {
    const handleCancel = async () => {
        try {
            await axios.post(`https://quydt.speak.vn/api/Booking/Cancel/${props.bookingId}`, {
            }, { withCredentials: true });
            window.location.reload()
        } catch (error) {
            console.log(error)
        }
    }
    const handleCheckin = async () => {
        try {
            await axios.post(`https://quydt.speak.vn/api/Booking/Checkin/${props.bookingId}`, {
            }, { withCredentials: true });
            window.location.reload()
        } catch (error) {
            console.log(error)
        }
    }
    const handleCheckout = async () => {
        try {
            await axios.post(`https://quydt.speak.vn/api/Booking/Checkout/${props.bookingId}`, {
            }, { withCredentials: true });
            window.location.reload()
        } catch (error) {
            console.log(error)
        }
    }

    if (props.status === 0) {
        return (<div className="flex flex-row gap-2">
            <div className='py-2 px-3 font-medium text-white hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg cursor-pointer bg-red-400'
                onClick={handleCancel}
            >Cancel</div>
            <div className='py-2 px-3 font-medium text-white hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg cursor-pointer bg-blue-400'
                onClick={handleCheckin}
            >Checkin</div>
        </div>)
    } else if (props.status === 1) {
        return (<div className='py-2 px-3 font-medium text-white hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg cursor-pointer bg-green-500'
            onClick={handleCheckout}
        >Checkout</div>)
    } else if (props.status === 2) {
        return (<></>)
    } else if (props.status === 3) {
        return ((<></>))
    } else if (props.status === 4) {
        return (<></>)
    }
    return (
        <div>Error</div>
    )
}

export default StatusButton