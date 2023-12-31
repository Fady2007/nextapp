import EditForm from "@/app/components/EditForm";
import getTopicById from "../../../../models/functions";

export default async function EditTopic({ params }: any) {
    const { id } = params;
    const { topic } = await getTopicById(id);
    const { title, des } = topic;

    return <EditForm id={id} title={title} des={des} />;
}