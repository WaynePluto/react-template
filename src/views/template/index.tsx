import { useLoaderData } from "react-router-dom";
import { CountProvider, useCountDispatch, useCountState } from "./hooks/useCount";

export function Template() {
  const { page } = useLoaderData() as { page: string };
  console.log(`page:${page}`);

  return (
    <CountProvider>
      <div className="flex flex-col items-center">
        <span>Hello world! Template page: {page}.</span>
        <Consumer></Consumer>
        <AddCountCom></AddCountCom>
      </div>
    </CountProvider>
  );
}

function Consumer() {
  const { count } = useCountState();
  return <>count:{count}</>;
}
function AddCountCom() {
  const { addCount } = useCountDispatch();
  return (
    <>
      <button onClick={e => addCount(1)}>Add Count</button>
    </>
  );
}
