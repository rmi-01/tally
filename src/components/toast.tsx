import {
  CheckIcon,
  CloseIcon,
  InfoIcon,
  InfoOutlineIcon,
} from "@chakra-ui/icons";
import { Box, Text } from "@chakra-ui/react";

interface ToastProps {
  count: number;
  type: "add" | "minus" | "reset";
}

export default function Toast({ count, type }: ToastProps) {
  if (type === "add")
    return (
      <Box
        color="white"
        p={4}
        borderRadius={8}
        display={"flex"}
        alignItems={"center"}
        gap={3}
        boxShadow="0px 0px 0px 1px rgba(40, 41, 50, 0.04), 0px 2px 2px -1px rgba(40, 41, 50, 0.04), 0px 4px 4px -2px rgba(40, 41, 50, 0.04), 0px 8px 8px -4px rgba(40, 41, 50, 0.06), 0px 16px 32px rgba(40, 41, 50, 0.06)"
        bg="radial-gradient(53.57% 282.15% at 2.14% 50%, rgba(116, 200, 152, 0.15) 0%, rgba(116, 200, 152, 0.03) 100%), #46474F"
        border="1px solid linear-gradient(0deg, #6F7076, #6F7076), radial-gradient(53.57% 282.15% at 2.14% 50%, rgba(116, 200, 152, 0.65) 0%, rgba(116, 200, 152, 0.1) 100%);"
      >
        <Box
          p={2}
          borderRadius="full"
          w={8}
          h={8}
          border={"3px solid #74C898"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <CheckIcon color="#74C898" boxSize={4} />
        </Box>
        <Box>
          <Text fontWeight={"semibold"} fontSize={"md"}>
            Incremented
          </Text>
          <Text fontSize={"sm"}>Counter is now {count}</Text>
        </Box>
      </Box>
    );

  if (type === "minus")
    return (
      <Box
        color="white"
        p={4}
        borderRadius={8}
        display={"flex"}
        alignItems={"center"}
        gap={3}
        boxShadow="0px 0px 0px 1px rgba(40, 41, 50, 0.04), 0px 2px 2px -1px rgba(40, 41, 50, 0.04), 0px 4px 4px -2px rgba(40, 41, 50, 0.04), 0px 8px 8px -4px rgba(40, 41, 50, 0.06), 0px 16px 32px rgba(40, 41, 50, 0.06)"
        bg="radial-gradient(53.57% 282.15% at 2.14% 50%, rgba(116, 200, 152, 0.15) 10%, rgba(116, 200, 152, 0.03) 100%), #46474F"
        border="1px solid linear-gradient(0deg, #6F7076, #6F7076), radial-gradient(53.57% 282.15% at 2.14% 50%, rgba(116, 200, 152, 0.65) 0%, rgba(116, 200, 152, 0.1) 100%);"
      >
        <Box
          p={2}
          borderRadius="full"
          w={8}
          h={8}
          border={"3px solid #c2172b"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <CloseIcon color="#c2172b" boxSize={3} />
        </Box>
        <Box>
          <Text fontWeight={"semibold"} fontSize={"md"}>
            Decremented
          </Text>
          <Text fontSize={"sm"}>Counter is now {count}</Text>
        </Box>
      </Box>
    );

  if (type === "reset")
    return (
      <Box
        color="white"
        p={4}
        borderRadius={8}
        display={"flex"}
        alignItems={"center"}
        gap={3}
        boxShadow="0px 0px 0px 1px rgba(40, 41, 50, 0.04), 0px 2px 2px -1px rgba(40, 41, 50, 0.04), 0px 4px 4px -2px rgba(40, 41, 50, 0.04), 0px 8px 8px -4px rgba(40, 41, 50, 0.06), 0px 16px 32px rgba(40, 41, 50, 0.06)"
        bg="radial-gradient(53.57% 282.15% at 2.14% 50%, rgba(116, 200, 152, 0.15) 10%, rgba(116, 200, 152, 0.03) 100%), #46474F"
        border="1px solid linear-gradient(0deg, #6F7076, #6F7076), radial-gradient(53.57% 282.15% at 2.14% 50%, rgba(116, 200, 152, 0.65) 0%, rgba(116, 200, 152, 0.1) 100%);"
      >
        <InfoOutlineIcon color="#b8b818" boxSize={8} />
        <Box>
          <Text fontWeight={"semibold"} fontSize={"md"}>
            Reset
          </Text>
          <Text fontSize={"sm"}>Counter is now reset to {count}</Text>
        </Box>
      </Box>
    );

  return null;
}
