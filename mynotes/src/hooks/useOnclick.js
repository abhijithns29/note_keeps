import { useEffect } from "react";

function useOnclick(ref, handler) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        handler();
      }
    }

    function handleEnterKey(event) {
      if (event.key === "Enter") {
        handler();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEnterKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEnterKey);
    };
  }, [ref, handler]); // Dependencies matter!
}

export default useOnclick;
