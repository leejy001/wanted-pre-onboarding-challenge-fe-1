import { signin } from "api/auth";
import { useMutation } from "react-query";
import { useNavigate } from "react-router";
import { Toast } from "util/toast";

const useSignInMutation = () => {
  const navigate = useNavigate();
  return useMutation(signin, {
    onSuccess: (res) => {
      localStorage.setItem("token", res?.data.token);
      navigate("/todo");
      Toast("success", "환영합니다!");
    }
  });
};

export default useSignInMutation;
