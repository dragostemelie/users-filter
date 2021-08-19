import React, { useState, useEffect } from "react";
import { useDebounce } from "./hooks/useDebounce";
import { User, generateUsers } from "./getUsers";
import { Search, User as UserBox, Layout } from "./components";

function App() {
  //State
  const [searchValue, setSearchValue] = useState<string>("");
  const [usersList, setUsersList] = useState<User[]>(generateUsers());
  const [filteredList, setFilteredList] = useState<User[]>(generateUsers());
  const [deletedUsers, setDeletedUsers] = useState<number[]>([]);

  //Custom debounce hooks
  const debouncedSearchValue = useDebounce<string>(searchValue, 500);
  const debouncedDeletedUsers = useDebounce<number[]>(deletedUsers, 500);

  //Update search value
  const handleUpdateSearchValue = (value: string) => {
    setSearchValue(value);
  };

  //Update users count
  const handleUserClick = (userId: number) => {
    setUsersList((prevList) => {
      const currentList = [
        ...prevList.map((user) => ({
          ...user,
          count: user.id !== userId ? user.count + 1 : user.count,
        })),
      ];
      setFilteredList([
        ...currentList.filter(
          (user) =>
            searchValue.length === 0 ||
            user.name.toUpperCase().includes(searchValue.toUpperCase())
        ),
      ]);
      return currentList;
    });
    //Filter by search value
  };

  //Remove user by id
  const handleUserRemove = (userId: number) => {
    setDeletedUsers([...deletedUsers, userId]);
  };

  //Debounce effect
  useEffect(() => {
    //Update userList => filter current userList
    setUsersList((prevList) => {
      const currentList = [
        ...prevList.filter((user) => !deletedUsers.includes(user.id)),
      ];
      setFilteredList([
        ...currentList.filter(
          (user) =>
            searchValue.length === 0 ||
            user.name.toUpperCase().includes(searchValue.toUpperCase())
        ),
      ]);
      return currentList;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchValue, debouncedDeletedUsers]);

  return (
    <Layout.Main>
      <Layout.Aside>
        <Search
          value={searchValue}
          placeholder="Search users"
          onChange={handleUpdateSearchValue}
        />
      </Layout.Aside>
      <Layout.Article>
        {filteredList.map((user) => (
          <UserBox
            key={user.id}
            username={user.name}
            clickcount={user.count}
            className={deletedUsers.includes(user.id) ? "deleted" : ""}
            onUserClick={() => handleUserClick(user.id)}
            onRemove={() => handleUserRemove(user.id)}
          />
        ))}
      </Layout.Article>
    </Layout.Main>
  );
}

export default App;
