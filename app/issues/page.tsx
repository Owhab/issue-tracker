import React from "react";

const IssuesPage = async () => {
  const res = await fetch("http://localhost:3000/api/issues");
  const data = await res.json();

  console.log("data", data);

  return <div>IssuesPage</div>;
};

export default IssuesPage;
