const express = require('express');
const router = express.Router();

const {
  create: blogCreate,
  read: blogRead,
  delete: blogDelete,
  update: blogUpdate,
} = require('../Controllers/blogController');

const {
  create: commentCreate,
  read: commentRead,
  delete: commentDelete,
  update: commentUpdate,
} = require('../Controllers/commentController');

const {
  create: messageCreate,
  read: messageRead,
  delete: messageDelete,
  update: messageUpdate,
} = require('../Controllers/messageController');

const {
  create: portfolioCreate,
  read: portfolioRead,
  delete: portfolioDelete,
  update: portfolioUpdate,
} = require('../Controllers/portfolioController');

const {
  create: productCreate,
  read: productRead,
  delete: productDelete,
  update: productUpdate,
} = require('../Controllers/productController');

// blog Create Controller
router.get('/blog/create', blogCreate);
router.get('/blog/read', blogRead);
router.get('/blog/delete', blogDelete);
router.get('/blog/update', blogUpdate);

// comment controller
router.get('/comment/create', commentCreate);
router.get('/comment/read', commentRead);
router.get('/comment/delete', commentDelete);
router.get('/comment/update', commentUpdate);

// Message controller
router.get('/message/create', messageCreate);
router.get('/message/read', messageRead);
router.get('/message/delete', messageDelete);
router.get('/message/update', messageUpdate);

// portfolio controller
router.get('/portfolio/create', portfolioCreate);
router.get('/portfolio/read', portfolioRead);
router.get('/portfolio/delete', portfolioDelete);
router.get('/portfolio/update', portfolioUpdate);

// products controller
router.get('/products/create', productCreate);
router.get('/products/read', productRead);
router.get('/products/delete', productDelete);
router.get('/products/update', productUpdate);

module.exports = router;
