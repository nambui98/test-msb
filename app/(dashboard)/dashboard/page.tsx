import { getCurrentUser } from "@/lib/session";
import { notFound } from "next/navigation";
import UserInfo from "./components/user-info";

type Props = {};

export default async function page({}: Props) {
  const user = await getCurrentUser();
  if (!user) {
    return notFound();
  }
  return (
    <div>
      <UserInfo user={user} />
    </div>
  );
}
