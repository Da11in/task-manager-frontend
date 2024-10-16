import { Box, Button, Paper, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";

function App() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => console.log(data);

  return (
    <Paper
      sx={{
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ display: "flex", flexWrap: "wrap", flexDirection: "column", gap: 2, width: 300 }}
      >
        <Controller
          name="email"
          control={control}
          render={({ field }) => <TextField {...field} label="Email" variant="outlined" />}
        />

        <Controller
          name="password"
          control={control}
          render={({ field }) => <TextField {...field} label="Password" variant="outlined" />}
        />

        <Button variant="contained" size="large" type="submit">
          Login
        </Button>
      </Box>
    </Paper>
  );
}

export default App;
