import * as core from "@actions/core"
import * as exec from "@actions/exec"

async function main() {
    const token = core.getInput("token", {
        required: true,
        trimWhitespace: true
    })

    const email = core.getInput("email", {
        required: true,
        trimWhitespace: true
    })

    const distFolder = core.getInput("dist-folder", {
        required: true,
        trimWhitespace: true
    })

    const domain = core.getInput("domain", {
        required: true,
        trimWhitespace: true
    })

    const command = `npx surge ${distFolder} --token ${token} --login ${email} --domain ${domain}`;

    const exitCode = await exec.exec(command);

    return exitCode;
}

main()