import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const PostForm = ({ action, actionText, initialData = {} }) => {
  console.log(initialData)
  const navigate = useNavigate();
  const { id } = useParams();

  const { register, handleSubmit: validate, formState: { errors } } = useForm();

  const [content, setContent] = useState(initialData.content);
  const [contentError, setContentError] = useState(false);
  const [date, setDate] = useState(initialData.publishedDate || new Date());
  const [dateError, setDateError] = useState(false);

  const handleSubmit = (data) => {
    console.log('siusiak');
    setContentError(!data.content);
    setDateError(!data.publishedDate);

    if (content && date) {
      const preparedData = {...data, publishedDate: date, content, id: initialData.id || uuidv4()};
      console.log(preparedData);
      action(preparedData);
      navigate('/');
    }
  };

  return (
    <Form onSubmit={validate(handleSubmit)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter title"
          name="title"
          defaultValue={initialData.title}
          {...register("title", { required: true, minLength: 3 })}
        />
        {errors.title && <small className="d-block form-text text-danger mt-2">Title is too short (min is 3)</small>}
      </Form.Group>
      <Form.Group className="mb-3" controlId="author">
        <Form.Label>Author</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter author"
          name="author"
          defaultValue={initialData.author}
          {...register("author", { required: true, minLength: 3 })}
        />
        {errors.author && <small className="d-block form-text text-danger mt-2">Author is too short (min is 3)</small>}
      </Form.Group>
      <Form.Group className="mb-3" controlId="publishedDate">
        <Form.Label>Published</Form.Label><br />
        <DatePicker
          selected={date}
          onChange={setDate}
          dateFormat="MM/dd/yyyy"
          className="form-control"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="shortDescription">
        <Form.Label>Short description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter short description"
          name="shortDescription"
          defaultValue={initialData.shortDescription}
          {...register("shortDescription", { required: true, minLength: 20 })}
        />
        {errors.shortDescription && <small className="d-block form-text text-danger mt-2">Short description is too short (min is 20)</small>}
      </Form.Group>
      <Form.Group className="mb-3" controlId="content">
        <Form.Label>Main content</Form.Label>
        <ReactQuill
          defaultValue={initialData.content}
          onChange={setContent}
        />     
      </Form.Group>
      <Button variant="primary" type="submit">
        {actionText}
      </Button>
    </Form>
  );
};

PostForm.propTypes = {
  action: PropTypes.func.isRequired,
  actionText: PropTypes.string.isRequired,
  initialData: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    publishedDate: PropTypes.instanceOf(Date),
    shortDescription: PropTypes.string,
    content: PropTypes.string,
  }),
};

export default PostForm;