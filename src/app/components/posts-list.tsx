import { Post } from "../types";
import TwitterCard from "./twitter-card";

export async function PostsList({ posts }: { posts: Post[] }) {
  return posts.map(
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
