import Link from 'next/link';

function FeedRow(props) {
  return (
    <tr className="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
        <span className="inline-block w-1/3 md:hidden font-bold">Case No</span>1
      </td>
      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
        <span className="inline-block w-1/3 md:hidden font-bold">
          Case Type
        </span>
        {props.case.Case_Type}
      </td>
      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
        <span className="inline-block w-1/3 md:hidden font-bold">
          Lawyer Name
        </span>
        {props.case.Lawyer_Name}
      </td>
      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
        <span className="inline-block w-1/3 md:hidden font-bold">
          Hearing Date
        </span>
        {props.case.Hearing_Date}
      </td>
      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
        <Link href={`/dashboard/${props.case.uid}`}>
          <a className="py-2 px-3 bg-blue-700 hover:bg-blue-500 text-white hover:text-black rounded transition duration-300">
            View
          </a>
        </Link>
      </td>
    </tr>
  );
}

export default FeedRow;
