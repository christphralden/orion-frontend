// import type { IJob } from "@job/types/job.types";
// import { ExtractState } from "@utils/store";
//
// import { create, useStore } from "zustand";
// import { devtools, persist, createJSONStorage } from "zustand/middleware";
//
// type ActiveJobsStore = {
//   activeJobs?: IJob[];
//   actions: {
//     setActiveJobs: (activeJobs: IJob[]) => void;
//     clearActiveJobs: () => void;
//   };
// };
//
// const activeJobsStore = create<ActiveJobsStore>()(
//   devtools(
//     (set) => ({
//       activeJobs: undefined,
//
//       actions: {
//         setActiveJobs: (activeJobs: IJob[]) => {
//           set({ activeJobs });
//         },
//         clearActiveJobs: () => {
//           set({ activeJobs: undefined });
//         },
//       },
//     }),
//     { name: "active-job", enabled: !import.meta.env.PROD },
//   ),
// );
//
// type Params<U> = Parameters<typeof useStore<typeof activeJobsStore, U>>;
//
// const activeJobsSelector = (state: ExtractState<typeof activeJobsStore>) =>
//   state.activeJobs;
// const activeJobsActionSelector = (
//   state: ExtractState<typeof activeJobsStore>,
// ) => state.actions;
//
// // Getters
// export const getActiveJobs = () =>
//   activeJobsSelector(activeJobsStore.getState());
// export const getActiveJobsActions = () =>
//   activeJobsActionSelector(activeJobsStore.getState());
//
// function useActiveJobsStore<U>(selector: Params<U>[1]) {
//   return useStore(activeJobsStore, selector);
// }
//
// // Hooks
// export const useActiveJobs = () => useActiveJobsStore(activeJobsSelector);
// export const useActiveJobsActions = () =>
//   useActiveJobsStore(activeJobsActionSelector);
//
// export { useActiveJobsStore };
