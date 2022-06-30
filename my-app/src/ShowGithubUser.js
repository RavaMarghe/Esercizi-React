import { useParams } from "react-router";
import { GithubUser } from "./GithubUser";

export function ShowGithubUser() {
  let { username } = useParams();

  return <GithubUser username={username = "RavaMarghe"} />;
}
