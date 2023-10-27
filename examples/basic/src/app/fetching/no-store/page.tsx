import { Heading } from "@chakra-ui/react";

const getPosts = async () =>
  fetch("https://64eb6eb1e51e1e82c57759bb.mockapi.io/ap1/v1/todos", {
    cache: "no-store",
  }).then((res) => res.json());

const Revalidate = async () => {
  const posts = await getPosts();

  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <Heading as="h2" fontWeight="bold">
        No Store
      </Heading>
      <ol>
        {posts.map((post: { name: string }) => (
          <li key={post.name}>{post.name}</li>
        ))}
      </ol>
    </div>
  );
};

export default Revalidate;
