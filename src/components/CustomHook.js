import { useEffect } from "react";

const useLogger = (message, componentName) => {
  useEffect(() => {
    console.log(`${message} ${componentName}`);
  }, [message, componentName]); // Dependencies array to avoid unnecessary log on re-renders
};

export default useLogger;
