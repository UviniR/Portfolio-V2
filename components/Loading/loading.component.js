// Define your LoadingPage component
import React from "react";
import styles from "@styles/loading.module.css";
import logo from "public/logo.png";



// Define your LoadingPage component
const LoadingPage = () => {
    return (
      <div className={styles.loadingPag}>
     <main className="page-content content-wrapper text-center mt-5 mb-5">
          {/* Your logo */}
          <img src={"https://i.pinimg.com/originals/76/d4/38/76d4388ca811421a7be93a9e12002f5d.gif"} alt="My Logo" className={styles.logo} />
  
          <p>Pls wait till I get everything in order 🥳</p>
        </main>
      </div>
    );
  };
  
  export default LoadingPage;
  