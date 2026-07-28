import { generateToken } from "../actions/users";
import { getCurrentUser } from "../services/session";
import { redirect } from "next/navigation";
import ReadingList from "./ReadingList";

const MyPage = async () => {
  const user = await getCurrentUser();
  if (!user) redirect("/login");

  return (
    <>
      <div className="mt-15 text-4xl" data-testid="user-profile">
        My info
      </div>
      <div className="mt-15 text-3xl" data-testid="user-username">
        Username: {user.username}
      </div>
      <div className="mt-10 text-3xl" data-testid="user-name">
        Name: {user.name}
      </div>
      <div className="my-10 border-t border-gray-300" />
      <div className="mt-10 text-3xl">
        <h2 className="text-3xl" data-testid="reading-list-section">
          Reading list
        </h2>
        <ReadingList />
      </div>
      <div className="my-10 border-t border-gray-300" />
      <div data-testid="api-token-section">
        {user.token ? (
          <div>
            <div className="mt-10 text-3xl" data-testid="token-display">
              Token:
              <span className="text-2xl ml-3" data-testid="api-token">
                {user.token}
              </span>
            </div>
          </div>
        ) : (
          <div className="mt-10 text-3xl" data-testid="no-token-message">
            No active token
          </div>
        )}
        <form action={generateToken} className="mt-10">
          <button
            type="submit"
            className="button"
            data-testid="generate-token-button"
          >
            Generate new token
          </button>
        </form>
      </div>
    </>
  );
};

export default MyPage;
