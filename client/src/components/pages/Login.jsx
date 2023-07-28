import React, { useState } from "react";
import Navbar from "./Navbar";

import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Button, Grid, TextField } from "@mui/material";

const Login = () => {
  return (
    <div>
      <Navbar />
      <Box>
        <MediaControlCard />
      </Box>
    </div>
  );
};

export default Login;

function MediaControlCard() {
  const [toggle, setToggle] = useState(false);

  return (
    <Grid>
    {/* grid grid-cols-1 */}
      <div className="lg:w-[80%] grid h-screen place-items-center m-auto">
        <div className="  card card-side bg-base-100 shadow-xl  md:flex sm: grid grid-cols-1 ">
          <div className=" sm:w-[70%]  ">
            {toggle === true ? (
              <figure>
                <img
                  src="https://img.etimg.com/thumb/msid-78829592,width-1070,height-580,imgsize-36654,overlay-etwealthmutualfunds/photo.jpg"
                  alt="Movie"
                />
              </figure>
            ) : (
              <figure>
                <img
                width="80%"
                  src="https://www.claimsjournal.com/app/uploads/2022/01/bigstock-fraud.detection-scaled.jpg"
                  alt="Movie"
                />
              </figure>
            )}
          </div>

          <div className="card-body">
          {toggle === true ? (
          <div className="">
            <Typography component="div" variant="h5" align="center">
              Sign-Up
            </Typography>

            <Grid sx={{ mt: 2 }}>
              <TextField label="User Name" variant="outlined" fullWidth />
            </Grid>
            <Grid sx={{ mt: 2 }}>
              <TextField label="Email" variant="outlined" fullWidth />
            </Grid>
            <Grid sx={{ mt: 2 }}>
              <TextField label="Password" variant="outlined" fullWidth />
            </Grid>
            <Grid sx={{ mt: 2 }}>
              <TextField label="Phone" variant="outlined" fullWidth />
            </Grid>
            <Grid sx={{ mt: 2 }}>
              <Button variant="contained" fullWidth>
                Submit
              </Button>
            </Grid>
            <Grid >
              <Typography align="center">
                already have account Sign In
                <Button
                  style={{ cursor: "pointer" }}
                  onClick={() => setToggle(false)}
                >
                  👉 here
                </Button>
              </Typography>
            </Grid>
          </div>
        ) : (
          <div >
            <Typography component="div" variant="h5" align="center">
              Sign-In
            </Typography>

            <Grid sx={{ mt: 2 }}>
              <TextField label="Email" variant="outlined" fullWidth />
            </Grid>
            <Grid sx={{ mt: 2 }}>
              <TextField label="Password" variant="outlined" fullWidth />
            </Grid>
            <Grid sx={{ mt: 2 }}>
              <Button variant="contained" fullWidth>
                Submit
              </Button>
            </Grid>
            <Grid sx={{ mt: 1 }}>
              <Typography align="center">
                not have account register
                <Button
                  style={{ cursor: "pointer" }}
                  onClick={() => setToggle(true)}
                >
                  👉 here
                </Button>
              </Typography>
            </Grid>
          </div>
        )}
          </div>
        </div>
      </div>
    </Grid>
  );
}
