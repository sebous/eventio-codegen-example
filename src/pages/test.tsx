import { useQueryClient } from "@tanstack/react-query";
import {
  useGetASpecificEvent,
  useCreateAnEvent,
  getListAllEventsQueryKey,
} from "../__generated__/eventio";
import { useGetPets } from "../__generated__/petstore";

export default function TestPage() {
  const queryClient = useQueryClient();
  const { data } = useGetASpecificEvent("abc");

  const { mutate } = useCreateAnEvent();

  const createEvent = () => {
    mutate(
      {
        data: {
          capacity: 10,
          description: "test",
          startsAt: "2021-01-01T00:00:00.000Z",
          title: "test",
        },
      },
      {
        onSuccess: () => {
          // getting the generated query key
          queryClient.invalidateQueries(getListAllEventsQueryKey());
        },
      }
    );
  };

  return (
    <div>
      <p>{data?.title}</p>
      <p>{data?.owner?.email}</p>
      <button onClick={() => createEvent()}>Create random event</button>
    </div>
  );
}
