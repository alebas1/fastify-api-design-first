import { Health } from "@app/shared-types";

export default {
    health: async (): Promise<Health> => {
        return {
            status: 'ok',
            uptime: process.uptime()
        };
    }
};
