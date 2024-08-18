import { useEffect, useState } from 'react'
import Form from './components/Form'
import TableTransaction from './components/TableTransaction'
import axios from 'axios';
import TableCustomer from './components/TableCustomer';

const App = () => {

  const [menu, setMenu] = useState('deposit');
  const [customers, setCustomers] = useState([]);
  const [transaction, setTransaction] = useState([]);
  const [customer, setCustomer] = useState([]);

  const getOptions = async () => {
    try {
      const { data } = await axios.get('http://localhost:3000/customer')

      if (menu == 'customer') {
        setCustomer(data?.data)
      } else {
        setCustomers(data?.data?.map((customer: any) => ({
          id: customer.id,
          name: customer.name
        })
        ))
      }
    } catch (error) {
      console.error(error);
    }
  }

  const getHistory = async () => {
    try {
      const { data } = await axios.get('http://localhost:3000/transaction');
      setTransaction(data?.data);

      getOptions();
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (menu === 'history') {
      getHistory();
    } else {
      getOptions();
    }
  }, [menu])

  return (
    <div className="flex h-screen w-screen bg-gray-200">
      {/* Sidebar */}
      <div className="w-1/6 bg-yellow-500 text-center">
        <h1 className="text-2xl font-bold text-white px-4 pt-4">Coding Collective</h1>
        <small className="text-sm font-semibold text-white px-4 text-center">Technical Test 1</small>
        <h2 className="text-sm text-center font-semibold text-white px-4 bg-yellow-700 py-2 mt-5">Features</h2>
        <ul className="py-2 text-left">
          <li
            className="px-4 py-2 text-lg font-bold hover:cursor-pointer hover:bg-yellow-300 hover:text-black"
            onClick={() => setMenu('deposit')}
          >
            Deposit
          </li>
          <li
            className="px-4 py-2 text-lg font-bold hover:cursor-pointer hover:bg-yellow-300 hover:text-black"
            onClick={() => setMenu('withdrawal')}
          >
            Withdrawal
          </li>
          <li
            className="px-4 py-2 text-lg font-bold hover:cursor-pointer hover:bg-yellow-300 hover:text-black"
            onClick={() => setMenu('history')}
          >
            List of Transactions
          </li>
          <li
            className="px-4 py-2 text-lg font-bold hover:cursor-pointer hover:bg-yellow-300 hover:text-black"
            onClick={() => setMenu('customer')}
          >
            List of Customers
          </li>

        </ul>
      </div>

      {/* Main Content */}
      <div className="w-5/6 bg-white p-5">
        {menu === 'deposit' && (
          <>
            <h2 className="text-2xl font-bold text-yellow-500 my-4">Deposit</h2>
            <Form options={customers} />
          </>
        )}

        {menu === 'withdrawal' && (
          <>
            <h2 className="text-2xl font-bold text-yellow-500 my-4">Withdrawal</h2>
            <Form options={customers} />
          </>
        )}

        {menu === 'history' && (
          <>
            <h2 className="text-2xl font-bold text-yellow-500 my-4">List of Transactions</h2>
            <TableTransaction options={customers} data={transaction} />
          </>
        )}

        {menu === 'customer' && (
          <>
            <h2 className="text-2xl font-bold text-yellow-500 my-4">List of Customers</h2>
            <TableCustomer data={customer} />
          </>
        )}

      </div>
    </div>
  )
}

export default App