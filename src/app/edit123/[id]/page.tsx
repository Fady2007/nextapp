import EditForm from "@/app/components/EditForm";
import getTopicById from "../../../../models/functions";

export default async function EditTopic({ params }: any) {
    return <EditForm id={id} title={title} des={des} />;
}

// Fetch static paths for dynamic routes
export async function getStaticPaths() {
  // Example: Fetch IDs from an API or database
  const ids = ['id1', 'id2', 'id3']; // Replace with your IDs

  // Map IDs to the params object required by Next.js
  const paths = ids.map((id) => ({ params: { id } }));

  return {
    paths,
    fallback: false // Set to true if you have fallback behavior
  };
}

// Fetch data for each individual page
export async function getStaticProps({ params }: any) {
  const { id } = params;
  const { topic } = await getTopicById(id);
  const { title, des } = topic;

  return {
    props: {
      id,
      title,
      des
    }
  };
}
