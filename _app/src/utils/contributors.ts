import contributors from "../data/contributors.json";

export function getContributorInfo(username: string) {
  const contributor = contributors.find((c) => c.username === username);
  return {
    username,
    name: contributor?.name || username,
  };
}
