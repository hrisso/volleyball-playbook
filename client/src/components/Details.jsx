import { useParams } from 'react-router-dom';

function Details(props) {
  const params = useParams();

  const play = props.plays.find((play) => play.id === params.id)

  if (!play) {
    return (
      <div className="play">
        <h4>Loading...</h4>
      </div>
    );
  }

  return (
    <div className="play">
      <h4>{play.fields.name}</h4>
      <p>{play.fields.type}</p>
      <img src={play.fields.image} alt= "play image"></img>
      <p>{play.fields.description}</p>
      <h5>{play.fields.author}</h5>
    </div>
  )
}

export default Details;