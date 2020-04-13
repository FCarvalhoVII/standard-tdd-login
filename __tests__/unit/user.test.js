const bcrypt = require('bcryptjs')

const { User } = require('../../src/app/models')
const truncate = require('../utils/truncate')

describe('User', () => {
    beforeEach(async () => {
        await truncate()
    })

    it('should encrypt user password', async () => {
        const user = await User.create({
            name: 'Felipe',
            email: 'felipe@teste.com',
            password: '123456'
        })

        const hash = await bcrypt.hash('123456', 8)

        expect(await bcrypt.compare('123456', user.password_hash)).toBe(true)
    })
})