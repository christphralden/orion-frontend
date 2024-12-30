interface GroupAssistant {
  groupId: number;
  initial: string;
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

export type { Group, GroupAssistant };
