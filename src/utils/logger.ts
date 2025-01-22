import { createLogger, format, transports } from 'winston';
const { combine, timestamp, printf, colorize } = format;

const myFormat = printf(({ level, message, timestamp }: any) => {
  return `${timestamp} [${level}]: ${message}`;
});

const logger = createLogger({
  level: 'info',
  format: combine(
    colorize(),
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    myFormat,
  ),
  transports: [
    new transports.Console(), // Logowanie do konsoli
    new transports.File({ filename: 'error.log', level: 'error' }),
    new transports.File({ filename: 'combined.log' }),
  ],
});

export default logger;
