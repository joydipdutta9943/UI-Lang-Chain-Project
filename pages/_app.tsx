import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../theme";
import "../styles/global.css";
import { QueryClientProvider, QueryClient } from "react-query";

type MyAppProps = AppProps & {
  Component: any;
};

const queryClient = new QueryClient();

function App({ Component, pageProps }: MyAppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
