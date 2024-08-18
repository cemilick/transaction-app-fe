import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

interface IForm {
    options?: any[];
    type?: string;
}

const Form: React.FC<IForm> = ({ options, type }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data: any) => {
        setLoading(true);
        try {
            const apiUrl = import.meta.env.VITE_API_URL;
            await axios.post(`${apiUrl}/transaction`, {
                customer_id: data.customer,
                amount: data.amount,
                type
            });
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: type + ' success',
                timer: 2000,
            }).then(() => {
                window.location.reload();
            });
        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: 'error',
                title: 'Failed',
                text: type + ' failed',
                timer: 2000,
            });
        } finally {
            setLoading(false);
        }
    };

    return loading ? (<div className="flex justify-center mt-20">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
    </div>) : (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
                <label htmlFor="amount" className="block text-gray-700 text-sm font-bold mb-2">
                    Amount
                </label>
                <input
                    type="number"
                    id="amount"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-100"
                    placeholder="Enter amount"
                    {...register("amount", { required: "Amount is required" })}
                />
                {errors.amount && <p className="text-red-500 text-xs italic"><>{errors.amount.message}</></p>}
            </div>
            <div className="mb-4">
                <label htmlFor="customer" className="block text-gray-700 text-sm font-bold mb-2">
                    Customer
                </label>
                <select
                    id="customer"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-100"
                    {...register("customer", { required: "Customer is required" })}
                >
                    <option value="">Select customer</option>
                    {options?.map((option) => (
                        <option key={option.id} value={option.id}>
                            {option.name}
                        </option>
                    ))}
                </select>
                {errors.customer && <p className="text-red-500 text-xs italic"><>{errors.customer.message}</></p>}
            </div>
            <div className="flex justify-end mt-6">
                <button
                    type="submit"
                    className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

export default Form;