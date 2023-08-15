import prisma from "./prisma";

// get all tweets
export const getTweets = async (prisma, take) => {
  const tweets = await prisma.tweet.findMany({
    where: {},
    orderBy: [
      {
        id: "desc",
      },
    ],
    include: {
      author: true,
    },
    take,
  });
  return tweets;
};

// get single tweet
export const getTweet = async (id, prisma) => {
  const tweet = await prisma.tweet.findUnique({
    where: {
      id: parseInt(id),
    },

    include: {
      author: true,
    },
  });
  return tweet;
};

// get user specific tweets

export const getUserTweets = async (name, prisma) => {
  const tweets = await prisma.tweet.findMany({
    where: {
      author: {
        name: name,
      },
    },
    orderBy: [{ id: "desc" }],
    include: {
      author: true,
    },
  });
  return tweets;
};
