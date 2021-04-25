import AnimatedCursor from 'react-animated-cursor';
import { useGlobalContext } from '../../context/context';

const Cursor = () => {
  const { theme } = useGlobalContext();
  const color = theme === 'dark' ? '1, 191, 113' : '204, 0, 0';
  return (
    <AnimatedCursor
      innerSize={10}
      outerSize={16}
      color={color}
      outerAlpha={0.2}
      innerScale={0.4}
      outerScale={3}
    />
  );
};

export default Cursor;
