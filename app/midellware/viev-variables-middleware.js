module.exports = function(req, res, next) {
    res.locals.errors = null;
    next();
}