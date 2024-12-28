import BlogCard from "./components/card";
import Header from "./components/header";
import axios from "axios";

const fetchBlogs = async () => {
  try {
    const responce = await axios.get(
      `${process.env.STRAPI_BASE_URL}/api/blogs`
    );
    return responce.data.data;
  } catch (error) {
    console.log("error", error);
  }
};

export default async function Home() {
  const blogs = await fetchBlogs();
  return (
    <div className="grid gap-10">
      <Header></Header>

      <div>
        <h1 className="text-4xl font-bold text-center">Welcome to Asura</h1>
        <p className="text-center text-slate-500">
          The place where you can find the best blog for your life
        </p>
      </div>

      <div className="mx-5 md:mx-20">
        <div className="flex grid-cols-2  justify-between my-5">
          <h2>Title</h2>
          <h1>Read More</h1>
        </div>
        <div className="grid md:grid-cols-3 gap-4 ">
          {blogs.map((blog: any, index: string) => {
            return (
              <div key={index}>
                {BlogCard(blog.documentId, blog.title, blog.desciption)}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mx-5 md:mx-20">
        <div className="flex grid-cols-2  justify-between my-5">
          <h2>Title</h2>
          <h1>Read More</h1>
        </div>
        <div className="grid md:grid-cols-3 gap-4 "></div>
      </div>
    </div>
  );
}
