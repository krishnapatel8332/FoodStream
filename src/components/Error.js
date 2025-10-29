import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>Oops Something went wrong</h1>
      <div>
        <h2>
          {err.status}:{err.statusText}
        </h2>
      </div>
    </div>
  );
};

export default Error;
