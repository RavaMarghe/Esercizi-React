import { useGithubUser } from "./useGithubUser";

export function GithubUser({username}) {
  const { userData, userError, onRefresh, genericError, loading } = useGithubUser(username);

  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {genericError && <h1>There has been an error</h1>}
      {userData && <h1>Id: {userData.id}</h1>}
      {userData && <p>Name: {userData.name}</p>}
      {userData && <p>Location: {userData.location}</p>}

      {userError && <p>User not found!</p>}
      <button onClick={onRefresh}>Refresh</button>
    </div>
  );
}
