import { signup } from "api/auth";
import { useMutation } from "react-query";
import { useNavigate } from "react-router";
import { Toast } from "utils/toast";
import { setUserToken } from "utils/token";

const useSignUpMutation = () => {
  const navigate = useNavigate();
  return useMutation(signup, {
    onSuccess: (res) => {
      setUserToken(res?.data.token);
      navigate("/todo");
      Toast("success", "환영합니다!");
    }
  });
};

export default useSignUpMutation;
