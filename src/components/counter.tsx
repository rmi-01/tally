import { Box, Button, Flex, Text, useToast } from "@chakra-ui/react";
import Toast from "./toast";
import { useCounter } from "@/hooks/useCounter";

export default function Counter() {
  const toast = useToast();
  const { count, increment, decrement, reset } = useCounter();

  const handleCountChange = (type: "minus" | "add" | "reset") => {
    if (type === "minus") {
      let newCount = count - 1;
      decrement();
      toast({
        render: () => <Toast count={newCount} type={type} />,
      });
    } else if (type === "add") {
      let newCount = count + 1;
      increment();
      toast({
        render: () => <Toast count={newCount} type={type} />,
      });
    } else if (type === "reset") {
      reset();
      toast({
        render: () => <Toast count={0} type={type} />,
      });
    }
  };

  return (
    <Box py={"48"}>
      <Text fontSize={"2xl"} fontWeight={"bold"} align={"center"}>
        Tally Count
      </Text>
      <Text fontSize={"9xl"} fontWeight={"bold"} align={"center"}>
        {count}
      </Text>

      <Flex justifyContent={"center"} gap={10} pt={12} pb={6}>
        <Button
          onClick={() => handleCountChange("minus")}
          variant="outline"
          disabled={count === 0}
          w={32}
        >
          <Text fontSize={"md"} fontWeight={"semibold"}>
            Substract
          </Text>
        </Button>
        <Button
          onClick={() => handleCountChange("add")}
          variant="solid"
          w={32}
          bg="gray.300"
        >
          <Text fontSize={"md"} fontWeight={"semibold"}>
            Add
          </Text>
        </Button>
      </Flex>
      <Button
        w={32}
        mx={"auto"}
        onClick={() => handleCountChange("reset")}
        display={"block"}
        variant="ghost"
      >
        <Text fontSize={"sm"} fontWeight={"semibold"}>
          Reset
        </Text>
      </Button>
    </Box>
  );
}
