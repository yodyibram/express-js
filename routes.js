const router = require('express').Router();
const multer = require('multer');
const upload = multer({dest: 'uploads'});
router.get('/', (req, res) => {
    const {page, total} = req.query;
    res.send({
        status: 'succesfully',
        message: 'Welcome to Express JS Tutorial',
        page,
        total
    });
});

router.get('/product/:id', (req, res) => {
    res.json({
        id: req.params.id
    });
});

router.post('/product/', upload.single('image'), (req, res) => {
    const {name, price, stock, status} = req.body;
    console.log(req.file)
    res.json({
        name,
        price,
        stock,
        status,
        image
    });
});

router.get('/:category/:tag', (req, res) => {
    const {category, tag} = req.params;
    res.json({category, tag});
});


module.exports = router;