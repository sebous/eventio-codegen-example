import { useGetASpecificEvent } from "../__generated__/default/default";

export default function TestPage() {
  const { data } = useGetASpecificEvent("abc");

  return (
    <div>
      <p>{data?.title}</p>
      <p>{data?.owner?.email}</p>
    </div>
  );
}
