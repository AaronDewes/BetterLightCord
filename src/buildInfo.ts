import { getCommitID } from "./common/git";
import pak from "../package.json";

type branch = "stable" | "canary" | "ptb" | "development";

const buildTargets = {
    darwin: "0.0.259",
    linux: "0.0.12",
};

// Use Discord Canary for even more features and experiments;
export const releaseChannel: branch = "canary";
export const version = buildTargets[process.platform] || "0.0.308";
export const commit = getCommitID();
export default {
    releaseChannel,
    version,
    commit,
};

global["BuildInfo"] = {
    releaseChannel,
    version: pak.version,
    commit,
};
