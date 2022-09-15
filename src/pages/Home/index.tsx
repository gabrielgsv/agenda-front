import "dayjs/locale/pt-br";
import { Center } from "@mantine/core";
import Calendar from "../../components/Calendar";

const Home = () => {
  return (
    <Center sx={{ height: "100vh" }}>
      <Calendar />
    </Center>
  );
};

export default Home;
