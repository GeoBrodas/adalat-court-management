import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { v4 } from 'uuid';

export default function AddCaseForm(props) {
  const router = useRouter();

  const { names } = props;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const response = await fetch('/api/case/addcase', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ ...data, uid: v4() }),
    });

    const parse = await response.json();

    if (!response.ok) {
      throw new Error(response.message || 'Something went wrong');
    }

    console.log(parse);
    reset();
    router.replace('/dashboard');
    // console.log(data);
  };
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Select case-type */}
      <select
        className="form-select mt-1 block w-full border"
        {...register('Case_Type', { required: true })}
      >
        <option value="Criminal">Criminal</option>
        <option value="Civil">Civil</option>
        <option value="Family-Matters">Family-Matters</option>
        <option value="Land">Land</option>
        <option value="Co-op court dispute">Co-op court dispute</option>
        <option value="Charity Trust">Charity Trust</option>
        <option value="SEBI">SEBI</option>
      </select>

      {/* Enter description */}
      <div className="mt-6">
        <label className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2">
          Case description
        </label>
        <textarea
          className="border-0 px-3 py-3 mt-4 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
          {...register('Case_desciption', { required: true, max: 200 })}
        />
      </div>

      {/* Select Lawyer */}
      <div className="block mt-2">
        <span className="text-gray-700">Select lawyer</span>
        <div className="mt-2 flex flex-col">
          {names.map((item, index) => (
            <label key={index} className="inline-flex items-center">
              <input
                className="form-radio"
                {...register('Lawyer_Name', { required: true })}
                type="radio"
                value={item.name}
              />
              <span className="ml-2">{item.name}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="w-full my-6 md:w-1/3 px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          Address
        </label>

        <input
          type="text"
          placeholder="Address"
          {...register('Address', { required: true })}
        />
      </div>
      <div className="flex flex-wrap -mx-3 my-6 mb-2">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            City
          </label>

          <input
            type="text"
            placeholder="City"
            {...register('City', { required: true })}
          />
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Country
          </label>

          <input
            type="text"
            placeholder="Country"
            {...register('Country', { required: true })}
          />
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Postal Code
          </label>

          <input
            type="number"
            placeholder="Postal Code"
            {...register('Postal_Code', { required: true })}
          />
        </div>
      </div>

      <div className="flex space-y-4 flex-col md:flex-row justify-evenly">
        <input
          type="date"
          placeholder="Hearing Date"
          {...register('Hearing_Date', { required: true })}
        />

        <input
          className="mb-4"
          type="text"
          placeholder="Court Type"
          {...register('Court_Type', { required: true })}
        />
      </div>

      <input
        className="block my-2 bg-gray-300 hover:bg-gray-400 rounded-md p-2"
        type="submit"
      />
    </form>
  );
}
