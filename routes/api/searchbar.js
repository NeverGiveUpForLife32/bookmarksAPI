const router = require('express').Router()
const bookmarkCtrl = require('../../controllers/api/bookmarks')
const userCtrl = require('../../controllers/api/users')
const checkToken = require('../../config/checkToken')
const ensureLoggedIn = require('../../config/ensureLoggedIn')
const searchCtrl = require('../../controllers/api/searchbar')


// getBookmarksBySearchQuery -> text-specific search
router.get('/', checkToken, ensureLoggedIn, searchCtrl.getBookmarksBySearchQuery, bookmarkCtrl.respondWithBookmark)

module.exports = router


// getBookmarksByTag
// router.get('/tag', checkToken, ensureLoggedin, searchCtrl.getBookmarksByTag, BookmarkCtrl.respondWithBookmark)
