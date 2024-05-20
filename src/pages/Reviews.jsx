import { fetchingReviews } from 'Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const Reviews = () => {
  const { id } = useParams();
  const [reviewsArray, setReviewsArray] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchReviewsData = async () => {
      try {
        const reviews = await fetchingReviews(id);
        setReviewsArray(reviews);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching reviews:', error);
        setLoading(true);
      }
    };

    fetchReviewsData();
  }, [id]);

  if (loading) {
    <div>Loading...</div>;
  }
  if (!reviewsArray) {
    return <div>There's no data</div>;
  }

  return (
    <div>
      <h2>Reviews</h2>
      {reviewsArray.length > 0 ? (
        <ul>
          {reviewsArray.map(review => (
            <li key={review.id}>
              <p>{review.author}</p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>There are no reviews.</p>
      )}
    </div>
  );
};

export default Reviews;
