import { ButtonBaseProps } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import GroupsIcon from "@mui/icons-material/Groups";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";

export const useNavsItems = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isItemActive = (path: string) => path === pathname;

  const navs: NavItem[] = [
    {
      label: "Clients",
      icon: (
        <GroupsIcon
          sx={{
            color: isItemActive("/clients") ? "common.white" : "common.black1",
          }}
        />
      ),
      buttonProps: {
        onClick: () => {
          navigate("/clients");
        },
        active: isItemActive("/clients"),
      },
    },
    {
      label: "Classes",
      icon: (
        <FitnessCenterIcon
          sx={{
            color: isItemActive("/classes") ? "common.white" : "common.black1",
          }}
        />
      ),
      buttonProps: {
        onClick: () => {
          navigate("/classes");
        },
        active: isItemActive("/classes"),
      },
    },
  ];
  return navs;
};

type NavItem = {
  label: string;
  icon?: React.ReactElement;
  buttonProps?: { active: boolean; onClick?: () => void };
};
