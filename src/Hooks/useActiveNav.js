import { useState, useRef } from "react";

const useActiveNav = () => {
  const [active, setActive] = useState(null);
  const navRef = useRef();
  const barRef = useRef();
  const closeRef = useRef();

  const handleClick = (e, index) => {
    e.preventDefault();
    setActive(index);
    navRef.current.classList.toggle("navbar_men");
    barRef.current.classList.toggle("nav_bar");
    closeRef.current.classList.toggle("nav_clos");
  };

  return {active, navRef, barRef, closeRef, handleClick};
}

export default useActiveNav