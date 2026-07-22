import { generateToken } from "../actions/users";
import { getCurrentUser } from "../services/session";
import { redirect } from "next/navigation";

const MyPage = async () => {
  const user = await getCurrentUser();
  if (!user) redirect("/");

  return (
    <>
      <div className="mt-15 text-3xl">Username: {user.username}</div>
      <div className="mt-10 text-3xl">Name: {user.name}</div>
      <div className="mt-10 text-3xl">Token: {user.token ?? user.token}</div>
      <>
        <div className="my-10 border-t border-gray-300" />
        <form action={generateToken}>
          <button type="submit" className="button">
            Generate new token
          </button>
        </form>
      </>
    </>
  );
};

export default MyPage;
