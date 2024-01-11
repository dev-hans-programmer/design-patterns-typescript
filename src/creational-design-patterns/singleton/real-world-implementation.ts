class Logger {
  private static instance: Logger;
  myInstance: number = 0;

  constructor() {}

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  public log(message: string) {}
  public info(message: string) {}
  public error(message: string) {}
}

const logger = new Logger(); // creating an object of Logger class
