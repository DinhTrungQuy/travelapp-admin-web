

const StatusInfo = (props: { status: number }) => {
    if (props.status === 0) {
        return (<div className='bg-blue-400 rounded-sm p-2'>Pending</div>)
    } else if (props.status === 1) {
        return (<div className='bg-green-400 rounded-sm p-2'>Ongoing</div>)
    } else if (props.status === 2) {
        return (<div className='bg-slate-400 rounded-sm p-2'>Finished</div>)
    } else if (props.status === 3) {
        return (<div className='bg-amber-400 rounded-sm p-2'>Rated</div>)
    } else if (props.status === 4) {
        return (<div className='bg-red-400 rounded-sm p-2'>Cancelled</div>)
    }
    return (
        <div>Error</div>
    )
}

export default StatusInfo