"use client";
import { useFetchPosts } from "../hooks/usePosts";
import { useFavoritePostsStore } from "../store/FavoritePosts";
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
  const { data: users, isLoading } = useFetchPosts();
  const { favoritePostsIds } = useFavoritePostsStore();

  // if (isLoading) return <CardsListLoader numberOfCards={5} /> ;

  return [...posts, ...(users.map(mapRandomUserToPost) ?? [])].map(
    ({
      id,
      content,
      user: { user_name: userName, name, avatar_url: avatarUrl },
    }: Post) => (
      <TwitterCard
        key={id}
        id={id}
        username={userName}
        userFullName={name}
        avatarUrl={avatarUrl}
        content={content}
        isFavorite={favoritePostsIds.includes(id)}
      />
    )
  );
}
