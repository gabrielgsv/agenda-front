import { ActionIcon } from "@mantine/core";
import { FiMoon, FiSun } from "react-icons/fi";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { toogleTheme } from "../../redux/theme/themeSlicer";
import style from "./button.module.css";

const ButtonTheme = () => {
  const dispatch = useAppDispatch();
  const toggleColorScheme = () => {
    dispatch(toogleTheme());
  };

  const colorScheme = useAppSelector((state) => state.theme.colorScheme);
  return (
    <>
      <ActionIcon
        variant="outline"
        color={colorScheme === "light" ? "blue" : "yellow"}
        onClick={() => toggleColorScheme()}
        title="Toggle color scheme"
        size="xl"
        radius="xl"
        className={style.buttonTheme}
      >
        {colorScheme === "light" ? <FiMoon size={25} /> : <FiSun size={25} />}
      </ActionIcon>
    </>
  );
};

export default ButtonTheme;
