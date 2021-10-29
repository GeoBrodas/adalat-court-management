import Link from 'next/link';

function LawyerDetails({ lawyer }) {
  return (
    <div className="bg-white py-32 px-10 min-h-screen ">
      <div className="bg-gray-100 p-10 md:w-3/4 lg:w-1/2 mx-auto">
        <div className="flex items-center mb-5">
          <label
            For="title"
            className="items-center mr-6 text-right font-black text-gray-600 text-2xl"
          >
            LAWYER DETAILS
          </label>
        </div>

        <div className="flex items-center mb-5">
          <label
            For="bar_id"
            className="inline-block w-32 mr-6 text-right font-bold text-gray-600"
          >
            Bar Council ID:
          </label>
          <p className="flex-1 py-2 border-b-2 border-gray-400 text-gray-600  outline-none">
            {lawyer.bar_council_id}
          </p>
        </div>

        <div className="flex items-center mb-5">
          <label
            For="company_name"
            className="inline-block w-32 mr-6 text-right font-bold text-gray-600"
          >
            Name:
          </label>
          <p className="flex-1 py-2 border-b-2 border-gray-400 text-gray-600  outline-none">
            {lawyer.name}
          </p>
        </div>

        <div className="flex items-center mb-5">
          <label
            For="desc"
            className="inline-block w-32 mr-6 text-right font-bold text-gray-600"
          >
            Preferred case type:
          </label>
          <p className="flex-1 py-2 border-b-2 border-gray-400 text-gray-600  outline-none">
            {lawyer.pref_case_types}
          </p>
        </div>

        <div className="flex items-center mb-5">
          <label
            For="years_of_exp"
            className="inline-block w-32 mr-6 text-right font-bold text-gray-600"
          >
            Years Of Experience:
          </label>
          <p className="flex-1 py-2 border-b-2 border-gray-400 text-gray-600  outline-none">
            {lawyer.exp_yrs}
          </p>
        </div>

        <div className="flex items-center mb-5">
          <label
            For="fees"
            className="inline-block w-32 mr-6 text-right font-bold text-gray-600"
          >
            Fees(Rs):
          </label>
          <p className="flex-1 py-2 border-b-2 border-gray-400 text-gray-600  outline-none">
            {lawyer.fees}
          </p>
        </div>

        <div className="flex items-center mb-5">
          <label
            For="age"
            className="inline-block w-32 mr-6 text-right font-bold text-gray-600"
          >
            Age:
          </label>
          <p className="flex-1 py-2 border-b-2 border-gray-400 text-gray-600  outline-none">
            {lawyer.age}
          </p>
        </div>

        <div className="flex items-center mb-5">
          <label
            For="fee_structure"
            className="inline-block w-32 mr-6 text-right font-bold text-gray-600"
          >
            Fee Structure:
          </label>
          <p className="flex-1 py-2 border-b-2 border-gray-400 text-gray-600  outline-none">
            {lawyer.fee_descp}
          </p>
        </div>

        <div className="flex items-center mb-5">
          <label
            For="dob"
            className="inline-block w-32 mr-6 text-right font-bold text-gray-600"
          >
            Date of Birth:
          </label>
          <p className="flex-1 py-2 border-b-2 border-gray-400 text-gray-600  outline-none">
            {lawyer.dob}
          </p>
        </div>

        <div className="w-1/4 text-right">
          <Link href="/lawyers">
            <a className="inline-block w-full px-5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 ease">
              Back
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LawyerDetails;
