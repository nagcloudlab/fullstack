

// Trainer - Nag

const store = {
    getState: function () {
        return {
            topics: [
                "javascript",
                "UI",
                "react",
                "react-native"
            ],
            chapters: {
                "javascript": [
                    "data types",
                    "FP",
                    "OOP",
                    "ES6"
                ],
                "UI": [
                    "HTML",
                    "CSS",
                    "browser apis"
                ]
            }
        }
    }
}

export default store;