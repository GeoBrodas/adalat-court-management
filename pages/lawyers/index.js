import { connectToDatabase, getAllLawyerProfiles } from '@/helpers/db-utils';
import Link from 'next/link';

function LawyersPage(props) {
  const { profiles } = props;
  const parsedProfiles = JSON.parse(profiles);

  return (
    <div className="grid place-content-center">
      {parsedProfiles.map((p) => (
        <Link key={p._id} passHref href={`/lawyers/${p.bar_council_id}`}>
          <a>
            <div className="p-2 mt-2 border-4 rounded-sm">
              <p>{p.name}</p>
              <p>{p.bar_council_id}</p>
              <p>{p.exp_rs}</p>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const client = await connectToDatabase();
  const allLawyerProfiles = await getAllLawyerProfiles(client);

  console.log(allLawyerProfiles);
  const data = JSON.stringify(allLawyerProfiles);

  return {
    props: {
      profiles: data,
    },
  };
}

export default LawyersPage;
