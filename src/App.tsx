import { useState } from 'react'
import Form from './components/Form'
import TableTransaction from './components/TableTransaction'

const App = () => {

  const [menu, setMenu] = useState('deposit');

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
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-5/6 bg-white p-5">
        {menu === 'deposit' && (
          <>
            <h2 className="text-2xl font-bold text-yellow-500 my-4">Deposit</h2>
            <Form />
          </>
        )}

        {menu === 'withdrawal' && (
          <>
            <h2 className="text-2xl font-bold text-yellow-500 my-4">Withdrawal</h2>
            <Form />
          </>
        )}

        {menu === 'history' && (
          <>
            <h2 className="text-2xl font-bold text-yellow-500 my-4">List of Transactions</h2>
            <TableTransaction />
          </>
        )}

      </div>
    </div>
  )
}

export default App