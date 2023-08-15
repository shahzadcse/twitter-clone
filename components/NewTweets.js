import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function NewTweet() {
  const { data: session } = useSession();
  const [content, setContent] = useState("");
  const router = useRouter();

  // don't display if not logged in
  if (!session || !session.user) {
    return null;
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!content) {
      return;
    }
    //alert(content);
    await fetch("/api/tweet", {
      body: JSON.stringify({
        content,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    router.reload(window.location.pathname);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="flex">
          <div className="flex-1 px-1 pt-2 mt-2 mr-1 ml-1">
            <textarea
              className="border p4 w-full text-lg font-medium bg-transparent outline-none color-primary"
              placeholder="What's happening?"
              name="content"
              rows={2}
              cols={50}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </div>
        <div className="flex">
          <div className="flex-1 mb-5">
            <button className="border float-right px-8 py-2 mt-0 mr-2 font-bold rounded-full">
              Tweet
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
