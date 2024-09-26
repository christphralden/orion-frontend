const MESSAGES = {
  AUTH: {
    SUCCESS: "Login successful",
    ERROR: "User unauthorized",
    LOGOUT: "You have been logged out",
  },
  SCHEMA: {
    ERROR: "Invalid data schema",
  },
  GENERIC: {
    UNHANDLED: "Unhandled error occured",
  },
} as const;

type MessageKeys = typeof MESSAGES;
type AuthMessages = typeof MESSAGES.AUTH;
type SchemaMessages = typeof MESSAGES.SCHEMA;
type GenericMessages = typeof MESSAGES.GENERIC;

export { MESSAGES };
export type { MessageKeys, AuthMessages, SchemaMessages, GenericMessages };
