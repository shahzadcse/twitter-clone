import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import NewTweet from "components/NewTweets";
import { Tweets } from "components/Tweets";
import prisma from "lib/prisma";
import { getTweets } from "lib/data";

export default function Home({ tweets }) {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  const router = useRouter();
  if (loading) {
    return null;
  }
  if (!session) {
    router.push("/");
  }
  if (session && !session.user.name) {
    router.push("/setup");
  }
  return (
    <>
      <NewTweet />
      <Tweets tweets={tweets} />
    </>
  );
}

export async function getServerSideProps() {
  let tweets = await getTweets(prisma);
  // this line is for serialization of the json object
  //createdAt is a returned by Prisma as a Date object,
  // but getServerSideProps returns data as JSON - encoded,
  // and JSON does not support Date objects.So what we do is,
  //we transform that object into a string, and then back into an object.
  tweets = JSON.parse(JSON.stringify(tweets));

  return {
    props: {
      tweets,
    },
  };
}
