import alfy = require("alfy");

let error_messages = [];

const KEY_SERVER_URL = "server_url";
const KEY_USER_SECRET = "user_secret";

const cmd_regex = /^(set_server|set_secret){1}\s(.+)/;

const res = cmd_regex.exec(alfy.input);

if (res) {
    const key = res[1] == "set_server" ? KEY_SERVER_URL : KEY_USER_SECRET;
    const value = res[2];
    alfy.output([
        {
            title: `Set ${key} to value ${value}`,
            arg: `${key} ${value}`
        }
    ]);
} else {
    if (!alfy.cache.has(KEY_SERVER_URL)) {
        error_messages.push({
            title: "Server URL must be set. Type kk set_server [URL]"
        });
    }

    if (!alfy.cache.has(KEY_USER_SECRET)) {
        error_messages.push({
            title: "User secret must be set. Type kk set_secret [SECRET]"
        });
    }

    if (error_messages.length > 0) {
        alfy.output(error_messages);
    } else {
        const server = alfy.cache.get(KEY_SERVER_URL);
        const secret = alfy.cache.get(KEY_USER_SECRET);
        alfy.fetch(`${server}/api/link/suggest?link=${alfy.input}&secret=${secret}`)
            .then(function(data: Array<string>) {
                const results = data.map(function(val) {
                    return {
                        title: val,
                        uid: val,
                        arg: `${server}/api/link/redirect?link=${val}`,
                        autocomplete: val
                    };
                });
                if (results.length > 0) {
                    alfy.output(results);
                } else {
                    alfy.output([{
                        title: `${alfy.input} not found. Press enter to add a new entry.`,
                        arg: `${server}/ui/alias/new?`
                    }]);
                }
            });
    }
}
