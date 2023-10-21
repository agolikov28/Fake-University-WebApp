import React from 'react';
import { Link } from 'react-router-dom';
import Chip from './Chip';
import './BlogItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScaleBalanced } from '@fortawesome/free-solid-svg-icons';

const BlogItem = ({
  blog: {
    description,
    title,
    createdAt,
    authorName,
    authorAvatar,
    cover,
    category,
    id,
  },
}) => {
  return (
    <div className='blogItem-wrap'>
      <Link className='blogItem-wrap-link' to={`/blog/${id}`}>
      <img className='blogItem-cover' src={cover} alt='cover' />
      <Chip label={category} />
      <h3>{title}</h3>
      <p className='blogItem-desc'>{description}</p>
      <footer>
        <div className='blogItem-author'>
          {/* //DO ICON INSTEAD */}
          <i class="blogItem-logo"><FontAwesomeIcon icon={faScaleBalanced}/></i>
          <div>
            <h6>{authorName}</h6>
            <p>{createdAt}</p>
          </div>
        </div>
        <Link className='blogItem-link' to={`/blog/${id}`}>
          ➝
        </Link>
      </footer>
      </Link>
    </div>
  );
};

export default BlogItem;