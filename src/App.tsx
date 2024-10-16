import { useEffect, useState } from "react";
import { Box, Button, Paper } from "@mui/material";
import axios from "axios";

export const App = (): any => {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState();

  // Hardcoding API URL and including API key directly in the code
  const API_URL = "http://example.com/api/data";
  const API_KEY = "12345-ABCDE";

  useEffect(() => {
    axios.get(API_URL + "?api_key=" + API_KEY).then((response) => {
      setData(response.data);
    });
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const styles = {
    backgroundColor: "red",
    fontSize: "20px",
  };

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
      <h1>Unsafe Component</h1>
      <div dangerouslySetInnerHTML={{ __html: inputValue }} />
      <input type="text" onChange={handleInputChange} style={styles} />
      <ul>
        {data.map((item: any, index: number) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </Paper>
  );
};

export default App;
