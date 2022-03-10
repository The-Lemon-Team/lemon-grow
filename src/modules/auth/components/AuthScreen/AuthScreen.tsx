import * as React from "react";
import { Box, CssBaseline } from "@mui/material";
import { GoogleLoginButton } from "react-social-login-buttons";
import {
  ThemeProvider,
  adaptV4Theme,
  createMuiTheme,
} from "@mui/material/styles";

const theme = createMuiTheme(
  adaptV4Theme({
    overrides: {
      MuiCssBaseline: {
        "@global": {
          body: {
            height: "100vh",
          },
          "#root": {
            height: "100%",
          },
        },
      },
    },
  })
);

interface IAuthScreenProps {
  onGoogleLogin: () => void;
}

const AuthScreen: React.FunctionComponent<IAuthScreenProps> = ({
  onGoogleLogin,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        width="100%"
        height="100%"
        justifyItems="center"
      >
        <Box width={240}>
          <GoogleLoginButton onClick={onGoogleLogin} />
        </Box>
      </Box>
      <CssBaseline />
    </ThemeProvider>
  );
};

export default AuthScreen;
