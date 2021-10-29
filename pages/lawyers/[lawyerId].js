import {
  connectToDatabase,
  getAllLawyerProfiles,
  getLawyerId,
} from '@/helpers/db-utils';
import LawyerDetails from '@/components/LawyerDetails';
function LawyerProfile(props) {
  const { profile } = props;
  const parsedProfile = JSON.parse(profile);

  return <LawyerDetails lawyer={parsedProfile} />;
}

export async function getStaticProps(context) {
  const lawyerId = context.params.lawyerId;

  const client = await connectToDatabase();

  const profile = await getLawyerId(client, lawyerId);
  const data = JSON.stringify(profile);

  return {
    props: {
      profile: data,
    },
  };
}

export async function getStaticPaths() {
  const client = await connectToDatabase();

  const profiles = await getAllLawyerProfiles(client);
  const paths = profiles.map((p) => ({
    params: { lawyerId: p.bar_council_id.toString() },
  }));

  return {
    paths: paths,
    fallback: 'blocking',
  };
}

export default LawyerProfile;
