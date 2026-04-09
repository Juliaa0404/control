module.exports = function (api) {
    api.cache(true);
    return {
        presents: ["babel-present-expo"],
        plugins: ["react-native-reanimated/plugin"],
    };
};