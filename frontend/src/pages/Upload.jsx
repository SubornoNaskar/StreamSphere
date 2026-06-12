import { useState } from "react";
function Upload() {

const [title, setTitle] = useState("");
const [channel, setChannel] = useState("");
const [thumbnail, setThumbnail] = useState("");

function handleUpload() {
  console.log(title);
console.log(channel);
console.log(thumbnail);
}
  return (
    <div>
      <h2>Upload Video</h2>

      <input
        type="text"
        placeholder="Video Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Channel Name"
        value={channel}
        onChange={(e) => setChannel(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Thumbnail URL"
        value={thumbnail}
        onChange={(e) => setThumbnail(e.target.value)}
      />

      <br /><br />

      <button onClick={handleUpload}>Upload</button>

      <h3>{title}</h3>
<p>{channel}</p>
<p>{thumbnail}</p>
    </div>
  );
}

export default Upload;