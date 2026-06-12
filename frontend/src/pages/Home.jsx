import VideoCard from "../components/VideoCard";
function Home() {
    const videos = [
  {
    title: "React Tutorial",
    channel: "CodeWithHarry",
    thumbnail: "https://picsum.photos/300/180?1"
  },
  {
    title: "Java Full Course",
    channel: "Apna College",
    thumbnail: "https://picsum.photos/300/180?2"
  },
  {
    title: "Spring Boot",
    channel: "Telusko",
    thumbnail: "https://picsum.photos/300/180?3"
  }
];
  return (
    <>
      <h1>Welcome to StreamSphere 🎬</h1>

      <p>Upload, Stream and Share Videos.</p>

      <h2>Featured Videos</h2>
  <div className="video-grid">
      {videos.map((video) => (
  <VideoCard
    thumbnail={video.thumbnail}
    title={video.title}
    channel={video.channel}
  />
))}
  </div>

    </>
  );
}

export default Home;