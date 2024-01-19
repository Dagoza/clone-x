export type Post = {
  id: string;
  content: string;
  user: User;
};

export type User = {
  id: string;
  name: string;
  user_name: string;
  avatar_url: string;
};
