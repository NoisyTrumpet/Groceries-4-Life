const Button = {
  baseStyle: {
    color: "primary",
    borderRadius: "14",
    // borderTopLeftRadius: "22",
    // borderBottomRightRadius: "22",
    // borderBottomLeftRadius: "22",
    transition: "all 0.2s ease-in-out",
    fontFamily: `var(--chakra-fonts-heading)`,
    px: 8,
    py: 6,
    _hover: {
      px: 12,
      py: 6,
    },
  },
  variants: {
    primary: {
      color: "white",
      backgroundColor: "primary",
      // _hover: {
      //   backgroundColor: "secondary",
      // },
    },
    secondary: {
      color: "white",
      backgroundColor: "secondary",
      // _hover: {
      //   backgroundColor: "primary",
      // },
    },
    darkGrey: {
      color: "white",
      backgroundColor: "darkGray",
    },
    success: {},
    alert: {},
    warning: {},
    error: {},
    link: {},
    disabled: {},
  },
};

export default Button;
