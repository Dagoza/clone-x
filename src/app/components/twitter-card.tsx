import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Link,
} from "@nextui-org/react";
import {
  IconHeartCode,
  IconHeartFilled,
  IconMessageCircle,
  IconRepeat,
} from "@tabler/icons-react";
import { useFavoritePostsStore } from "../store/FavoritePosts";

export default function TwitterCard({
  id,
  username,
  userFullName,
  avatarUrl,
  content,
  isFavorite,
}: {
  id: string;
  username: string;
  userFullName: string;
  avatarUrl: string;
  content: string;
  isFavorite: boolean;
}) {
  const { addFavoritePost, removeFavoritePost } = useFavoritePostsStore();

  const toggleFavorite = () => {
    isFavorite ? removeFavoritePost(id) : addFavoritePost(id);
  };
  return (
    <Card className="shadow-none bg-transparent hover:bg-slate-800 transition border-b rounded-none cursor-pointer border-white/20">
      <CardHeader className="justify-between">
        <div className="flex gap-x-2">
          <Link href={"/username"}>
            <img
              className="rounded-full w-9 h-9 object-contain"
              src={avatarUrl}
              alt="avatar"
            />
          </Link>
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              {userFullName}
            </h4>
            <h5 className="text-small tracking-tight text-default-400">
              @{username}
            </h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-white">
        <p>{content}</p>
      </CardBody>
      <CardFooter className="gap-3 text-white">
        <button>
          <IconMessageCircle />
        </button>
        <button>
          <IconRepeat />
        </button>
        <button onClick={toggleFavorite}>
          {isFavorite ? <IconHeartFilled /> : <IconHeartCode />}
        </button>
      </CardFooter>
    </Card>
  );
}
