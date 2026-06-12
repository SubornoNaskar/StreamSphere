import "./VideoCard.css";
function VideoCard(props) {
  return (
    <div className="video-card">
      <img
        src={props.thumbnail}
        alt="thumbnail"
      />

      <h3>{props.title}</h3>

      <p>{props.channel}</p>
    </div>
  );
}

export default VideoCard;