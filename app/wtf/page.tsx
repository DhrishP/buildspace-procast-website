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
        {`Sometimes your mind clears up and things start to make sense. Those moments when you suddenly understand why you've been avoiding a task, or when seemingly unrelated pieces of information come together in a meaningful way. It's similar to what Steve Jobs referred to as "connecting the dots."
The same thing can happen when you're exploring philosophy or psychology. You might be reading through someone's ideas from the past, and unexpectedly, your perspective changes. So many cool connections were missed due to no quick access to jote them down so made stream which is like miniblog for my CTD's.(Connecting the Dots) moments`}
      </p>

      <h2 className="text-lg mt-8 tracking-tighter">
        All the jotedowns here 👉
        <Link
          className="underline text-blue-400"
          href={"https://streams.place/whycurious101"}
        >
          stream.place/whycurious101
        </Link>
        <br />( Go against your low dopamine resistance and visit it. Dont worry
        , it loads fast. )
      </h2>
      <div className="mt-12">
        <h3 className="text-lg mt-8 tracking-tighter">
          Some examples of CTD's
        </h3>
        <div className="space-y-4">
          <div className="border-t pt-4">
            <Link
              href={
                "https://streams.place/whycurious101/drops/201004792456323072"
              }
              className="flex justify-between items-center mb-2"
            >
              <span className="text-sm text-gray-100">2024-06-30 16:01</span>
            </Link>
            <p className="text-gray-400">
              We all were soldiers defending our beliefs , but being a scout and
              seeking truth is the new meta
            </p>
          </div>

          <div className="border-t pt-4">
            <Link
              href={
                "https://streams.place/whycurious101/drops/201004225642274816"
              }
              className="flex justify-between items-center mb-2"
            >
              <span className="text-sm text-gray-100">2024-06-30 15:59</span>
            </Link>
            <p className="text-gray-400">
              Kindness is also greed , a greed that should have higher status to
              thrive among humans
            </p>
          </div>
        </div>
      </div>
      <h2 className="text-sm  mt-8 tracking-tighter">
        If you find Streams cool , show some loves to the devs and make one yourself💙
      </h2>
    </section>
  );
}
