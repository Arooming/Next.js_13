import React from "react";

type Props = {
  children: React.ReactNode;
};

function SearchLayout({ children }: Props) {
  return (
    <div
      className="flex divide-x-2 p-5"
      style={{
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        margin: 0,
      }}
    >
      <div>
        <h1 style={{ fontWeight: "500" }}>Search</h1>
      </div>

      <div className="pl-5">
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
}

export default SearchLayout;
