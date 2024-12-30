interface Author {
  initial: string;
  generation: string;
  fullName: string;
}

interface DiscussionReply {
  id: number;
  discussionId: number;
  content: string;
  authorInitial: string;
  createdAt: string;
}

interface ThreadDiscussion {
  id: number;
  threadId: number;
  content: string;
  authorInitial: string;
  createdAt: string;
  discussionReplies: DiscussionReply[];
}

interface ThreadImage {
  id: number;
  url: string;
  threadId: number;
  createdAt: string;
  updatedAt: string;
}

interface ThreadData {
  id: number;
  groupId: number;
  title: string;
  content: string;
  authorInitial: string;
  createdAt: string;
  updatedAt: string;
  author: Author;
  threadDiscussions: ThreadDiscussion[];
  threadImages: ThreadImage[];
}

interface ThreadResponse {
  message: string;
  status: boolean;
  data: ThreadData;
}

export type {
  Author,
  DiscussionReply,
  ThreadDiscussion,
  ThreadImage,
  ThreadData,
  ThreadResponse,
};
