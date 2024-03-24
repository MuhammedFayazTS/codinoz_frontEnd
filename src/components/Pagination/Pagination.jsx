
export default function Pagination({totalPages, handlePageChange,handlePrevPage,handleNextPage}) {
    return (
        <>
            <nav className="pb-6" role="navigation" aria-label="Pagination Navigation">
                <ul className="flex list-none items-center justify-center text-sm text-slate-700 md:gap-1">
                    
                    <li>
                        <button
                            onClick={handlePrevPage}
                            aria-label="Goto Page 1"
                            className="inline-flex h-10 items-center justify-center gap-4 rounded-full stroke-slate-700 px-4 text-sm font-medium text-slate-700 transition duration-300 hover:bg-gray-50 hover:stroke-gray-500 hover:text-gray-500 focus:bg-gray-50 focus:stroke-gray-600 focus:text-gray-600 focus-visible:outline-none"
                        >
                            <span className="order-2 md:sr-only">Prev</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="-mx-1 h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                role="graphics-symbol"
                                aria-labelledby="title-01 desc-01"
                            >
                                <title id="title-01">Previous page</title>
                                <desc id="desc-01">link to previous page</desc>
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                        </button>
                    </li>


                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page,index) => (
                        <li key={page}>
                            <button
                                onClick={() => handlePageChange(page)}
                                aria-label={`Goto Page ${page}`}
                                className={`hidden h-10 items-center justify-center rounded-full stroke-slate-700 px-4 text-sm font-medium text-slate-700 transition duration-300 hover:bg-gray-50 hover:stroke-gray-500 hover:text-gray-500 focus:bg-[#FF5722] focus:stroke-gray-600 focus:text-gray-100 focus-visible:outline-none md:inline-flex`}
                            >
                                {page}
                            </button>
                        </li>
                    ))}

                    <li>
                        <button
                            onClick={handleNextPage}
                            aria-label="Goto Page 4"
                            className="inline-flex h-10 items-center justify-center gap-4 rounded-full stroke-slate-700 px-4 text-sm font-medium text-slate-700 transition duration-300 hover:bg-gray-50 hover:stroke-gray-500 hover:text-gray-500 focus:bg-gray-50 focus:stroke-gray-600 focus:text-gray-600 focus-visible:outline-none"
                        >
                            <span className="md:sr-only">Next</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="-mx-1 h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                role="graphics-symbol"
                                aria-labelledby="title-02 desc-02"
                            >
                                <title id="title-02">Next page</title>
                                <desc id="desc-02">link to next page</desc>
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </button>
                    </li>
                </ul>
            </nav>
        </>
    )
}
