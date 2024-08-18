import React, { useEffect, useState } from "react"
import Pagination from "./Pagination"

interface ITableTransaction {
    options?: any[]
    data?: any[]
}

const TableTransaction: React.FC<ITableTransaction> = ({ options, data }) => {
    const status: any = {
        0: 'Pending',
        1: 'Success',
        2: 'Failed'
    }

    const [tableData, setTableData] = useState<any>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);

    useEffect(() => {
        if (data) {
            const indexOfLastItem = currentPage * itemsPerPage;
            const indexOfFirstItem = indexOfLastItem - itemsPerPage;
            setTableData(data?.slice(indexOfFirstItem, indexOfLastItem));
        }
    }, [data, currentPage, itemsPerPage]);

    return (
        <>
            <div className="mb-4">
                <label htmlFor="customer-filter" className="block text-gray-700 text-sm font-bold mb-2">
                    Filter by Customer
                </label>
                <select
                    id="customer-filter"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-100"
                >
                    <option value="">All Customers</option>
                    {options?.map((option) => (
                        <option key={option.id} value={option.id}>{option.name}</option>
                    ))}
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
                            Type
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Date
                        </th>

                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 text-gray-700">
                    {tableData?.map((item: any) => (
                        <tr key={item.id}>
                            <td className="px-6 py-4 whitespace-nowrap">{item.Customer.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{item.amount}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{item.type}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{status?.[item?.type] ?? '-'}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{item.createdAt}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination handleChange={setCurrentPage} currentPage={currentPage} itemsPerPage={itemsPerPage} totalItems={data?.length ?? 0} />
        </>
    )
}

export default TableTransaction