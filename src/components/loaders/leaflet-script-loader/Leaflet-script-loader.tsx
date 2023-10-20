// from: https://louisrli.github.io/blog/2020/06/04/react-dynamic-script-hook/
import { useEffect } from "react";

interface ScriptLoaderProps {
  id: string;
  url: string;
}
export function useScriptLoader(
  { id, url }: ScriptLoaderProps,
  callback?: () => void
) {
  useEffect(() => {
    const existingScript = document.getElementById(id);

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = url;
      script.id = id;
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
        if (callback) {
          callback();
        }
      };
    }

    if (existingScript && callback) {
      callback();
    }

    return () => {
      if (existingScript && callback) {
        existingScript.remove();
      }
    };
  });
}
