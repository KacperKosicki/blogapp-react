import React from 'react';
import { useSelector } from 'react-redux';
import { Card, Button, Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import formatDate from '../../../utils/DateToStr/DateToStr';

const Posts = () => {
  const posts = useSelector(state => state.posts);

  return (
    <div>
       <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="mb-4">All posts</h2>
        <NavLink to="/post/add">
          <Button variant="btn btn-outline-primary">Add post</Button>
        </NavLink>
      </div>
      <Row>
        {posts.map(post => (
          <Col key={post.id} md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <div className="author-info">
                  <div className="author-label"><strong>Author:</strong> {post.author}</div>
                </div>
                <div className="published-info">
                  <div className="published-label"><strong>Published:</strong> {formatDate(post.publishedDate)}</div>
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
    </div>
  );
};

export default Posts;