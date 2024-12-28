import Link from "next/link";


export default function BlogCard(
  documentId: string, 
  blogTitle: string,
    blogdescription:string
) {
  return (
    <Link href={`/blogs/${documentId}`}>
    <div className=" max-w mx-auto bg-white rounded-xl shadow-md overflow-hidden  ">

        <div className="md:shrink-1">
          <img
            className="h-48 w-full object-cover  "
            src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"
            alt="Modern building architecture"
          />
        </div>
        <div className="p-8 ">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {blogTitle}
          </div>
        
          <p className="mt-2 text-slate-500 text-ellipsis overflow-hidden line-clamp-2">
          {blogdescription}
          </p>
   
      </div>
    </div>
    </Link>
  );
}
