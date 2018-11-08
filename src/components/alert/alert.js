import Notification from './notification.js';

let messageInstance;

function getMessageInstance () {
    messageInstance = messageInstance || Notification.newInstance();
    return messageInstance;
}

function notice(content = '') {
    let instance = getMessageInstance();

    instance.add({
        content: content
    });
}

export default {
    info (options) {
        return notice(options.content);
    }
}