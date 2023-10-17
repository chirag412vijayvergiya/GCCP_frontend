import React, { useState } from "react";
import AppBar from "./Appbar";
import GoldDataGrid from "./goldDataTable";
import SilverDataGrid from "./silverDataTable";
import BronzeDataGrid from "./bronzeDataTable";
import Footer from "./footer";
import image from "../assets/GDSCHeader.JPG";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Tabs,
  Tab,
} from "@mui/material";
import {
  Instagram,
  LinkedIn,
  MenuBook,
  SupervisedUserCircle,
} from "@mui/icons-material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const Index = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Card>
        <AppBar />
        <CardMedia
          component="img"
          alt="GDSC NMIMS Shirpur"
          height="250"
          image={image}
        />
        <CardContent style={{ margin: "auto" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              sx={{ mx: 3, width: 200 }}
              variant="outlined"
              color="primary"
              href="https://www.cloudskillsboost.google/journeys/36
              "
            >
              <MenuBook sx={{ mx: 3 }} />
              <Typography gutterBottom variant="button">
                GCCF Pathway
              </Typography>
            </Button>
            <Button
              sx={{ mx: 3, width: 200 }}
              variant="outlined"
              color="primary"
              href="https://www.cloudskillsboost.google/games/4518?utm_source=qwiklabs&utm_medium=lp&utm_campaign=arcade23-october-level3"
            >
              <MenuBook sx={{ mx: 3 }} />
              <Typography gutterBottom variant="button">
                Gen AI Pathway
              </Typography>
            </Button>
            <Button
              sx={{ mx: 3, width: 250 }}
              variant="contained"
              color="primary"
              href="mailto:gdscmpstme.shirpur@gmail.com"
            >
              <SupervisedUserCircle sx={{ marginRight: 2 }} />{" "}
              {/* Add margin-right to the icon */}
              <Typography gutterBottom variant="button">
                Contact Us
              </Typography>
            </Button>
          </div>
          <Typography
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "10px",
              alignItems: "center",
            }}
            gutterBottom
            variant="h3"
          >
            <img
              src="https://www.freeiconspng.com/uploads/leaderboard-icon-9.png"
              width="150"
              alt="Leaderboard Icon"
            />
            Leader Board
          </Typography>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs value={value} onChange={handleChange} centered>
                <Tab label="Gold" />
                <Tab label="Silver" />
                <Tab label="Bronze" />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <GoldDataGrid />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <SilverDataGrid />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <BronzeDataGrid />
            </TabPanel>
          </Box>
        </CardContent>
        <CardActions
          style={{
            display: "flex",
            justifyContent: "flex-end",
            margin: "10px",
          }}
        >
          <Button
            size="small"
            color="primary"
            href="https://www.instagram.com/gdsc.mpstmeshirpur/"
          >
            <Instagram />
          </Button>
          <Button
            size="small"
            color="primary"
            href="https://www.linkedin.com/company/gdsc-mpstme-shirpur/"
          >
            <LinkedIn />
          </Button>
        </CardActions>
      </Card>
      <Footer />
    </>
  );
};

export default Index;
