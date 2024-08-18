import React from "react"

interface IForm {
    options?: any[]
}

const Form: React.FC<IForm> = ({ options }) => {
    return (
        <form>
            <div className="mb-4">
                <label htmlFor="amount" className="block text-gray-700 text-sm font-bold mb-2">
                    Amount
                </label>
                <input
                    type="number"
                    id="amount"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-100"
                    placeholder="Enter amount"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="customer" className="block text-gray-700 text-sm font-bold mb-2">
                    Customer
                </label>
                <select
                    id="customer"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-100"
                >
                    <option value="">Select customer</option>
                    {options?.map((option) => (
                        <option key={option.id} value={option.id}>{option.name}</option>
                    ))}
                </select>
            </div>
            <div className="flex justify-end mt-6">
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Submit
                </button>
            </div>
        </form>
    )
}

export default Form