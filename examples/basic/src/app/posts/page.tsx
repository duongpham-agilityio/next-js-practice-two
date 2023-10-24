const getPosts = async () =>
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => data.slice(0, 10));

const Post = async () => {
  const posts = await getPosts();

  return (
    <ul>
      {posts.map((post: { title: string }) => (
        <li key={post.title}>{post.title}</li>
      ))}
    </ul>
  );
};

export default Post;
