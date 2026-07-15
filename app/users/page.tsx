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
      <h2>Users</h2>
      <ul>
        {users.map((user: User) => (
          <li key={user.id}>
            <Link href={`/users/${user.username}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
