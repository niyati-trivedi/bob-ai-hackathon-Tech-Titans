/**
 * Error page rendering module
 * Provides HTML error page generation for server-side error handling
 */

/**
 * Render a complete HTML error page
 * Returns an HTML string suitable for sending as a Response body
 */
export function renderErrorPage(error?: Error | null): string {
  const errorMessage = error?.message ?? 'An unexpected error occurred';
  const errorStack = error?.stack ?? '';

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Error</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
      color: #e2e8f0;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      padding: 20px;
    }
    
    .error-container {
      background: #1e293b;
      border: 1px solid #334155;
      border-radius: 8px;
      padding: 40px;
      max-width: 600px;
      width: 100%;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5);
    }
    
    .error-header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 24px;
    }
    
    .error-icon {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #fee2e2;
      border-radius: 50%;
      font-size: 24px;
    }
    
    .error-title {
      font-size: 24px;
      font-weight: 600;
      color: #fecaca;
    }
    
    .error-message {
      font-size: 16px;
      color: #cbd5e1;
      margin-bottom: 16px;
      line-height: 1.6;
    }
    
    .error-details {
      background: #0f172a;
      border: 1px solid #334155;
      border-radius: 4px;
      padding: 12px;
      margin-top: 16px;
      font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
      font-size: 12px;
      color: #94a3b8;
      overflow-x: auto;
      white-space: pre-wrap;
      word-break: break-word;
      max-height: 300px;
      overflow-y: auto;
    }
    
    .error-footer {
      margin-top: 24px;
      padding-top: 16px;
      border-top: 1px solid #334155;
      font-size: 14px;
      color: #94a3b8;
    }
    
    .error-footer a {
      color: #60a5fa;
      text-decoration: none;
    }
    
    .error-footer a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="error-container">
    <div class="error-header">
      <div class="error-icon">⚠️</div>
      <h1 class="error-title">Something went wrong</h1>
    </div>
    
    <p class="error-message">
      We encountered an error while processing your request. Please try again later.
    </p>
    
    ${
      errorMessage
        ? `<div class="error-details"><strong>Error:</strong> ${escapeHtml(errorMessage)}${
            errorStack ? '\n\n' + escapeHtml(errorStack) : ''
          }</div>`
        : ''
    }
    
    <div class="error-footer">
      <p>
        If the problem persists, please <a href="/">return to the home page</a> or
        contact support.
      </p>
    </div>
  </div>
</body>
</html>`;
}

/**
 * Escape HTML special characters to prevent XSS
 */
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}
