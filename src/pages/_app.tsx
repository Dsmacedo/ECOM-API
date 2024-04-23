import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./services/queryClient";

export default function App({ Component, pageProps }: AppProps) {
  return (

    <QueryClientProvider client={queryClient}>
      <div className="font-bodyFont">
        <Component {...pageProps} />
      </div>
    </QueryClientProvider>
  )
}
