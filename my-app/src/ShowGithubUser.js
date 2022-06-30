import { useParams } from "react-router";
import { GithubUser } from "./GithubUser";

export function ShowGithubUser() {
  const { username = "RavaMarghe" } = useParams();

  return <GithubUser username={username} />;
}
