// src/components/Loader.jsx

function Loader() {
  return (

    <div className="loader-wrapper">

      {/* GLOW */}

      <div className="loader-glow"></div>

      {/* MAIN LOADER */}

      <div className="loader-box">

        <div className="loader-ring"></div>

        <div className="loader-avatar">
          LS
        </div>

      </div>

      {/* TEXT */}

      <h1 className="loader-title">
        Latika S
      </h1>

      <p className="loader-sub">
        Mobile Application Developer
      </p>

    </div>
  );
}

export default Loader;