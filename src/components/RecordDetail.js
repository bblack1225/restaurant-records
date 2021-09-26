import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";

export default function RecordDetail(props) {
  const { currentRecord } = props;
  const getScoreValue = (score) => {
    return (score / 100) * 5;
  };
  return (
    <Box
      component="div"
      sx={{
        p: 2,
        minHeight: 500,
        width: { xs: "50%", md: "30%" },
      }}
    >
      <Card>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {currentRecord.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {currentRecord.address}
          </Typography>
          <Box
            sx={{
              width: 200,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box>昱:</Box>
            <Rating
              name="read-only"
              value={getScoreValue(currentRecord.ratingFromTing)}
              precision={0.1}
              readOnly
            />
          </Box>
          <Box
            sx={{
              width: 200,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box>俞:</Box>
            <Rating
              name="read-only"
              value={getScoreValue(currentRecord.ratingFromYu)}
              precision={0.1}
              readOnly
            />
          </Box>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
}
