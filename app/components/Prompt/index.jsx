import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Prompt = ({ when }) => {
  const history = useHistory();

  useEffect(() => {
    if (when) {
      const unblock = history.block((location) => {});
    }
  }, [when]);

  return <div />;
};

export default Prompt;
