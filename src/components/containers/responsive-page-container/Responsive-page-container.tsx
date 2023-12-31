import { Box, styled } from "@mui/material";

const ResponsiveContainer = styled(Box)((props) => ({
  backgroundColor: props.theme.palette.background as any,
  [props.theme.breakpoints.down("md")]: {
    marginLeft: "0",
    marginRight: "0",
  },
  [props.theme.breakpoints.up("md")]: {
    marginLeft: "10%",
    marginRight: "10%",
  },
  [props.theme.breakpoints.up("xl")]: {
    marginLeft: "30%",
    marginRight: "30%",
  },
}));

interface ResponsivePageContainerProps {
  children: JSX.Element | JSX.Element[];
}
function ResponsivePageContainer(props: ResponsivePageContainerProps) {
  return <ResponsiveContainer>{props.children}</ResponsiveContainer>;
}

export default ResponsivePageContainer;
