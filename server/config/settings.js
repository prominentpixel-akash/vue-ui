class SystemSettings {

    static initialize() {
        this.port = 8000;

        this.databaseConfig = {
        };

        this.whiteListIpsCheck = false;

        this.whiteListIps = ['localhost', '127.0.0.1'];

        this.cognito = {
            userPoolId: "us-east-2_f5bHVbtKk",
            clientId:  "1re65g8dbdl91ndu2d4as0hi54",
            region: 'us-east-2'
        }
    }

    static get(key) {
        return this[key];
    }

    static set(key, value) {
        this[key] = value;
    }
}

module.exports = SystemSettings;