import AnimatedCursor from 'react-animated-cursor';

const Cursor = () => {
  return (
    <AnimatedCursor
      innerSize={12}
      outerSize={14}
      color="1, 191, 113"
      outerAlpha={0.2}
      innerScale={0.4}
      outerScale={3}
    />
  );
};

export default Cursor;
