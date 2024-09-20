type MessageKeys = {
  AUTH: AuthMessages;
  SCHEMA: SchemaMessages;
};

type AuthMessages = {
  SUCCESS: "Login successful";
  ERROR: "User unauthorized";
};

type SchemaMessages = {
  ERROR: "Invalid data schema";
};

const MESSAGES: MessageKeys = {
  AUTH: {
    SUCCESS: "Login successful",
    ERROR: "User unauthorized",
  },
  SCHEMA: {
    ERROR: "Invalid data schema",
  },
};

export { MESSAGES };
