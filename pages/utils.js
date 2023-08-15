export default function Utils() {
  const cleanDBHandler = async (e) => {
    await fetch("/api/utils", {
      body: JSON.stringify({
        task: "clean_database",
      }),

      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
  };

  const generateDBHandler = async (e) => {
    await fetch("/api/utils", {
      body: JSON.stringify({
        task: "generate_users_and_tweets",
      }),

      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
  };

  const generateOneTweetHandler = async (e) => {
    await fetch("/api/utils", {
      body: JSON.stringify({
        task: "generate_one_tweet",
      }),

      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
  };

  return (
    <div className="mt-10 ml-20">
      <h2 className="mb-10 mt-10 text-lg">Utils</h2>

      <div className="flex-1 mb-5">
        <button
          onClick={cleanDBHandler}
          className="border px-4 py-2 mt-10 ml-10 font-bold text-white rounded-full bg-sky-500/60 hover:bg-sky-500/75"
        >
          Clean Database
        </button>

        <button
          onClick={generateDBHandler}
          className="border px-4 py-2 mt-10 ml-10 font-bold text-white rounded-full bg-sky-500/60  hover:bg-sky-500/75"
        >
          Generate Users and Tweets
        </button>

        <button
          onClick={generateOneTweetHandler}
          className="border px-4 py-2 mt-10 ml-10 font-bold  text-white rounded-full bg-sky-500/60  hover:bg-sky-500/75"
        >
          Generate 1 new tweet
        </button>
      </div>
    </div>
  );
}
