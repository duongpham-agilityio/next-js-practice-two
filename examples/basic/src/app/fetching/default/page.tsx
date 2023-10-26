import { Heading } from "@chakra-ui/react";

const getPosts = async () =>
  fetch("https://64eb6eb1e51e1e82c57759bb.mockapi.io/ap1/v1/todos").then(
    (res) => res.json()
  );

const Default = async () => {
  const posts = await getPosts();

  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <Heading as="h2" fontWeight="bold">
        Default
      </Heading>
      <ol>
        {posts.map((post: { name: string }) => (
          <li key={post.name}>{post.name}</li>
        ))}
      </ol>
    </div>
  );
};

export default Default;
