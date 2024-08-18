const TableTransaction = () => {
    return (
        <>
            <div className="mb-4">
                <label htmlFor="customer-filter" className="block text-gray-700 text-sm font-bold mb-2">
                    Filter by Customer
                </label>
                <select
                    id="customer-filter"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                    <option value="">All Customers</option>
                    {/* Add option list of customers here */}
                </select>
            </div>
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Customer
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Amount
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Date
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {/* Add table rows here */}
                </tbody>
            </table>
        </>
    )
}

export default TableTransaction