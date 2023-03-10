import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { Input } from "../components/Form/Input";
import styles from "../styles/Home.module.css";
// import Input from "../components/Form/input";
import { Flex, Button, Stack, FormLabel, FormControl } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing="4">
          <Input name="email" type="email" label="E-mail"></Input>
          <Input name="password" type="password" label="Senha"></Input>
        </Stack>
        <Button type="submit" mt="6" colorScheme="pink" size="lg">
          ENTRAR
        </Button>
      </Flex>
    </Flex>
  );
}
