import process from "process";

// Runs a callback when the process exits no matter what
export const OnExit = (callback: () => void) => {
  process.on("exit", callback);
  process.on("SIGINT", callback);
  process.on("SIGUSR1", callback);
  process.on("SIGUSR2", callback);
  process.on("uncaughtException", callback);
  process.on("SIGTERM", callback);
};

export default OnExit;
