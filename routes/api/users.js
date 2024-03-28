const router = require('express').Router()
const userCtrl = require('../../controllers/api/users')
const checkToken = require('../../config/checkToken')
const ensureLoggedIn = require('../../config/ensureLoggedIn')


router.post('/', userCtrl.signUp, userCtrl.respondWithToken)

router.post('/login', userCtrl.login, userCtrl.respondWithToken)

router.put('/:id', checkToken, ensureLoggedIn, userCtrl.updateUser)

router.delete('/:id', checkToken, ensureLoggedIn, userCtrl.deleteUser)

router.get('/bookmarks', checkToken, ensureLoggedIn, userCtrl.getBookmarksByUser, userCtrl.respondWithBookmarks)


module.exports = router
