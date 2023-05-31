import { Box, Container, Link, Toolbar, Typography } from "@mui/material";
import styled from "@emotion/styled";

const CustomLink = styled(Link)`
  padding: 5px;
  `;

const NavBar = () => {

  return(
    <Container>
      <Toolbar>
        <Typography>
          Kevin's Toolbar
        </Typography>
        <Box>
          {['home','courses','sign up'].map((menuOption) => (
            <CustomLink component="button" variant="body1">
              {menuOption}
            </CustomLink>
          ))}
        </Box>
      </Toolbar>
    </Container>
  )
};

export default NavBar;