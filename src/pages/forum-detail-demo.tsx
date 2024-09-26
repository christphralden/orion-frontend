import { useParams } from "react-router-dom";
import { fakeForumData } from "@forum/constants/forum-faker.constant";

const ForumDetailDemo = () => {
  const { id } = useParams();

  const index = (id as unknown as number) ?? 0;
  const data = fakeForumData[index];
  return (
    <div>
      <h1>{data.name}</h1>

      <p>Forum Id: {id}</p>
    </div>
  );
};

export default ForumDetailDemo;
