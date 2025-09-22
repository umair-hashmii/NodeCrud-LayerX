// Simple Logger — replaceable with pino/winston later
class Logger {
info(...args) { console.log('[INFO]', ...args); }
warn(...args) { console.warn('[WARN]', ...args); }
error(...args) { console.error('[ERROR]', ...args); }
debug(...args) { if (process.env.DEBUG) console.debug('[DEBUG]', ...args); }
}


module.exports = new Logger();