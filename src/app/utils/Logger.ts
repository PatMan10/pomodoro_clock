import Config from "../Config";

// 0 = no logging
// 1 = errors
// 2 = errors, warn
// 3 = error, warn, log
// 4 = error, warn, log, info
// 5 = error, warn, log, info, debug

class Logger {
  error(msg: any, parrams?: Array<any>) {
    if (Config.logLevel > 0)
      if (parrams) console.error(msg, parrams.length > 0 ? parrams : "");
      else console.error(msg);
  }
  warn(msg: any, parrams?: Array<any>) {
    if (Config.logLevel > 1)
      if (parrams) console.warn(msg, parrams.length > 0 ? parrams : "");
      else console.warn(msg);
  }
  log(msg: any, parrams?: Array<any>) {
    if (Config.logLevel > 2)
      if (parrams) console.log(msg, parrams.length > 0 ? parrams : "");
      else console.log(msg);
  }
  info(msg: any, parrams?: Array<any>) {
    if (Config.logLevel > 3)
      if (parrams) console.info(msg, parrams.length > 0 ? parrams : "");
      else console.info(msg);
  }
  debug(msg: any, parrams?: Array<any>) {
    if (Config.logLevel > 4)
      if (parrams) console.debug(msg, parrams.length > 0 ? parrams : "");
      else console.debug(msg);
  }
}

export default new Logger();
