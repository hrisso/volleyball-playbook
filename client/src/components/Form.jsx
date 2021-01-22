import { useState } from 'react';
import axios from 'axios';
import { baseURL, config } from "../services";

function Form(props) {
  const [name, setName] = useState("");
  const [type, setType] = useState("Offense");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = { name, type, description, image, author };
    await axios.post(baseURL, {fields: fields}, config)
    console.log("success!");
    props.setToggleFetch((prev) => !prev)
    setName("");
    setType("Offense");
    setDescription("");
    setImage("");
    setAuthor("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Add a New Play to the Playbook!</h4>
      <label htmlFor="name">Name</label>
      <input name="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="type">Type</label>
      <select name="type"
        type="text"
        value={type}
        onChange={(e) => setType(e.target.value)}>
        <option value="Offense">Offense</option>
        <option value="Defense">Defense</option>
      </select>
      <label htmlFor="description">Description</label>
      <input name="description"
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label htmlFor="image">Image Link</label>
      <input name="image"
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <label htmlFor="author">Author</label>
      <input name="author"
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
export default Form;