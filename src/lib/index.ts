import { sanitizeEmail } from "./sanitize-email";
import type { App } from "vue";

export default {
    install: (app: App) => {
        app.directive("sanitize-email", sanitizeEmail);
    },
};

export { sanitizeEmail };