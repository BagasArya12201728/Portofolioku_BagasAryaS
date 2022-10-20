class helper {
    resetForm = (object) => {
        Object.keys(object).forEach((key) => (object[key] = ''));
        return object;
    };
}

export default new helper();