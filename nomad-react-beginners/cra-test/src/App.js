import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  // 항상 실행
  console.log("I run all the time");

  // 처음 한 번만 실행
  useEffect(() => {
    console.log("I run only once.");
  }, []);

  // keyword가 변경될 때만 실행
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("I run when 'keyword' changes.");
    }
  }, [keyword]);

  // counter가 변경될 때만 실행
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  });

  // keyword 또는 counter가 변경되면 실행
  useEffect(() => {
    console.log("I run when keyword & counter change.");
  });

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
