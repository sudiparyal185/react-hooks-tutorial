import React from "react";

const Dog = ({ data = {}, handleFetchData = () => {} }) => {
  return (
    <div>
      <h1>Use Effect tutorial</h1>
      <button onClick={handleFetchData}>Fetch Dogs data</button>
      {data && (
        <img
          style={{ width: "500px", height: "500px" }}
          src={data?.message}
          alt='dog'
        />
      )}
    </div>
  );
};

export { Dog };
