import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Categories = () => {
  const categories = useSelector(state => state.categories);
  const posts = useSelector(state => state.posts);

  const getCategoryPostCount = (category) => {
    // Filtruj posty dla danej kategorii
    const filteredPosts = posts.filter(post => post.category === category);
    return filteredPosts.length;
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Category Name</th>
            <th>View Posts</th>
            <th>Post Count</th>
          </tr>
        </thead>
        <tbody>
          {categories.map(category => (
            <tr key={category}>
              <td>{category}</td>
              <td>
                <NavLink to={`/category/${category}`}>Click here</NavLink>
              </td>
              <td>{getCategoryPostCount(category)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Categories;