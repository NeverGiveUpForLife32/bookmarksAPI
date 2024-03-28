const router = require('express').Router()
const bookmarkCtrl = require('../../controllers/api/bookmarks')
const searchCtrl = require('../../controllers/api/searchbar')
const checkToken = require('../../config/checkToken')
const ensureLoggedIn = require('../../config/ensureLoggedIn')


// Index --> must find solution for getting ALL bookmarks, not just loggedin. -> This is crashing me.
// router.get('/', checkToken, ensureLoggedIn, bookmarkCtrl.index, bookmarkCtrl.jsonBookmarks)
// Delete
router.delete('/:id', checkToken, ensureLoggedIn, bookmarkCtrl.destroyBookmark, bookmarkCtrl.respondWithBookmark)
// Update
router.put('/:id', checkToken, ensureLoggedIn, bookmarkCtrl.updateBookmark, bookmarkCtrl.respondWithBookmark)
// Create
router.post('/', checkToken, ensureLoggedIn, bookmarkCtrl.createBookmark, bookmarkCtrl.respondWithBookmark)

module.exports = router
