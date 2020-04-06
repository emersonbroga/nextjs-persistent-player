export default React.memo(function MyComponent(props) {
  console.log('*** Player rendered');
  return (
    <video width="320" height="240" controls>
      <source src="/video-low.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
});
