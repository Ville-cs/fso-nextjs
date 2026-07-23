import { generateToken } from "../actions/users";
import { updateReadStatus } from "../actions/readingList";
import { getCurrentUser } from "../services/session";
import { getFilteredUserReadingLists } from "../services/readingLists";
import { redirect } from "next/navigation";

const MyPage = async () => {
  const user = await getCurrentUser();
  if (!user) redirect("/");

  const unread = await getFilteredUserReadingLists(false);
  const read = await getFilteredUserReadingLists(true);

  return (
    <>
      <div className="mt-15 text-3xl">Username: {user.username}</div>
      <div className="mt-10 text-3xl">Name: {user.name}</div>
      <div className="my-10 border-t border-gray-300" />
      <div className="mt-10 text-3xl">
        <h2 className="text-3xl">Reading list</h2>
        <div className="mt-5">
          <h3 className="text-2xl">Unread</h3>
          <ul>
            {unread?.map((item) => (
              <li key={item.id} className="my-3 p-5 border hover:text-blue-400">
                <p className="text-2xl">{item.blog.title}</p>
                <p className="text-2xl">{item.blog.author}</p>
                <form action={updateReadStatus}>
                  <input type="hidden" name="id" value={item.id} />
                  <button type="submit" className="button">
                    Mark as read
                  </button>
                </form>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-5">
          <h3 className="text-2xl">Read</h3>
          <ul>
            {read?.map((item) => (
              <li key={item.id} className="my-3 p-5 border hover:text-blue-400">
                <p className="text-2xl">{item.blog.title}</p>
                <p className="text-2xl">{item.blog.author}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="my-10 border-t border-gray-300" />
      <>
        <div className="mt-10 text-3xl">Token: {user.token ?? user.token}</div>
        <form action={generateToken} className="mt-10">
          <button type="submit" className="button">
            Generate new token
          </button>
        </form>
      </>
    </>
  );
};

export default MyPage;
