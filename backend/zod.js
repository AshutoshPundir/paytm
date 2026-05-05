const zod = require('zod');

const validateInput = zod.object({
    username: zod.string().email(),
    firstname: zod.string().min(3).max(15),
    lastname: zod.string().max(15),
    password: zod.string().min(6)
})

module.exports = validateInput;