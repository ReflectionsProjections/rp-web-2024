interface ImportMetaEnv {
    readonly VITE_IS_PROD: string
    // more env variables...
}
  
interface ImportMeta {
    readonly env: ImportMetaEnv
}

function getEnv(key: string, safeMode: Boolean = false, defaultValue: string = "") {
    console.log("IN!");
    // const val = process.env[key];
    const val = (import.meta.env as ImportMeta)[key];i

    if (!safeMode && val === undefined) {
        throw new Error(`env value ${key} not found, exiting...`);
    }

    return val ?? defaultValue;
}

const Config = {
    IS_PROD: !!getEnv("VITE_IS_PROD", true, "0"),
}

export default Config;