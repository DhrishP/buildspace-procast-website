import { BlogPosts } from "app/components/posts";
import Link from "next/link";

export const metadata = {
  title: `CTD's`,
  description:
    "The page for my procastination connecting the dots WTF moments.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl text-blue-300 mb-8  tracking-tighter">
        Connecting the Dots Logs
      </h1>
      <p className="mb-4">
        {`All my sudden WTF procrastination moments saved here. The connecting the dots moment which Steve jobs mentioned, yea that one. The dopamine hits of philosophy and psychology, yeah yeah that moments.🔗`}
      </p>

      <h2 className="text-lg mt-8 tracking-tighter">
        All the dots connecting writing here 👉{" "}
        <Link
          className="underline text-blue-400"
          href={"https://streams.place/whycurious101"}
        >
          stream.place/whycurious101
        </Link>
        <br/>
        ( Go against your low dopamine resistance and visit it. Dont worry , it loads fast. )
      </h2>
<div className="mt-12">
      <h3 className="text-lg mt-8 tracking-tighter">Some examples of CTD's</h3>
      <div className="space-y-4">
        <div className="border-t pt-4">
          <Link href={"https://streams.place/whycurious101/drops/201004792456323072"} className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-100">2024-06-25 16:01</span>
          </Link>
          <p className="text-gray-400">
            By rules of capitalism, leverage on therapy makes sense but still
            there has to be a better way
          </p>
        </div>

        <div className="border-t pt-4">
          <Link href={"https://streams.place/whycurious101/drops/201004225642274816"} className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-100">2024-06-25 15:59</span>
          </Link>
          <p className="text-gray-400">
            Therapy should be cheaper, specially in the information age
          </p>
        </div>
      </div>
      </div>
      <h2 className="text-sm  mt-8 tracking-tighter">
        If you find Streams cool , show some loves to the devs❤️
      </h2>
    </section>
  );
}
