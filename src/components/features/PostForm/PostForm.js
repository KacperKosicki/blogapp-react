import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const PostForm = ({ action, actionText, initialData = {} }) => {
  const [formData, setFormData] = useState({
    id: initialData.id || uuidv4(),
    title: initialData.title || '',
    author: initialData.author || '',
    publishedDate: initialData.publishedDate || '',
    shortDescription: initialData.shortDescription || '',
    content: initialData.content || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    action(formData);
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
      {renderFormField('publishedDate', 'Published Date')}
      {renderFormField('shortDescription', 'Short Description', 'textarea', 3)}
      {renderFormField('content', 'Main Content', 'textarea', 5)}
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
    publishedDate: PropTypes.string,
    shortDescription: PropTypes.string,
    content: PropTypes.string,
  }),
};

export default PostForm;