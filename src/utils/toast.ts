import { toast } from "react-toastify";

export function Toast(type: string, message: string) {
  if (type === "success") {
    toast.success(message, {
      position: "top-right",
      autoClose: 500
    });
  } else if (type === "warning") {
    toast.warning(message, {
      position: "top-right",
      autoClose: 1500
    });
  } else if (type === "error") {
    toast.error(message, {
      position: "top-right",
      autoClose: 1500
    });
  } else if (type === "info") {
    toast.info(message, {
      position: "top-right",
      autoClose: 1000
    });
  }
}
