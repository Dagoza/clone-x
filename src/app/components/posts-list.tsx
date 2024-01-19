"use client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Post, RandomUser } from "../types";
import TwitterCard from "./twitter-card";

const mapRandomUserToPost = (user: RandomUser): Post => ({
  id: user.id.value,
  content: `Hey people, I'm new here in my city ${user.location.city}`,
  user: {
    id: user.id.value,
    name: `${user.name.title} ${user.name.first} ${user.name.last}`,
    user_name: `${user.name.title}_${user.name.last}`,
    avatar_url: `${user.picture.thumbnail}`,
  },
});

export function PostsList({ posts }: { posts: Post[] }) {
  // docs: https://tanstack.com/query/v5/docs/react/guides/suspense
  const { data, isLoading } = useSuspenseQuery<{ results: RandomUser[] }>({
    queryKey: ["randomPosts"],
    queryFn: () =>
      Promise.all([
        fetch("https://randomuser.me/api/?results=50"),
        new Promise((resolve) => setTimeout(resolve, 3000)),
      ]).then(([res]) => res.json()),
  });

  // if (isLoading) return  ;

  return [...posts, ...(data?.results.map(mapRandomUserToPost) ?? [])].map(
    ({
      id,
      content,
      user: { user_name: userName, name, avatar_url: avatarUrl },
    }: Post) => (
      <TwitterCard
        key={id}
        username={userName}
        userFullName={name}
        avatarUrl={avatarUrl}
        content={content}
      />
    )
  );
}
