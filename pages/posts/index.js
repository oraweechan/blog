import AllPosts from "../../components/posts/all-posts";

const DUMMY_POSTS = [
    {
      slug: "getting-started-with-nextjs",
      title: "getting-started-with-nextjs",
      image: "getting-started-nextjs.png",
      excerpt: "NextJS is the React framework for production",
      date: "2022-01-25",
    },
    {
      slug: "getting-started-with-nextjs2",
      title: "getting-started-with-nextjs",
      image: "getting-started-nextjs.png",
      excerpt: "NextJS is the React framework for production",
      date: "2022-01-25",
    },
    {
      slug: "getting-started-with-nextjs3",
      title: "getting-started-with-nextjs",
      image: "getting-started-nextjs.png",
      excerpt: "NextJS is the React framework for production",
      date: "2022-01-25",
    },
    {
      slug: "getting-started-with-nextjs4",
      title: "getting-started-with-nextjs",
      image: "getting-started-nextjs.png",
      excerpt: "NextJS is the React framework for production",
      date: "2022-01-25",
    },
  ];

function AllPostsPage() {
    return (
        <AllPosts posts={DUMMY_POSTS} />
    )
}

export default AllPostsPage;