import vituum from "vituum";

export default {
    plugins: [
        vituum({
            pages: {
                normalizeBasePath: true,
            },
        }),
    ],
};
