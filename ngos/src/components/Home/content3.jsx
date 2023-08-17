const posts = [
  {
    id: 1,
    title: "Work One",
  },
  {
    id: 2,
    title: "Work Two",
  },
  {
    id: 3,
    title: "Work Three",
  },
  {
    id: 4,
    title: "Work Three",
  },
  {
    id: 5,
    title: "Work Three",
  },
];

export default function Content3() {
  return (
    <div className="bg-white py-2">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-2 gap-y-16  border-gray-200   lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex py-48 text-center bg-main max-w-xl  hover:bg-ghover flex-col items-center justify-between"
            >
              <h1 className="text-2xl font-bold text-white">{post.title}</h1>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
