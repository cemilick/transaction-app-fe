import React from "react";

interface IPagination {
    handleChange: (page: number) => void;
    currentPage: number;
    itemsPerPage: number;
    totalItems: number;
}

const Pagination: React.FC<IPagination> = ({ handleChange, currentPage, itemsPerPage, totalItems }) => {
    return (

        <div className="flex justify-center">
            <div className="flex justify-end mt-4">
                <nav className="relative z-0 inline-flex shadow-sm">
                    {currentPage > 1 && (<button
                        type="button"
                        onClick={() => handleChange(currentPage - 1)}
                        className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                    >
                        <span className="sr-only">Previous</span>
                        <svg
                            className="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10.707 3.293a1 1 0 010 1.414L7.414 9H16a1 1 0 110 2H7.414l3.293 3.293a1 1 0 01-1.414 1.414l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>)}
                    {Array.from(Array(Math.ceil(totalItems / itemsPerPage)).keys()).map((index) => (
                        <button
                            key={index}
                            onClick={() => handleChange(index + 1)}
                            type="button"
                            disabled={currentPage === index + 1}
                            className={`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium ${currentPage === index + 1 ? 'text-white bg-yellow-500' : 'text-gray-700 hover:bg-gray-50'}`}
                        >
                            {index + 1}
                        </button>
                    ))
                    }
                    {currentPage < Math.ceil(totalItems / itemsPerPage) && (
                        <button
                            type="button"
                            onClick={() => handleChange(currentPage + 1)}
                            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                        >
                            <span className="sr-only">Next</span>
                            <svg
                                className="h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M9.293 16.707a1 1 0 010-1.414L12.586 11H4a1 1 0 110-2h8.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>)}
                </nav>
            </div>
        </div>
    );
}

export default Pagination