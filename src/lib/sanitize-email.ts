import type { Directive } from "vue";

const sanitizeEmail: Directive = {
    mounted(element: HTMLInputElement): void {
        const regex = /[^a-zA-Z0-9._%+-@]/g;

        function handleInput(event: Event): void {
            const target = event.target as HTMLInputElement;
            let value = target.value;
            if (!validateEmail(value)) {
                value = value.replace(regex, '');
                target.value = value;
            }
        }

        function validateEmail(email: string): boolean {
            const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            return regex.test(email);
        }

        element.addEventListener('input', handleInput);
    },
}


export {
    sanitizeEmail
}