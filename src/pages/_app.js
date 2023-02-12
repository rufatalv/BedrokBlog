import Layout from "@/components/UI/Layout";
import "@/styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import React from "react";
import { BarLoader } from "react-spinners";



export default function App({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(false);

  const router = useRouter();

  React.useEffect(() => {
    setTimeout(() => setLoading(true), 1000);
  });


  return (
    <Layout>
      <AnimatePresence
        key={router.route}
        initial="initialState"
        transition={{
          duration: 0.75,
        }}
        animate="animateState"
        exit="exitState"
        variants={{
          initialState: {
            opacity: 0,
          },
          animateState: {
            opacity: 1,
          },
          exitState: {},
        }}
      >
        <motion.div
          key={router.route}
          initial="initialState"
          animate="animateState"
          exit="exitState"
          transition={{
            duration: 0.75,
          }}
          variants={{
            initialState: {
              opacity: 0,
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            },
            animateState: {
              opacity: 1,
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            },
            exitState: {
              clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            },
          }}
          className="base-page-size"
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
      {/* {!loading ? (
        <div className="mx-auto">
          <BarLoader color="#000" width={'full'} />
        </div>
      ) : (
        <Component {...pageProps} />
      )} */}
    </Layout>
  );
}
