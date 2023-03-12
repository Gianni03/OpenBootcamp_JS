const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

module.exports = logger;

// logger.log("hola estoy saliendo por pantalla");
logger.info("mensaje informativo");
logger.warn("mensaje de advertencia");
logger.error("mensaje de error");


const funcError = val => {
  if(typeof val === "number"){
    return val * 1.21
  }
  throw new Error("ingrese un valor")
}

const iva = 2500;
const ivaE = "otra cosa";
try{
logger.info("esta ejecutandose correctamente");
const calc = funcError(ivaE);
logger.info(calc);
} catch(e){
  logger.warn("no es correcto!!!ERROR Debe ingresar un numero");
  logger.info(e);
} finally {
  logger.info("Esto se ejecuta siempre");
}

