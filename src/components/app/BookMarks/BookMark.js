import React from 'react';
import Flex from 'components/common/Flex';
import { Link } from 'react-router-dom';
import Calendar from 'components/common/Calendar';
import Avatar from 'components/common/Avatar';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import moment from 'moment';

const BookMark = ({ details, isLast }) => {
  const {
    dateModified,
    strMealThumb,
    strMeal,
    strCategory,
    strArea,
    idMeal,
    strTags,
  } = details;
  return (
    <Flex>
      <Calendar month={moment(dateModified.toDate()).format('MMM')} day={moment(dateModified.toDate()).format('DD')} />
      <div className="flex-1 position-relative ps-3">
        <h6 className="fs-0">
          <OverlayTrigger
            key='right'
            placement='right'
            overlay={
              <Tooltip className='text-capitalize'>
                <Avatar src={strMealThumb} size="4xl" className="avatar-profile"
                  mediaClass="img-thumbnail shadow-sm" />
              </Tooltip>
            }
          >
            <Link to={`/mealdetails/${idMeal}`}>
              <span className="me-1">{strMeal}</span>
            </Link>
          </OverlayTrigger>

        </h6>
        <p className="mb-1">
          {strTags && <span
            className="badge border link-secondary text-decoration-none me-1"
          >
            {strTags.replace(/,/g, ', ')}
          </span>}
          <Link
            to={`/category/${strCategory}`}
            className="badge border link-info text-decoration-none me-1"
          >
            {strCategory}
          </Link>
          <Link
            to={`/areas/${strArea}`}
            className="badge border link-success text-decoration-none me-1"
          >
            {strArea}
          </Link>
        </p>

        <p className="badge border link-warning text-decoration-none mb-0">Time: {moment(dateModified.toDate()).format('hh:mm A')}</p>
        {!isLast && <div className="border-dashed-bottom my-3"></div>}
      </div>
    </Flex>
  );
};

export default BookMark;
