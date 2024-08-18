import React, { useEffect, useState } from "react"
import Pagination from "./Pagination"

interface ITableCustomer {
    data?: any[]
}

const TableCustomer: React.FC<ITableCustomer> = ({ data }) => {
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
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Email
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Phone
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Balance
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 text-gray-700">
                    {tableData?.map((item: any) => (
                        <tr key={item.id}>
                            <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{item.phone}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{item.Wallet.balance}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination handleChange={setCurrentPage} currentPage={currentPage} itemsPerPage={itemsPerPage} totalItems={data?.length ?? 0} />
        </>
    )
}

export default TableCustomer