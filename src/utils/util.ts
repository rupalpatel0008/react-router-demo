import Users from "../utils/users.json";

export const getUser = (id: string | undefined) => {
  if (id) {
    const user = Users.find((item) => item?.id === Number(id));
    return user;
  }

  return null;
};
