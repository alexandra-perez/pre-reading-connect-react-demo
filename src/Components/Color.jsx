// src/Components/Colors.jsx
import { Link } from 'react-router-dom';

function Color({ color, id }) {
  return (
    <tr>
      <td>
        {color.isFavorite ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>
        <Link to={`/colors/${id}`}> {color.name}</Link>
      </td>
      <td>
        {' '}
        <span style={{ backgroundColor: color.name }}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
      </td>
    </tr>
  );
}

export default Color;
