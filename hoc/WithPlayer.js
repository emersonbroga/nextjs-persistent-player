import Player from '../components/Player';
export const withPlayer = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return (
        <div>
          <Player />
          <WrappedComponent />
        </div>
      );
    }
  };
};
