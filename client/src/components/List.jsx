import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

function List(props) {
  const params = useParams();

  return (
    <section>
      <div className="list">
        {props.plays.filter(
          (play) => play.fields.type === params.type)
          .map((play) => (
            <Link to={`/play/${play.id}`} key={play.id}>
              <div className="play-list">
              <h3>{play.fields.name}</h3>
              </div>
            </Link>
        ))}
      </div>
    </section>
  )
}

export default List;
