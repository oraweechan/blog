import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";

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

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
}

export default HomePage;

// 1) Hero => Present ourselves
// 2) Featured Posts
