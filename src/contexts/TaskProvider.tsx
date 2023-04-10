import { createContext, useState } from "react";

type MyComponentChildren = React.PropsWithChildren;

type UsersType = {
  uid: string;
  name: string;
  lastName: string;
  email: string;
};

type UpdateType = {
  updateTasks: (id: string) => void;
  idTaskUpdate: string;
  users: UsersType[];
  updateUids: (
    uid: string,
    name: string,
    lastname: string,
    email: string
  ) => void;
};

const UpdateTaskContext = createContext<UpdateType>({} as UpdateType);

const UpdateTaskProvider = ({ children }: MyComponentChildren) => {
  const [idTaskUpdate, setIdTaskUpdate] = useState<string>("");
  const [users, setUsers] = useState<UsersType[]>([]);

  function updateTasks(id: string) {
    setIdTaskUpdate(id);
  }

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

  return (
    <UpdateTaskContext.Provider
      value={{ updateTasks, idTaskUpdate, users, updateUids }}
    >
      {children}
    </UpdateTaskContext.Provider>
  );
};

export { UpdateTaskContext, UpdateTaskProvider };
