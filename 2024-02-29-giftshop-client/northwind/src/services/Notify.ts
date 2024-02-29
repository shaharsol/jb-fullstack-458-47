import { Notyf } from "notyf";
import appConfig from "../utils/AppConfig";

class Notify {

    private successNotification = new Notyf({
        duration: appConfig.successNotificationDuration, // in milliseconds
        position: {
            x: 'center',
            y: 'center'
        }
    })

    private errorNotification = new Notyf({
        duration: appConfig.errorNotificationDuration, // in milliseconds
        position: {
            x: 'center',
            y: 'center'
        }
    })

    public success(message: string): void {
        this.successNotification.success(message);
    }

    public error(err: any): void {
        const message = this.extractMessage(err);
        this.errorNotification.error(message);
    }

    private extractMessage(err: any): string {
        if (typeof err === 'string') return err;
        if (typeof err.response?.data === 'string') return err.response.data;
        if (Array.isArray(err.response?.data)) return err.response.data[0];
        if (typeof err.message === 'string') return err.message;
        return 'unknown error... please try again';
    }

}

const notify = new Notify();
export default notify;
