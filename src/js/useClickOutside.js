import { useEffect } from "react";

export default function useClickOutside(refs, callback) {
  useEffect(() => {
    function handleClickOutside(e) {
      const isOutside = refs.every(
        (ref) => ref.current && !ref.current.contains(e.target)
      );

      if (isOutside) {
        callback();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [refs, callback]);
}