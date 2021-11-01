import { Fragment } from 'react';

function DisplayCaseDetails(props) {
  const uid = props.caseDetail.uid;
  function deleteHandler() {
    props.delete(uid);
  }

  return (
    <Fragment>
      <div className="bg-white py-32 px-10 min-h-screen ">
        <div className="bg-gray-100 p-10 md:w-3/4 lg:w-1/2 mx-auto">
          <div className="flex items-center mb-5">
            <label className="items-center mr-6 text-right font-black text-gray-600 text-2xl">
              CASE DETAILS
            </label>
          </div>

          <div className="flex items-center mb-5">
            <label className="inline-block w-32 mr-6 text-right font-bold text-gray-600">
              Case No:
            </label>
            <p className="flex-1 py-2 border-b-2 border-gray-400 text-gray-600  outline-none">
              {props.caseDetail._id}
            </p>
          </div>

          <div className="flex items-center mb-5">
            <label className="inline-block w-32 mr-6 text-right font-bold text-gray-600">
              Case Type:
            </label>
            <p className="flex-1 py-2 border-b-2 border-gray-400 text-gray-600  outline-none">
              {props.caseDetail.Case_Type}
            </p>
          </div>

          <div className="flex items-center mb-5">
            <label className="inline-block w-32 mr-6 text-right font-bold text-gray-600">
              Case Description:
            </label>
            <p className="flex-1 py-2 border-b-2 border-gray-400 text-gray-600  outline-none">
              {props.caseDetail.Case_desciption}
            </p>
          </div>

          <div className="flex items-center mb-5">
            <label className="inline-block w-32 mr-6 text-right font-bold text-gray-600">
              Lawyer Name:
            </label>
            <p className="flex-1 py-2 border-b-2 border-gray-400 text-gray-600  outline-none">
              {props.caseDetail.Lawyer_Name}
            </p>
          </div>

          <div className="flex items-center mb-5">
            <label className="inline-block w-32 mr-6 text-right font-bold text-gray-600">
              Court Type:
            </label>
            <p className="flex-1 py-2 border-b-2 border-gray-400 text-gray-600  outline-none">
              {props.caseDetail.Case_Type}
            </p>
          </div>

          <div className="flex items-center mb-5">
            <label className="inline-block w-32 mr-6 text-right font-bold text-gray-600">
              Hearing Date:
            </label>
            <p className="flex-1 py-2 border-b-2 border-gray-400 text-gray-600  outline-none">
              {props.caseDetail.Hearing_Date}
            </p>
          </div>

          <div className="flex items-center mb-5">
            <label className="inline-block w-32 mr-6 text-right font-bold text-blue-700">
              Fee(Rs):
            </label>
            <p className="flex-1 py-2 border-b-2 border-gray-400 text-gray-600  outline-none">
              {props.fees}
            </p>
          </div>
        </div>
      </div>
      <button onClick={deleteHandler}>Withdraw Case</button>
    </Fragment>
  );
}

export default DisplayCaseDetails;
