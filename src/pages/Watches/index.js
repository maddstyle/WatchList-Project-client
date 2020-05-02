import React, { useState } from "react";
import { Container } from "./styles";
import axios from "axios";

export default function Watches() {
  const [file, setFile] = useState(null);
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");

  async function setImage(e) {
    const { files } = e.target;
    const data = new FormData();
    data.append("imageUrl", files[0]);
    const response = await axios.post("http://localhost:3001/files", data);
    setFile(response.data);
  }

  async function handleSubmit() {
    const response = await axios.post("http://localhost:3001/createWatch", {
      brand: brand,
      model: model,
      image: file.imageUrl
    });
    console.log(response.data);
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Watch Brand"
          type="text"
          value={brand || ""}
          onChange={e => setBrand(e.target.value)}
        />
        <input
          placeholder="Watch Model"
          type="text"
          value={model || ""}
          onChange={e => setModel(e.target.value)}
        />
        <input type="file" onChange={e => setImage(e)} />
        <button>Submit</button>
      </form>
    </Container>
  );
}
