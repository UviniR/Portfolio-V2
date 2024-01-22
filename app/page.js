// import React from "react";
// import Homepage from "@components/Home/homepage.component.js";

// export default function Home() {

//   return (
//     <main>
//       <Homepage />
//     </main>
//   );
// }
"use client";

import React, { useState, useEffect } from "react";
import Homepage from "@components/Home/homepage.component.js";

export default function Home() {
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Simulate loading time (you can replace this with actual data fetching logic)
  //   const fakeDataLoading = setTimeout(() => {
  //     setLoading(false);
  //   }, 2000); // Adjust the time as needed

  //   // Cleanup the timeout to avoid memory leaks
  //   return () => clearTimeout(fakeDataLoading);
  // }, []);

  return (
    <main>
      {/* {loading ? ( */}
        {/* // Show the loading page while data is being loaded */}
        {/* <LoadingPage /> */}
      {/* ) : ( */}
        {/* // Once data is loaded, display the Homepage component */}
        <Homepage />
      {/* )} */}
    </main>
  );
}
