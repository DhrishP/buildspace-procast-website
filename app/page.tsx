import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My WriteUps Page
      </h1>
      <p className="mb-4">
        {`Hi, I am Dhrish Parekh. Currently a fullstack developer and forever a CURIOUS mind.I write my writings , thoughts , WTF moments and ideas here. It is a place which has all the not so accurate , authentic writing to maximize fun and authenticity. I hope you find some interesting here and drop a message or drop a message or maybe schedule a call to connect and learn more🍾`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
