import Link from "next/link";
import { getUsers } from "../services/users";

type User = {
  id: number;
  username: string;
  name: string;
};

const Users = async () => {
  const users = await getUsers();

  return (
    <div>
      <h2 className="text-5xl mr-20 my-10 text-center">Users</h2>
      <ul>
        {users.map((user: User) => (
          <li
            key={user.id}
            className="my-3 p-5 border hover:text-blue-400 text-2xl"
          >
            <Link href={`/users/${user.username}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
