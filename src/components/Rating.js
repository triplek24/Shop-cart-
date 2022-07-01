import { FaStar } from 'react-icons/fa';

export function Rating({ ratings }) {
  return (
    <div style={{ display: ratings > 0 ? 'block' : 'none' }}>
      {[...Array(5)].map((star, i) => {
        const starRating = i + 1;
        return (
          <label key={i}>
            <input type="radio" name="rating" value={starRating} />
            <FaStar color={starRating <= ratings ? '#ffc107' : '#DEE1E6'} />
          </label>
        );
      })}
    </div>
  );
}
