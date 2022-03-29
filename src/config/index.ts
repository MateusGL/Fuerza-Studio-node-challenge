import { IEnvConfig } from "./IEnvConfig"

enum REPOSITORY_POST_TYPE {
    MEMORY = "Memory"
}

const defaults = <const>{
    REPOSITORY_POST_TYPE: REPOSITORY_POST_TYPE.MEMORY,
    SERVER_PORT: 3333
}


export function getEnv(): IEnvConfig {
    // @todo: validate with zod
    return {
        SERVER_PORT: parseInt(process.env.SERVER_PORT) || defaults.SERVER_PORT,
        REPOSITORY_POST_TYPE: process.env.REPOSITORY_POST_TYPE || defaults.REPOSITORY_POST_TYPE
    }
}

const environment = getEnv()
console.log("configs: ", environment)

export { environment }