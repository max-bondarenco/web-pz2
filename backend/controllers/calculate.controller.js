import catchAsync from '../utils/catchAsync.js'
import { COAL_K, COAL_Q, GAS_K, OIL_K, OIL_Q } from '../utils/constants.js'

export const calculate = catchAsync(async (req, res, next) => {
    const { coal: coal_B, oil: oil_B, gas: gas_B } = req.body

    const coal_E = (10 ** -6 * COAL_K * coal_B * COAL_Q).toFixed(2) * 1
    const oil_E = (10 ** -6 * OIL_K * oil_B * OIL_Q).toFixed(2) * 1

    res.status(200).json({
        status: 'success',
        data: {
            coal_k: COAL_K.toFixed(2) * 1,
            coal_E,
            oil_k: OIL_K.toFixed(2) * 1,
            oil_E,
            gas_k: GAS_K.toFixed(2) * 1,
            gas_E: 0,
        },
    })
})
