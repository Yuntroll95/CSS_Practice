import React, { useCallback, useState } from "react";

const useInput = (initialForm) => {
  const [info, setInfo] = useState(initialForm);

  // 함수정의
  const handler = useCallback(
    (e) => {
      const { value, name } = e.target;
      setInfo({ ...info, [name]: value });
    },
    [info],
  );
  return [info, handler];
};

export default useInput;
