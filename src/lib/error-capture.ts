/**
 * Global error capture system for server-side error handling.
 * Captures errors that occur during server processing and makes them
 * available for consistent error page rendering.
 */

let lastCapturedError: Error | null = null;

/**
 * Install global error handlers on the server
 * Called at the start of server.ts to capture all unhandled errors
 */
export function installGlobalErrorHandlers() {
  if (typeof globalThis !== 'undefined') {
    // Capture unhandled promise rejections
    if ('addEventListener' in globalThis) {
      globalThis.addEventListener?.('unhandledrejection', (event: PromiseRejectionEvent) => {
        lastCapturedError = event.reason instanceof Error 
          ? event.reason 
          : new Error(String(event.reason));
      });
    }
  }
}

/**
 * Capture an error for later retrieval
 */
export function captureError(error: unknown): void {
  if (error instanceof Error) {
    lastCapturedError = error;
  } else {
    lastCapturedError = new Error(String(error));
  }
}

/**
 * Consume and return the last captured error
 * Clears it after retrieval to prevent stale errors
 */
export function consumeLastCapturedError(): Error | null {
  const error = lastCapturedError;
  lastCapturedError = null;
  return error;
}

/**
 * Get the last captured error without clearing it
 */
export function getLastCapturedError(): Error | null {
  return lastCapturedError;
}

/**
 * Clear the captured error
 */
export function clearLastCapturedError(): void {
  lastCapturedError = null;
}
