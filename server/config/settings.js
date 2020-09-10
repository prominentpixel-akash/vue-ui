class SystemSettings {

    static initialize() {
        this.port = 8000;

        this.databaseConfig = {
        };

        this.whiteListIpsCheck = false;

        this.whiteListIps = ['localhost', '127.0.0.1'];
    }

    static get(key) {
        return this[key];
    }

    static set(key, value) {
        this[key] = value;
    }
}

module.exports = SystemSettings;