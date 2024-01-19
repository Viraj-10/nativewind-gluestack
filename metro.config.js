const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname, { isCSSEnabled: true });
config.resolver.nodeModulesPath = ["./node_modules"];
module.exports = withNativeWind(config, { input: "./global.css" });
