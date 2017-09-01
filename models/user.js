module.exports = {
    findByToken: (token) => {
        return token === 'hello' ? {
            name: 'Ivan'
        } : null;
    }
}