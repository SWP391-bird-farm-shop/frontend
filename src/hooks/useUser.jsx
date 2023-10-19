import { useContext } from "react";
import UserContext from "../context/UserProvider";

const useUser = () => {
    return useContext(useUser);
}

export default useUser;