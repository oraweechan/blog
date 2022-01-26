import PostHeader from "./post-header";
import classes from './post-content.module.css';

const DUMMY_POST = {
    slug: "getting-started-with-nextjs",
    title: "getting-started-with-nextjs",
    image: "getting-started-nextjs.png",
    excerpt: "NextJS is the React framework for production",
    date: "2022-01-25",
    content: '# This is a first post'
  }

function PostContent() {
    const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

    return(
        <article className={classes.content}>
            <PostHeader title={DUMMY_POST.title} image={imagePath} />
            {DUMMY_POST.content}
        </article>
    )
}

export default PostContent;