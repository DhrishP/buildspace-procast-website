import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl text-blue-300 font-semibold tracking-tighter">
        My WriteUps Page
      </h1>
      <p className="mb-4">
        {`Hi, I am Dhrish Parekh. Currently a fullstack developer and probably forever a CURIOUS mind.I write my writeups , thoughts , WTF moments and ideas here. It is a place which has all the not so accurate , authentic writing is done to maximize fun and authenticity. Drop a msg or even a message if you like to discuss stuff. literally anything interesting will work🍾`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
