
interface Prop {
    isVisible: boolean;
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>

}

export const Nofication = (prop: Prop) => {
    const { isVisible, setIsVisible } = prop

    const handleClose = () => {
        setIsVisible(false)
    }
    return (
        <>
            <div className={`fixed z-10 bottom-5 left-1/2 -translate-x-1/2 max-w-5xl mx-auto px-4 md:px-8 ease-out duration-300 ${!isVisible ? "opacity-0" : ""}`}>
                <div className="flex justify-between p-4 rounded-md bg-green-50 border border-green-300">
                    <div className="flex items-start gap-3 w-full">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div className="flex-1 self-center">
                            <span className="text-green-600 font-medium">
                                Login Succesfully
                            </span>
                            <div className="text-green-600">
                                <p className="mt-2 sm:text-sm">
                                    Hi, Admin
                                </p>
                            </div>
                        </div>
                        <button className="" onClick={handleClose}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-green-600">
                                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

        </>

    )
}