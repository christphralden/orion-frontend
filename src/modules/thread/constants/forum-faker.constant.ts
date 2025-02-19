import { JobList } from "@job/types/job.types";

const fakeForumData = [
  {
    id: 1,
    jobType: "Correction" as JobList,
    name: "Racism Neural Network",
    classCode: "BE01",
    subco: "WB23-1",
    participantCount: 12,
    unreadMessages: 12,
    lastMessage: {
      sender: "AL23-2",
      message: "Ko, boleh liat ini gimana cara nilai nya ga",
      time: "23:22",
    },
  },
  {
    id: 2,
    jobType: "TPA" as JobList,
    name: "TPA Network",
    subco: "EF23-2",
    participantCount: 11,
    lastMessage: {
      sender: "VH23-2",
      message: "BUSET GAMPANG BANGET WKWKWK",
      time: "02:21",
    },
  },
  {
    id: 3,
    jobType: "Case Making" as JobList,
    name: "Computational Cooking",
    subco: "WB23-1",
    participantCount: 12,
    unreadMessages: 2,
    lastMessage: {
      sender: "AL23-2",
      message: "Ko, boleh liat ini gimana cara nilai nya ga",
      time: "23:22",
    },
  },
  {
    id: 4,
    jobType: "Correction" as JobList,
    name: "Racism Neural Network",
    classCode: "BE01",
    subco: "WB23-1",
    participantCount: 12,
    lastMessage: {
      sender: "AL23-2",
      message: "Ko, boleh liat ini gimana cara nilai nya ga",
      time: "23:22",
    },
  },
  {
    id: 5,
    jobType: "Correction" as JobList,
    name: "Racism Neural Network",
    classCode: "BX01",
    subco: "WB23-1",
    participantCount: 12,
    lastMessage: {
      sender: "AL23-2",
      message: "Ko, boleh liat ini gimana cara nilai nya ga",
      time: "23:22",
    },
  },
  {
    id: 6,
    jobType: "Correction" as JobList,
    name: "Racism Neural Network",
    classCode: "BR02",
    subco: "WB23-1",
    participantCount: 12,
    lastMessage: {
      sender: "AL23-2",
      message: "Ko, boleh liat ini gimana cara nilai nya ga",
      time: "23:22",
    },
  },
];

export { fakeForumData };
