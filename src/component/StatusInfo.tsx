

const StatusInfo = (prop: { status: number }) => {
    if (prop.status === 0) {
        return (<div className='bg-green-400 rounded-sm p-2'>Pending</div>)
    } else if (prop.status === 1) {
        return (<div className='bg-green-400 rounded-sm p-2'>Ongoing</div>)
    } else if (prop.status === 2) {
        return (<div className='bg-green-400 rounded-sm p-2'>Not rated</div>)
    } else if (prop.status === 3) {
        return (<div className='bg-green-400 rounded-sm p-2'>Finished</div>)
    } else if (prop.status === 4) {
        return (<div className='bg-green-400 rounded-sm p-2'>Cancelled</div>)
    }
    return (
        <div>StatusInfo</div>
    )
}

export default StatusInfo