import { Center, Stack } from "@chakra-ui/react";
import Uploader from "../components/Uploader";
import ChatBox from "../components/ChatBox";

export default function IndexPage() {
  return (
    <>
      <Center my='70px'>
        <Stack>
          <Uploader />
          <ChatBox />
        </Stack>
      </Center>
    </>
  );
}
