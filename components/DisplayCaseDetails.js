function DisplayCaseDetails() {
  return (
    <div className="bg-white py-32 px-10 min-h-screen ">
      <div className="bg-gray-100 p-10 md:w-3/4 lg:w-1/2 mx-auto">
        <div className="flex items-center mb-5">
          <label
            For="title"
            className="items-center mr-6 text-right font-black text-gray-600 text-2xl"
          >
            CASE DETAILS
          </label>
        </div>

        <div className="flex items-center mb-5">
          <label
            For="name"
            className="inline-block w-32 mr-6 text-right font-bold text-gray-600"
          >
            Case Name:
          </label>
          <p className="flex-1 py-2 border-b-2 border-gray-400 text-gray-600  outline-none">
            abc efg
          </p>
        </div>

        <div className="flex items-center mb-5">
          <label
            For="case_type"
            className="inline-block w-32 mr-6 text-right font-bold text-gray-600"
          >
            Case Type:
          </label>
          <p className="flex-1 py-2 border-b-2 border-gray-400 text-gray-600  outline-none">
            abc efg
          </p>
        </div>

        <div className="flex items-center mb-5">
          <label
            For="desc"
            className="inline-block w-32 mr-6 text-right font-bold text-gray-600"
          >
            Case Description:
          </label>
          <p className="flex-1 py-2 border-b-2 border-gray-400 text-gray-600  outline-none">
            abc efgv qewqr rwe r gsd ehra e eahg hrsth heregfaefsbz ersh
            teshtrshbdrt rthsbrthsry rtshns r
          </p>
        </div>

        <div className="flex items-center mb-5">
          <label
            For="lawyer_name"
            className="inline-block w-32 mr-6 text-right font-bold text-gray-600"
          >
            Lawyer Name:
          </label>
          <p className="flex-1 py-2 border-b-2 border-gray-400 text-gray-600  outline-none">
            qwer rtui
          </p>
        </div>

        <div className="flex items-center mb-5">
          <label
            For="case_number"
            className="inline-block w-32 mr-6 text-right font-bold text-gray-600"
          >
            Case Number:
          </label>
          <p className="flex-1 py-2 border-b-2 border-gray-400 text-gray-600  outline-none">
            10
          </p>
        </div>

        <div className="flex items-center mb-5">
          <label
            For="court_type"
            className="inline-block w-32 mr-6 text-right font-bold text-gray-600"
          >
            Court Type:
          </label>
          <p className="flex-1 py-2 border-b-2 border-gray-400 text-gray-600  outline-none">
            fodo
          </p>
        </div>

        <div className="flex items-center mb-5">
          <label
            For="h_date"
            className="inline-block w-32 mr-6 text-right font-bold text-gray-600"
          >
            Hearing Date:
          </label>
          <p className="flex-1 py-2 border-b-2 border-gray-400 text-gray-600  outline-none">
            2021-12-11
          </p>
        </div>

        <div className="flex items-center mb-5">
          <label
            For="fee"
            className="inline-block w-32 mr-6 text-right font-bold text-blue-700"
          >
            Fee(Rs):
          </label>
          <p className="flex-1 py-2 border-b-2 border-gray-400 text-gray-600  outline-none">
            1000
          </p>
        </div>

        <div className="w-1/4 text-right">
          <a
            href="client_dashboard.html"
            className="inline-block w-full px-5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 ease"
          >
            Back
          </a>
        </div>
      </div>
    </div>
  );
}

export default DisplayCaseDetails;
