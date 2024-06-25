import { BlogPosts } from "app/components/posts";
import Link from "next/link";

export const metadata = {
  title: `WTF'zers`,
  description:
    "The page for my procastination connecting the dots WTF moments.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8  tracking-tighter">
        WTF Logs
      </h1>
      <p className="mb-4">
        {`All my sudden WTF procrastination moments saved here. The connecting the dots moment which Steve jobs moment , yea that one. The dopamine hits of philosophy and psychology, yeah yeah that one.🧠`}
      </p>

      <h2 className="text-lg mt-8 tracking-tighter">
        All the WTF'kies here 👉{" "}
        <Link
          className="underline text-blue-400"
          href={"https://streams.place/whycurious101"}
        >
          stream.place/whycurious101
        </Link>
        <br/>
        (do not worry, it loads fast and also a key tip to support this cool
        thing!!!)
      </h2>

      <h3 className="text-lg mt-8 tracking-tighter">Some examples of WTF'kies</h3>
      <div className="space-y-4">
        <div className="border-t pt-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-100">2024-06-25 16:01</span>
          </div>
          <p className="text-gray-400">
            By rules of capitalism, leverage on therapy makes sense but still
            there has to be a better way
          </p>
        </div>

        <div className="border-t pt-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-100">2024-06-25 15:59</span>
          </div>
          <p className="text-gray-400">
            Therapy should be cheaper, specially in the information age
          </p>
        </div>
      </div>
    </section>
  );
}
