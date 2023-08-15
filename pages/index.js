import { Tweets } from "components/Tweets";

import { getTweets } from "lib/data";
import prisma from "lib/prisma";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Index({ tweets }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return null;
  }

  if (session) {
    router.push("/home");
    return;
  }

  return (
    <>
      <div className="mt-10">
        {/* adding 3 tweets on the welcome page */}
        <Tweets tweets={tweets} />
        <div className="text-center p-4 border m-4">
          <h2 className="mb-10"> Join the conversation!</h2>
          <Link
            className="border font-bold rounded-full px-4 py-2"
            href="/api/auth/signin"
          >
            Login{" "}
          </Link>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const take = 3;
  let tweets = await getTweets(prisma, take);
  tweets = JSON.parse(JSON.stringify(tweets));
  return {
    props: { tweets },
  };
}
