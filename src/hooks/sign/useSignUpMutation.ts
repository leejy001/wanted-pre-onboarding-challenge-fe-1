import { signup } from "api/auth";
import { useMutation } from "react-query";
import { useNavigate } from "react-router";
import { Toast } from "util/toast";

const useSignUpMutation = () => {
  const navigate = useNavigate();
  return useMutation(signup, {
    onSuccess: (res) => {
      localStorage.setItem("token", res?.data.token);
      navigate("/todo");
      Toast("success", "환영합니다!");
    }
  });
};

export default useSignUpMutation;
