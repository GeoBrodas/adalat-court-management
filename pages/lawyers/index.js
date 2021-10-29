import LawyerCard from '@/components/ui/LawyerCard';
import { connectToDatabase, getAllLawyerProfiles } from '@/helpers/db-utils';
import Link from 'next/link';

function LawyersPage(props) {
  const { profiles } = props;
  const parsedProfiles = JSON.parse(profiles);

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4">
        <h4 className="w-full text-3xl font-bold mt-8 mb-4">List of Lawyers</h4>
        <table className="min-w-full border-collapse block md:table">
          <thead className="block md:table-header-group">
            <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
              <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Lawyer name
              </th>
              <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Preferred Case Types
              </th>
              <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Fees(Rs)
              </th>
              <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Years of Experience
              </th>
              <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                View
              </th>
            </tr>
          </thead>
          <tbody className="block md:table-row-group">
            {/* Table row */}
            {parsedProfiles.map((p) => (
              <LawyerCard
                key={p._id}
                bcid={p.bar_council_id}
                name={p.name}
                prefCase={p.pref_case_types}
                fees={p.fees}
                yrs={p.exp_yrs}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export async function getStaticProps() {
  const client = await connectToDatabase();
  const allLawyerProfiles = await getAllLawyerProfiles(client);

  const data = JSON.stringify(allLawyerProfiles);

  return {
    props: {
      profiles: data,
    },
  };
}

export default LawyersPage;
