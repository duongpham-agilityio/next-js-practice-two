"use client";

import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  List,
  ListItem,
  useToast,
} from "@chakra-ui/react";
import Link from "next/link";
import { ChangeEvent, ReactNode, useState } from "react";

const FetchingLayout = ({ children }: { children: ReactNode }) => {
  const toast = useToast({
    duration: 1500,
    position: "top-right",
  });
  const [state, setState] = useState("");

  const handleChangeState = (e: ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };

  const handleAddTodo = async () => {
    if (!state) {
      return toast({
        title: "Value empty",
        description: "Please enter some text in the input",
        status: "error",
      });
    }

    const payload = {
      name: state,
      description: "voluptatibus",
      imageURL: "https://loremflickr.com/640/480/fashion",
      price: "818.00",
      quantity: "6",
      isLiked: false,
    };

    fetch("https://64eb6eb1e51e1e82c57759bb.mockapi.io/ap1/v1/todos", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(payload),
    }).then((res) => {
      if (res.ok) {
        return toast({
          title: "Add success",
          description: "Please click on Reload button",
          status: "success",
        });
      }

      return toast({
        title: "Add failed",
        description: "Something went wrong!!!",
        status: "error",
      });
    });
  };

  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <Heading as="h1" fontWeight="bold">
        Difference between force-cache, no-cache, no-store
      </Heading>
      <Flex as="nav" pt={4}>
        <List as="ul" display="flex" gap={5}>
          <ListItem as="li" border="1px solid #000">
            <Link
              href="/fetching/default"
              style={{
                display: "inline-block",
                padding: "8px",
              }}
            >
              Default
            </Link>
          </ListItem>
          <ListItem as="li" border="1px solid #000">
            <Link
              href="/fetching/no-store"
              style={{
                display: "inline-block",
                padding: "8px",
              }}
            >
              No Store
            </Link>
          </ListItem>
          <ListItem as="li" border="1px solid #000">
            <Link
              href="/fetching/revalidate"
              style={{
                display: "inline-block",
                padding: "8px",
              }}
            >
              Revalidate
            </Link>
          </ListItem>
        </List>
      </Flex>

      {children}
      <Box w={300}>
        <Input
          placeholder="Please enter something..."
          value={state}
          onChange={handleChangeState}
        />
      </Box>
      <Flex gap={2} py={5}>
        <Button onClick={handleAddTodo}>Add new data</Button>
        <Button>Reload page</Button>
      </Flex>
    </div>
  );
};

export default FetchingLayout;
