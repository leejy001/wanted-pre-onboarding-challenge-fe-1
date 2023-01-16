import { signin } from "api/auth";
import { useMutation } from "react-query";
import { useNavigate } from "react-router";

const useSignInMutation = () => {
  const navigate = useNavigate();
  return useMutation(signin, {
    onSuccess: (res) => {
      localStorage.setItem("token", res?.data.token);
      navigate("/todo");
    }
  });
};

export default useSignInMutation;
