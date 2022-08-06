import { Audio } from 'react-loader-spinner';

export default function Spinner() {
  return (
    <Audio
      radius="9"
      color="green"
      ariaLabel="three-dots-loading"
      wrapperStyle
      wrapperClass
    />
  );
}
