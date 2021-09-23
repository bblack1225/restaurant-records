import React from "react";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  height: 60,
  lineHeight: "60px",
  marginBottom: 10,
  borderRadius: "0.5rem",
  boxShadow: "0.1rem 0.1rem 0.5rem rgba(0, 0, 0, 0.171)",
  paddingTop: 5,
  paddingBottom: 5,
}));

const Title = styled(Typography)(({ theme }) => ({
  ...theme.typography.body2,
  fontWeight: 700,
  textAlign: "center",
}));

export default function Records() {
  return (
    <Box
      component="div"
      sx={{
        p: 2,
        borderRight: "0.2rem solid rgba(58, 58, 58, 0.548)",
        minHeight: 500,
        width: { xs: "50%", md: "30%" },
        textAlign: "center",
      }}
    >
      {/* {[0, 1, 2, 3, 4, 6, 8, 12, 16, 24].map((elevation) => (
        <Item key={elevation}>{`elevation=${elevation}`}</Item>
      ))} */}
      <Item>
        <Title component="p">盈咖哩飯專門</Title>
        <Rating
          name="read-only"
          value={4.5}
          readOnly
          precision={0.5}
          size="small"
        />
      </Item>
      <Item>
        <Title component="p">豆花鄉</Title>
        <Rating name="read-only" value={4} readOnly size="small" />
      </Item>
      <Item>
        <Title component="p">和美冰果室</Title>
        <Rating name="read-only" value={5} readOnly size="small" />
      </Item>
    </Box>
  );
}
