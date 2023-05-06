import { Health } from "@app/documentation";

export default {
    health: async (): Promise<Health> => {
        return {
            status: 'ok',
            uptime: process.uptime()
        };
    }
};
