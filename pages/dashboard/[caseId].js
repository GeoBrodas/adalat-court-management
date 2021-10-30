import DisplayCaseDetails from '@/components/DisplayCaseDetails';
import { connectToDatabase } from '@/helpers/db-utils';
import { useRouter } from 'next/router';

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

    // if (response.ok) {
    //   router.replace('/dashboard');
    // }
    return data;
  }

  return (
    <DisplayCaseDetails
      caseDetail={parsedData}
      delete={deleteHandler}
      fees={parsedFees.fees}
    />
  );
}

export async function getServerSideProps(context) {
  const caseId = context.params.caseId;

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
