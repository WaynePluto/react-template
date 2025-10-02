import { useLoaderData } from "react-router-dom";
import { CountProvider, useCountDispatch, useCountState } from "./hooks/useCount";

export function Template() {
  const { page } = useLoaderData() as { page: string };
  console.log(`page:${page}`);

  return (
    <CountProvider initialCount={0}>
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
  return <span className="text-count">{count}</span>;
}
function AddCountCom() {
  const { addCount } = useCountDispatch();
  return <button onClick={e => addCount()}>Add Count</button>;
}
