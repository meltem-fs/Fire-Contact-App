import { Box, Grid, Stack, TextField } from "@mui/material";
import React from "react";

const Form = () => {
  return (
    <div>
      <Grid>
        <div>
          <a href="#">
            <code> {"<Anka/>"} </code>
          </a>

          <h2>DESIGN</h2>
        </div>
        <div>
          <h1>ADD CONTACT</h1>
        </div>

        <Box>
          <form>
            <Stack>
              <TextField></TextField>
            </Stack>
          </form>
        </Box>
      </Grid>
    </div>
  );
};

export default Form;
