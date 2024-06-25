import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Buildspace Blog Page (@whycurious101)
      </h1>
      <p className="mb-4">
        {`I write my writings , all my procastinations and my thoughts here. I am writing a little freestlye blogs for now , which I enjoy doing. Hope you do not mind but also let me know you feed on twitter DM's or my email. Thanks for visiting😊`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
