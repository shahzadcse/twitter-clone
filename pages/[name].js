import { Tweets } from "components/Tweets";
import prisma from "lib/prisma";
import { getUserTweets } from "lib/data";

export default function UserProfile({ name, tweets }) {
  return (
    <>
      <p>User Profile for {name}</p>
      <Tweets tweets={tweets} />
    </>
  );
}

export async function getServerSideProps({ params }) {
  let tweets = await getUserTweets(params.name, prisma);
  tweets = JSON.parse(JSON.stringify(tweets));

  return {
    props: {
      name: params.name,
      tweets,
    },
  };
}
