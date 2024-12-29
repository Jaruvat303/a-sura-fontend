import axios from "axios";

const fetchBlog = async (documentId: string) => {
  try {
    const responce = await axios.get(
      `${process.env.STRAPI_BASE_URL}/api/blogs/${documentId}?populate=*`
    );
    console.log(responce.data.data.thumnnail.url);
    return responce.data.data;
  } catch (error) {
    console.log("error", error);
  }
};

export default async function Detail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  const blog = await fetchBlog(id);

  return (
    <div className=" container mx-auto">
      <h1 className="text-2xl">This is Blog {blog.id} </h1>
      <div className="w-full h-96 ">
        <img className="w-full h-full" src={`${blog.thumnnail.url}`} alt="" />
      </div>

      <h1 className="text-2xl">Name {blog.title} </h1>
      <div>
        <p>Created By {blog.author.name}</p>
      </div>
    </div>
  );
}
