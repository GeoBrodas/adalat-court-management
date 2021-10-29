import Link from 'next/link';

function LawyerCard(props) {
  const { bcid, name, prefCase, fees, yrs } = props;

  return (
    <tr className="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
        <span className="inline-block w-1/3 md:hidden font-bold">
          Lawyer Name
        </span>
        {name}
      </td>
      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
        <span className="inline-block w-1/3 md:hidden font-bold">
          Preferred Case Types
        </span>
        {prefCase}
      </td>
      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
        <span className="inline-block w-1/3 md:hidden font-bold">Fees(Rs)</span>
        {fees}
      </td>
      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
        <span className="inline-block w-1/3 md:hidden font-bold">
          Years of Experience
        </span>
        {yrs}
      </td>
      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
        <Link href={`/lawyers/${bcid}`}>
          <a className="py-2 px-3 bg-blue-700 hover:bg-blue-500 text-white hover:text-black rounded transition duration-300">
            View
          </a>
        </Link>
      </td>
    </tr>
  );
}

export default LawyerCard;
