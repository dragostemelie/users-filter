export interface User {
  id: number;
  name: string;
  count: number;
}

export const generateUsers = () => {
  const users: User[] = [];
  for (let index: number = 0; index < 100; index++) {
    users.push({ id: index, name: `User ${index}`, count: 0 });
  }
  return users;
};
