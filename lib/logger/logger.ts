class Logger {
    public fatal(message: string) {
        console.log(`[fatal] ${message}`);
    }

    public error(message: string) {
        console.log(`[error] ${message}`);
    }

    public warning(message: string) {
        console.log(`[info] ${message}`);
    }

    public info(message: string) {
        console.log(`[info] ${message}`);
    }

    public debug(message: string) {
        console.log(`[info] ${message}`);
    }
}

export const logger = new Logger();
