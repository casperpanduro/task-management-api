const asyncHandler = (cb) =>  {
	return async (req, res, next) => {
		try {
			await cb(req, res, next);
		} catch(err) {
			next(err);
		}
	}
}
exports.asyncHandler = asyncHandler;
// module.exports = {
// 	asyncHandler
// }