import React from "react";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { Link } from "gatsby";
import { Text } from "@chakra-ui/react";

interface TextContentProps {
  content: any;
}

function TextContent({ content }: TextContentProps) {
  return (
    <RichText
      content={content}
      renderers={{
        a: ({ children, openInNewTab, href, rel, ...rest }) => {
          if (href && href.match(/^https?:\/\/|^\/\//i)) {
            return (
              <a
                href={href}
                target={openInNewTab ? "_blank" : "_self"}
                rel={rel || "noopener noreferrer"}
                {...rest}
              >
                {children}
              </a>
            );
          }

          return href && <Link to={href}>{children}</Link>;
        },

        p: ({ children, ...rest }) => (
          <Text as="p" display="block">
            {children}
          </Text>
        ),
        bold: ({ children, ...rest }) => (
          <Text
            as="strong"
            fontWeight="bolder"
            display="inline"
            color="primary"
          >
            {children}
          </Text>
        ),
      }}
    />
  );
}

export default TextContent;
