import { Spinner, Bar1, Bar2, Bar3 } from './Loadind.styled';

export const Loader = () => {
  return (
    <>
      <Spinner>
        <div>
          <Bar1 />
          <Bar2 />
          <Bar3 />
        </div>
        <h2>...Loading...</h2>
      </Spinner>
    </>
  );
};
