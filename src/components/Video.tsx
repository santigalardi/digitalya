const Video = () => {
  return (
    <div className="max-w-4xl mx-auto text-center mt-6 mb-6">
      <div className="relative w-full pb-[50%] h-0 overflow-hidden rounded-xl shadow-lg bg-black">
        <iframe
          src="https://iframe.mediadelivery.net/embed/554669/723e8a02-487a-4ad6-849e-612d20ba231c?autoplay=true&loop=false&muted=true&controls=false"
          loading="lazy"
          className="absolute top-0 left-0 w-full h-full"
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
          allowFullScreen
          style={{ border: 'none' }}
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
