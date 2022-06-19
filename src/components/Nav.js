import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
const Nav = ({ library, setLibrary }) => {
  const toggleHandler = () => {
    setLibrary(!library);
  };
  return (
    <div className="nav">
      <h1>Waves</h1>
      <button onClick={toggleHandler}>
        Library <FontAwesomeIcon icon={library ? faTimesCircle : faMusic} />
      </button>
    </div>
  );
};

export default Nav;
