import exec from "@actions/exec";
import { COMMIT_MESSAGE } from "./constants.js";

export async function gitConfigureAuthor(name: string, email = `${name}@users.noreply.github.com`) {
    await exec.exec("git", ["config", "user.name", name]);
    await exec.exec("git", ["config", "user.email", email]);
}

export async function gitCommit(directory: string) {
    await exec.exec("git", ["commit", directory, "-m", COMMIT_MESSAGE]);
}

export async function gitPush() {
    await exec.exec("git", ["push"]);
}
