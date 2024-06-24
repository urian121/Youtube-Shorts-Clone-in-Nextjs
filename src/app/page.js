import AutoPlayVideo from "./components/AutoPlayVideo";
export default function Home() {
  let videos = ["video1.mp4", "video2.mp4", "video3.mp4", "video4.mp4", "video5.mp4", "video6.mp4"];
  return (
    <>
      <h1 className="title">
        Clon Shorts de YouTube 😯 <hr />
      </h1>
      <div className="videoContainer">
        <div className="videoList">
          {videos.map((video) => (
            <AutoPlayVideo key={video} src={`/videos/${video}`} />
          ))}
        </div>
      </div>
    </>
  );
}
