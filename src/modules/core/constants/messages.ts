type MessageKeys = {
  AUTH: AuthMessages;
  SCHEMA: SchemaMessages;
  GENERIC: GenericMessages;
};

type AuthMessages = {
  SUCCESS: "Login successful";
  ERROR: "User unauthorized";
  LOGOUT: "You have been logged out";
};

type SchemaMessages = {
  ERROR: "Invalid data schema";
};

type GenericMessages = {
  UNHANDLED: "Unhandled error occured";
};

const MESSAGES: MessageKeys = {
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
};

export { MESSAGES };
