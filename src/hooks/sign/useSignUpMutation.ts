import { signup } from "api/auth";
import { useMutation } from "react-query";
import { useNavigate } from "react-router";

const useSignUpMutation = () => {
  const navigate = useNavigate();
  return useMutation(signup, {
    onSuccess: (res) => {
      localStorage.setItem("token", res?.data.token);
      navigate("/todo");
    }
  });
};

export default useSignUpMutation;
