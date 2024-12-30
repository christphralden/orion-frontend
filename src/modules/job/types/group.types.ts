interface GroupAssistant {
  groupId: number;
  initial: string;
}

interface GroupAssistantWithDetails extends GroupAssistant {
  submissionLink: string | null;
  startDate: string;
  endDate: string;
  class: string;
}

interface GroupThreads {
  id: number;
  groupId: number;
  title: string;
  content: string;
  authorInitial: string;
  createdAt: string;
  updatedAt: string;
}
interface Group {
  id: number;
  createdAt: string;
  updatedAt: string;
  subcoInitial: string;
  courseId: string;
  courseName: string;
  assignmentType: string;
  assignmnentJob: string;
  groupAssistants: GroupAssistant[];
}

interface GroupWithDetails extends Group {
  groupAssistants: GroupAssistantWithDetails[];
}

interface GroupWithThreads extends GroupWithDetails {
  groupThreads: GroupThreads[];
}

export type {
  Group,
  GroupAssistant,
  GroupAssistantWithDetails,
  GroupThreads,
  GroupWithThreads,
};
