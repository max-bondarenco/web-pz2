export const COAL_C = 52.49
export const COAL_H = 3.5
export const COAL_O = 4.99
export const COAL_N = 0.97
export const COAL_S = 2.85
export const COAL_A = 25.2
export const COAL_W = 10
export const COAL_V = 25.92
export const COAL_Q = 20.47
export const COAL_G_VIN = 1.5
export const COAL_A_VIN = 0.8

export const OIL_C = 85.5
export const OIL_H = 11.2
export const OIL_ON = 0.8
export const OIL_S = 2.5
export const OIL_Q = 40.4
export const OIL_W = 2
export const OIL_A = 0.15
export const OIL_V = 333.3
export const OIL_G_VIN = 0
export const OIL_A_VIN = 1

export const GAS_CH4 = 98.9
export const GAS_C2H6 = 0.12
export const GAS_C3H8 = 0.011
export const GAS_C4H10 = 0.01
export const GAS_CO2 = 0.06
export const GAS_N2 = 0.9
export const GAS_Q = 33.08
export const GAS_P = 0.723
export const GAS_K = 0

export const EFF = 0.985

export const COAL_K =
    (10 ** 6 / COAL_Q) *
    COAL_A_VIN *
    ((COAL_A * (1 - EFF)) / (100 - COAL_G_VIN))

export const OIL_K =
    (10 ** 6 / OIL_Q) * OIL_A_VIN * ((OIL_A * (1 - EFF)) / (100 - OIL_G_VIN))
