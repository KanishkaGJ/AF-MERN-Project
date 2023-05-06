import React, { useState, useEffect } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import { Input, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./css/Blogform.css";

const useStyles = makeStyles({
  textField: {
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "green", // change the border color when focused
    },
  },
});

export default function UpdateBlog() {
  const classes = useStyles();

  const [title, setTitle] = useState("");
  const [articlebody, setArticlebody] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [image, setImage] = useState(null);
  const [ID, setID] = useState(null);

  useEffect(() => {
    setTitle(localStorage.getItem("title"));
    setArticlebody(localStorage.getItem("articlebody"));
    setImage(localStorage.getItem("image"));
    setID(localStorage.getItem("ID"));
  }, []);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleArticleBodyChange = (event) => {
    setArticlebody(event.target.value);
  };

  const handleSubmit = () => {
    axios.put("http://localhost:8070/imageTest/update/" + ID, {
      title,
      articlebody,
      image,
    });
  };

  return (
    <div className="animalblogform">
      <p className="formTopic">Add Animal Blog</p>
      <form onSubmit={handleSubmit}>
        <img src={image} style={{ width: "100%", height: "auto" }} />
        <br />
        <br />
        <TextField
          id="filled-basic"
          label="Title"
          value={title}
          className={classes.textField}
          onChange={handleTitleChange}
        />
        <br />
        <br />
        <br />

        <TextField
          id="outlined-multiline-static"
          label="Article Body"
          value={articlebody}
          multiline
          rows={10}
          style={{ width: "100%" }}
          className={classes.textField}
          onChange={handleArticleBodyChange}
        />
        <br />
        <br />
        <br />

        <Button
          type="submit"
          variant="contained"
          size="large"
          style={{ backgroundColor: "green", color: "white", width: "20%" }}
        >
          Update
        </Button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}
