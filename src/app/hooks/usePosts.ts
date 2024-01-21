import { useSuspenseQuery } from "@tanstack/react-query";
import { HTTPRequest } from "../http-request";
import { RandomUser } from "../types";

async function fetchPosts() {
  const { results: users } = await HTTPRequest.get<{ results: RandomUser[] }>(
    "https://randomuser.me/api/?results=50"
  );
  return users;
}

export function useFetchPosts() {
  // docs: https://tanstack.com/query/v5/docs/react/guides/suspense
  return useSuspenseQuery<RandomUser[]>({
    queryKey: ["randomPosts"],
    queryFn: fetchPosts,
  });
}
