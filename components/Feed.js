import { useSession } from 'next-auth/client';
import FeedRow from './FeedRow';

function Feed({ cases }) {
  const [session] = useSession();
  return (
    <section>
      {cases.length === 0 ? (
        <p>No cases registered yet!</p>
      ) : (
        <div className="max-w-6xl mx-auto px-4">
          <table className="min-w-full border-collapse block md:table">
            <thead className="block md:table-header-group">
              <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
                <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Case No
                </th>
                <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Case Type
                </th>
                <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Lawyer Name
                </th>
                <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Hearing Date
                </th>
                <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  View
                </th>
              </tr>
            </thead>
            <tbody className="block md:table-row-group">
              {/* Mapped data */}
              {cases
                .filter((item) => item.email === session.user.email)
                .map((item, index) => (
                  <FeedRow key={item._id} case={item} number={index} />
                ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

export default Feed;
