import Tweet from "./Tweet";

export function Tweets({ tweets }) {
  if (!tweets) {
    return null;
  }
  return (
    <>
      {tweets.map((tweet, index) => {
        return <Tweet key={index} tweet={tweet} />;
      })}
    </>
  );
}
