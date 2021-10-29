import {
  connectToDatabase,
  getAllLawyerProfiles,
  getLawyerId,
} from '@/helpers/db-utils';

function LawyerProfile(props) {
  const { profile } = props;
  const parsedProfile = JSON.parse(profile);

  return (
    <div className="grid place-content-center">
      <p>{parsedProfile.name}</p>
      <p>{parsedProfile.bar_council_id}</p>
      <p>{parsedProfile.dob}</p>
      <p>{parsedProfile.age}</p>
    </div>
  );
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
