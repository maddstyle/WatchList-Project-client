import React, { useState } from "react";
import { Container } from "./styles";
import history from "../../services/history";
import axios from "axios";

export default function UpdateWatch({ location }) {
  const item = location.state ? location.state.item : null;
  const [file, setFile] = useState(null);
  const [brand, setBrand] = useState(item ? item.brand : null);
  const [model, setModel] = useState(item ? item.model : null);

  async function setImage(e) {
    const { files } = e.target;
    const data = new FormData();
    data.append("imageUrl", files[0]);
    const response = await axios.post("http://localhost:3001/files", data);
    setFile(response.data);
  }

  async function handleSubmit() {
    const response = await axios.put(
      `http://localhost:3001/watch/${item._id}`,
      {
        brand: brand,
        model: model,
        image: file.imageUrl
      }
    );
    setBrand(response.data.brand);
    setModel(response.data.model);

    return history.push("/watches");
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input
          defaultValue={brand}
          type="text"
          onChange={e => setBrand(e.target.value)}
        />{" "}
        <input
          placeholder="Watch Model"
          defaultValue={model}
          type="text"
          onChange={e => setModel(e.target.value)}
        />{" "}
        <input type="file" onChange={e => setImage(e)} />{" "}
        <button> Submit </button>{" "}
      </form>{" "}
    </Container>
  );
}
