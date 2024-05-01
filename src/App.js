import "./App.css";

import Switch from "@mui/material/Switch";
import { useState } from "react";
import Login from "./components/login";
import Signup from "./components/signup";

// Material UI
import Chip from "@mui/material/Chip";
import FaceIcon from "@mui/icons-material/Face";
import Paper from "@mui/material/Paper";
import LockIcon from "@mui/icons-material/Lock";

function App() {



  const [checked, setChecked] = useState(true);

  const handleChange = (e) => {
    setChecked(e.target.checked);
  };

  return (

    <div className="App">
      <Paper elevation={3} style={{ padding: "10px", paddingBottom: "50px" }}>
        <div align="center">
          {checked ? (
            <Chip
              icon={<LockIcon />}
              label="Log In"
              variant="outlined"
              color="warning"

            />
          ) : (
            <Chip
              icon={<FaceIcon />}
              label="Sign Up"
              variant="outlined"
              color="secondary"
            />
          )}
          <br />

          <Switch
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
            color="warning"
          />
        </div>

        {checked ? <Login /> : <Signup />}
      </Paper>
    </div>
  );
}


export default App;

