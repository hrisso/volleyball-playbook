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
          <div className="play list">
            <Link to={`/play/${play.id}`} key={play.id}>
              {play.fields.name}
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export default List;
