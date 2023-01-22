import { signin } from "api/auth";
import { useMutation } from "react-query";
import { useNavigate } from "react-router";
import { Toast } from "utils/toast";
import { setUserToken } from "utils/token";

const useSignInMutation = () => {
  const navigate = useNavigate();
  return useMutation(signin, {
    onSuccess: (res) => {
      setUserToken(res?.data.token);
      navigate("/todo");
      Toast("success", "환영합니다!");
    }
  });
};

export default useSignInMutation;
