export default (err, req, res, next) => {
    if (err.custom) return handleCustomError(err, res)
    handleUnknownError(err, res)
}

const handleCustomError = (err, res) => {
    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
    })
}

const handleUnknownError = (err, res) => {
    console.log(err)
    res.status(500).json({
        status: 'error',
        message: 'Unknown error occured, try again later',
    })
}
