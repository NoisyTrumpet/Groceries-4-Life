import * as React from "react";
import { chakra, useColorModeValue } from "@chakra-ui/react";

const defaultId = "skip-to-content";

function SkipNavLink({ children = "Skip to content", contentId, ...props }) {
  const id = contentId || defaultId;
  const background = useColorModeValue("bg", "dark.bg");

  return (
    <chakra.a
      {...props}
      border={0}
      height="1px"
      width="1px"
      margin="-1px"
      padding={0}
      overflow="hidden"
      position="absolute"
      _focus={{
        padding: "1rem",
        position: "fixed",
        top: "10px",
        left: "10px",
        background,
        zIndex: "skipLink",
        width: "auto",
        height: "auto",
      }}
      href={`#${id}`}
      data-skip-to-content
    >
      {children}
    </chakra.a>
  );
}

/**
 * Wrap the main content of a page with this, thus also the <main> tag
 */
function SkipNavContent({ children, id: idProp, ...props }) {
  const id = idProp || defaultId;

  return (
    <main {...props} id={id}>
      {children}
    </main>
  );
}

export { SkipNavLink, SkipNavContent };
