import { Button, Form } from "react-bootstrap";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../../redux/postsRedux";
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const AddPostForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    publishedDate: "",
    shortDescription: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const postId = uuidv4();

    const newPost = {
      id: postId,
      title: formData.title,
      author: formData.author,
      publishedDate: formData.publishedDate,
      shortDescription: formData.shortDescription,
      content: formData.content,
    };

    dispatch(addPost(newPost));

    setFormData({
      title: "",
      author: "",
      publishedDate: "",
      shortDescription: "",
      content: "",
    });

    navigate("/");
  };

  return (
    <div>
      <h2>Add Post</h2>
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="author">
        <Form.Label>Author</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter author"
          name="author"
          value={formData.author}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="publishedDate">
        <Form.Label>Published</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter published date"
          name="publishedDate"
          value={formData.publishedDate}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="shortDescription">
        <Form.Label>Short description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter short description"
          name="shortDescription"
          value={formData.shortDescription}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="content">
        <Form.Label>Main content</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          placeholder="Enter main content"
          name="content"
          value={formData.content}
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add Post
      </Button>
    </Form>
    </div>
  );
};

export default AddPostForm;