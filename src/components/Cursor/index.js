import AnimatedCursor from 'react-animated-cursor';

const Cursor = () => {
  return (
    <AnimatedCursor
      innerSize={10}
      outerSize={16}
      color="250, 30, 14"
      outerAlpha={0.2}
      innerScale={0.4}
      outerScale={3}
    />
  );
};

export default Cursor;
