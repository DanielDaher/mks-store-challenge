"use client";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from "styled-components";
import StyledComponentsRegistry from "./registry";
import GlobalStyles from "@/styles/GlobalStyles";
import theme from "@/styles/theme";

const queryClient = new QueryClient();

const Providers = (props: React.PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
      <StyledComponentsRegistry>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          {props.children}
        </ThemeProvider>
      </StyledComponentsRegistry>
    </QueryClientProvider>
  );
};

export default Providers;