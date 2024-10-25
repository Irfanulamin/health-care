import { Box, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <Box bgcolor="rgb(17,26,34)" padding={5}>
      <Container>
        <Stack
          direction="row"
          gap={4}
          justifyContent="center"
          paddingBottom={2}
        >
          <Typography color="#fff" component={Link} href="/Consultation">
            Consultation
          </Typography>
          <Typography color="#fff" component={Link} href="/Health-Plans">
            Health Plans
          </Typography>
          <Typography color="#fff" component={Link} href="/Medicine">
            Medicine
          </Typography>
          <Typography color="#fff" component={Link} href="/NGOs">
            Diagnostics
          </Typography>
          <Typography color="#fff" component={Link} href="/login">
            NGOs
          </Typography>
        </Stack>
        <div className="border border-dashed"></div>
        <Stack direction="row" gap={2} justifyContent="center" py={3}>
          <Typography component="p" color="white">
            &copy; 2024 HealthCare. All Rights Reserved.
          </Typography>
        </Stack>
        <Stack direction="row" gap={2} justifyContent="center" py={2}>
          <Typography variant="h4" component={Link} href="/" fontWeight={600}>
            <Box component="span" color="primary.main">
              Health
            </Box>
            <Box component="span" color="white">
              Care
            </Box>
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
