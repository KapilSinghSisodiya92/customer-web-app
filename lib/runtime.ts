/**
 * Detects if the app is running inside an iframe
 * @returns true if running in iframe, false if standalone
 */
export function isIframeMode(): boolean {
  try {
    return window.self !== window.top;
  } catch (e) {
    // Cross-origin iframe will throw an error when accessing window.top
    // This indicates we're in an iframe
    return true;
  }
}

/**
 * Detects if the app is running in standalone mode (not in iframe)
 * @returns true if running standalone, false if in iframe
 */
export function isStandaloneMode(): boolean {
  return !isIframeMode();
}

