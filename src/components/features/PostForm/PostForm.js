import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const PostForm = ({ action, actionText, initialData = {} }) => {
  const [formData, setFormData] = useState({
    id: initialData.id || uuidv4(),
    title: initialData.title || '',
    author: initialData.author || '',
    publishedDate: initialData.publishedDate || new Date(),
    shortDescription: initialData.shortDescription || '',
    content: initialData.content || '',
  });

  const [selectedDate, setSelectedDate] = useState(initialData.publishedDate || new Date());

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleContentChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      content: value,
    }));
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    action({
      ...formData,
      publishedDate: selectedDate,
    });
  };

  const renderFormField = (name, label, type = 'text', rows = 1) => (
    <Form.Group className="mb-3" controlId={name}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        as={type === 'textarea' ? 'textarea' : 'input'}
        rows={rows}
        placeholder={`Enter ${label.toLowerCase()}`}
        name={name}
        value={formData[name]}
        onChange={handleChange}
      />
    </Form.Group>
  );

  return (
    <Form onSubmit={handleSubmit}>
      {renderFormField('title', 'Title')}
      {renderFormField('author', 'Author')}
      <Form.Group className="mb-3" controlId="publishedDate">
        <Form.Label>Published</Form.Label><br></br>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="MM/dd/yyyy"
          className="form-control"
        />
      </Form.Group>
      {renderFormField('shortDescription', 'Short description', 'textarea', 3)}
      <Form.Group className="mb-3" controlId="content">
        <Form.Label>Main content</Form.Label>
        <ReactQuill
          value={formData.content}
          onChange={handleContentChange}
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