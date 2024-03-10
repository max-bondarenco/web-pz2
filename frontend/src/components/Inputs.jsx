import { useRef } from 'react'
import { func } from 'prop-types'
import axios from '../api/axios'

const Inputs = ({ setLoading, setData }) => {
    const coalRef = useRef(null)
    const oilRef = useRef(null)
    const gasRef = useRef(null)

    const setExampleData = () => {
        coalRef.current.value = 1_096_363
        oilRef.current.value = 70_945
        gasRef.current.value = 84_762
    }

    const setVariantData = () => {
        coalRef.current.value = 595_061.91
        oilRef.current.value = 125_029.33
        gasRef.current.value = 142_828.9
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const controller = new AbortController()

        try {
            setLoading(true)
            const formData = {
                coal: coalRef.current.value,
                oil: oilRef.current.value,
                gas: gasRef.current.value,
            }

            const res = await axios.post('/calculate', formData, {
                headers: { 'Content-Type': 'application/json' },
                signal: controller.signal,
            })

            setData(res.data.data)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }

        return () => controller.abort()
    }

    return (
        <div className="inputs">
            <h2>Вхідні дані</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="coal">Маса вугілля (т):</label>
                    <input
                        id="coal"
                        step="0.01"
                        ref={coalRef}
                        name="coal"
                        required
                        min="0"
                        type="number"
                    />
                </div>
                <div>
                    <label htmlFor="oil">Маса мазуту (т):</label>
                    <input
                        id="oil"
                        step="0.01"
                        ref={oilRef}
                        name="oil"
                        required
                        min="0"
                        type="number"
                    />
                </div>
                <div>
                    <label htmlFor="gas">{"Об'єм газу (м^3):"}</label>
                    <input
                        id="gas"
                        step="0.01"
                        ref={gasRef}
                        name="gas"
                        required
                        min="0"
                        type="number"
                    />
                </div>

                <button>Розрахувати</button>
                <button onClick={setExampleData} type="button">
                    Дані з контрольного прикладу
                </button>
                <button onClick={setVariantData} type="button">
                    Дані з варіанту (5)
                </button>
            </form>
        </div>
    )
}

Inputs.propTypes = {
    setLoading: func,
    setData: func,
}

export default Inputs
