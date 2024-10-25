import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";

const Navbar = () => {
  return (
    <Container>
      <Stack
        py={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h4" component={Link} href="/" fontWeight={600}>
          <Box component="span" color="primary.main">
            Health
          </Box>
          Care
        </Typography>
        <Stack direction="row" gap={4} justifyContent="space-between">
          <Typography component={Link} href="/Consultation">
            Consultation
          </Typography>
          <Typography component={Link} href="/Health-Plans">
            Health Plans
          </Typography>
          <Typography component={Link} href="/Medicine">
            Medicine
          </Typography>
          <Typography component={Link} href="/NGOs">
            Diagnostics
          </Typography>
          <Typography component={Link} href="/login">
            NGOs
          </Typography>
        </Stack>
        <Button component={Link} href="/login">
          Login
        </Button>
      </Stack>
    </Container>
  );
};

export default Navbar;
