import type { AppProps } from "next/app";
import PageLayout from "../components/layout/PageLayout";
import { AnimatePresence } from "framer-motion";
import "../styles/tailwind.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence exitBeforeEnter>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </AnimatePresence>
  );
}

export default MyApp;
