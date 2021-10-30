import DisplayCaseDetails from '@/components/DisplayCaseDetails';
import { connectToDatabase } from '@/helpers/db-utils';

import { useRouter } from 'next/router';
import Head from 'next/head';
import { getSession } from 'next-auth/client';

function CaseDetailsPage(props) {
  const parsedFees = JSON.parse(props.fees);
  const parsedData = JSON.parse(props.caseDetail);

  const router = useRouter();

  async function deleteHandler(uid) {
    const response = await fetch('/api/case/deletecase', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(uid),
    });

    const data = await response.json();
    console.log(data);
    router.replace('/dashboard');

    return data;
  }

  return (
    <>
      <Head>
        <title>Case No : {parsedData.uid}</title>
        <meta
          name="description"
          content="Adaalat: One step Solution to managing court hearings"
        />
      </Head>
      <DisplayCaseDetails
        caseDetail={parsedData}
        delete={deleteHandler}
        fees={parsedFees.fees}
      />
    </>
  );
}

export async function getServerSideProps(context) {
  const caseId = context.params.caseId;

  const session = await getSession({ req: context.req });
  // checks for the incoming request and sees whether a session token is available or not and accordingly takes action

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false, // if we want to permanently redirect to auth page or not ?
      },
    };
  }

  const client = await connectToDatabase();
  const db = client.db();
  const response = await db.collection('cases').findOne({ uid: caseId });
  const stringifiedData = JSON.stringify(response);

  const parsedData = JSON.parse(stringifiedData);

  const feeResponse = await db
    .collection('lawyersList')
    .findOne({ name: parsedData.Lawyer_Name });
  const stringifyFee = JSON.stringify(feeResponse);
  return {
    props: {
      caseDetail: stringifiedData,
      fees: stringifyFee,
    },
  };
}

export default CaseDetailsPage;
