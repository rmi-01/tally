import { Container } from "@chakra-ui/react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Container minH="100vh">{children}</Container>;
}
