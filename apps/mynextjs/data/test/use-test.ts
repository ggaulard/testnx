import useSWR from "swr";
import { fetcher } from "../fetcher";
import {TestDTO} from "@myworkspace/api";

export default function useTest() {
  const { data, mutate, error } = useSWR<TestDTO>("/api", fetcher);

  const loading = !data && !error;

  return {
    loading,
    test: data,
    loadTest: () => mutate
  };
}
