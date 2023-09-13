import styled from "@emotion/styled";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useGlobalContext } from "../../Context";

export const LoaderStyled = styled.div`
  z-index: 10000;
  background-color: rgba(255, 255, 255, 0.8);
  position: fixed;
  inset: 0;

  &::before {
    content: "";
    display: block;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border-width: 2px;
    border-style: solid;
    border-color: transparent #228ae6 #228ae6;
    position: absolute;
    top: calc(50% - 75px);
    left: calc(50% - 75px);
    will-change: transform;
    animation: spin 0.75s infinite ease-in-out;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const LoaderStyledStyled = motion(LoaderStyled);

const Loader = () => {
  const { isGlobalLoading } = useGlobalContext();
  return (
    <AnimatePresence>
      {isGlobalLoading && (
        <LoaderStyledStyled
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { ease: "linear", duration: 0.3 },
          }}
          exit={{
            opacity: 0,
            transition: { ease: "linear", duration: 0.3 },
          }}
        ></LoaderStyledStyled>
      )}
    </AnimatePresence>
  );
};

export default Loader;
