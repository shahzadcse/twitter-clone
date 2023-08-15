import timeago from "lib/timeago";
import Image from "next/image";
import Link from "next/link";

export default function Tweet({ tweet }) {
  return (
    <div className="mb-4" style={{ minHeight: "40px" }}>
      <div className="flex flex-shrink-0 p4 pb-0">
        <div className="flex-shrink-0 block group">
          <div className="flex items-center">
            <div>
              {tweet.author.image && (
                <Image
                  className="rounded-full"
                  src={tweet.author.image}
                  alt={tweet.author.name}
                  width="40"
                  height="40"
                />
              )}
            </div>

            <div className="ml-3 -mt-6">
              <p>
                <Link href={`/${tweet.author.name}`}>
                  <a className="color-primary hover:underline">
                    <span className="text-base font-medium leading-6 ">
                      {tweet.author.name}
                    </span>
                  </a>
                </Link>
                <span className="pl-1 text-sm font-light leading-5 color-dimmed">
                  <Link href={`/${tweet.author.name}/status/${tweet.id}`}>
                    <a className="hover:underline">
                      {timeago.format(new Date(tweet.createAt))}
                    </a>
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pl-12 -mt-6">
        <p className="flex-shrink pl-1 pr-2 text-base font-normal color-primary width-auto">
          {tweet.content}
        </p>
      </div>
    </div>
  );
}
