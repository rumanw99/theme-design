import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useSignout = () => {
  const navigate = useNavigate();
  const client = useQueryClient();

  return () => {
    localStorage.clear();
    client.clear();
    navigate("/login");
  };
};
