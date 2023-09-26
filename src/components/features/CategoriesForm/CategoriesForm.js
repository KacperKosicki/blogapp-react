import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Card, Button, Col, Row } from 'react-bootstrap';
import formatDate from '../../../utils/DateToStr/DateToStr';
import { NavLink } from 'react-router-dom';
import styles from './CategoriesForm.module.scss'

const CategoriesForm = () => {
  const { categoryName } = useParams();
  const posts = useSelector(state => state.posts);

  const filteredPosts = posts.filter(post => post.category === categoryName);

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="mb-0">Category: {categoryName}</h2>
      </div>
      {filteredPosts.length === 0 ? (
        <p className={styles.noPosts}>No posts in this category</p>
      ) : (
        <Row>
          {filteredPosts.map(post => (
            <Col md={4} className="mb-4" key={post.id}>
              <Card>
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <div className="author-info">
                    <div className="author-label"><strong>Author:</strong> {post.author}</div>
                  </div>
                  <div className="published-info">
                    <div className="published-label"><strong>Published:</strong> {formatDate(post.publishedDate)}</div>
                    <div className="category-label"><strong>Category:</strong> {post.category}</div>
                  </div>
                  <Card.Text className="mt-2">{post.shortDescription}</Card.Text>
                  <NavLink to={`/post/${post.id}`}>
                    <Button variant="primary">Read more</Button>
                  </NavLink>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default CategoriesForm;