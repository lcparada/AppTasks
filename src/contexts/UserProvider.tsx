import { createContext, useState } from "react";

type MyComponentChildren = React.PropsWithChildren;

type UserType = {
  uid: string;
  name: string;
  lastName: string;
  email: string;
};

type UsersType = {
  users: UserType[];
  updateUids: (
    uid: string,
    name: string,
    lastname: string,
    email: string
  ) => void;
  userUidLogged: string;
  receiveUserLogged: (uid: string) => void;
};

const UsersContext = createContext<UsersType>({} as UsersType);

const UsersProvider = ({ children }: MyComponentChildren) => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [userUidLogged, setUserUidLogged] = useState<string>("");

  function updateUids(
    uid: string,
    name: string,
    lastname: string,
    email: string
  ) {
    setUsers([
      ...users,
      { uid: uid, name: name, lastName: lastname, email: email },
    ]);
  }

  function receiveUserLogged(uid: string) {
    setUserUidLogged(uid);
  }

  return (
    <UsersContext.Provider
      value={{ users, updateUids, userUidLogged, receiveUserLogged }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export { UsersContext, UsersProvider };
