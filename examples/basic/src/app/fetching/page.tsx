"use client";

import { Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

const Fetching = () => {
  const route = useRouter();

  return (
    <Button onClick={() => route.push("/fetching/default")}>Get started</Button>
  );
};

export default Fetching;
