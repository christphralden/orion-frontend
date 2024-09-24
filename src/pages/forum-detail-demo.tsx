import { useParams } from "react-router-dom";

const ForumDetailDemo = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>ForumDetailDemo</h1>

      <p>Forum Id: {id}</p>
    </div>
  );
};

export default ForumDetailDemo;
