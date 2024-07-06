import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Cards({ image, id, title, desc }) {
  const navigate = useNavigate();
  const on_Click_Handle = () => {
    navigate(`/ProductDetails/${id}`);
  };
  return (
    <div className="h-[500px] ">
      <Card
        sx={{
          maxWidth: "100%",
          marginX: "10px",
          marginY: "20px",
          borderRadius: "0.375rem",
        }}
      >
        <CardActionArea onClick={on_Click_Handle}>
          <CardMedia
            component="img"
            height="140px"
            sx={{ height: "350px", padding: "10px" }}
            image={image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title.substring(0, 15)}.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {desc.substring(0, 85)}.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
