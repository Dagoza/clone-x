import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AuthButtonServer } from "./components/auth-buttons-server";
import { ComposePost } from "./components/compose-post";
import { PostsList } from "./components/posts-list";
import { Post } from "./types";

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });
  const { data: posts } = await supabase
    .from("posts")
    .select("*, user:users(name, avatar_url, user_name)");
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session === null) {
    redirect("/login");
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="max-w-[600px] w-full mx-auto border-l border-r border-white/20 min-h-screen">
        <ComposePost avatarUrl={session?.user?.user_metadata?.avatar_url} />
        <PostsList posts={posts as Post[]} />
      </section>
      <AuthButtonServer />
    </main>
  );
}
