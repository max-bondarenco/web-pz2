import { object } from 'prop-types'

const Results = ({ data }) => {
    return (
        <div className="outputs">
            <div className="output">
                <h2>При спалюванні вугілля</h2>
                <div>
                    <label htmlFor="coal_k">
                        Показник емісії твердих частинок (г/ГДж):
                    </label>
                    <input defaultValue={data?.coal_k} disabled id="coal_k" />
                </div>
                <div>
                    <label htmlFor="coal_E">Валовий викид (т):</label>
                    <input defaultValue={data?.coal_E} disabled id="coal_E" />
                </div>
            </div>
            <div className="output">
                <h2>При спалюванні мазуту</h2>
                <div>
                    <label htmlFor="oil_k">
                        Показник емісії твердих частинок (г/ГДж):
                    </label>
                    <input defaultValue={data?.oil_k} disabled id="oil_k" />
                </div>
                <div>
                    <label htmlFor="oil_E">Валовий викид (т):</label>
                    <input defaultValue={data?.oil_E} disabled id="oil_E" />
                </div>
            </div>
            <div className="output">
                <h2>При спалюванні природного газу</h2>
                <div>
                    <label htmlFor="gas_k">
                        Показник емісії твердих частинок (г/ГДж):
                    </label>
                    <input defaultValue={data?.gas_k} disabled id="gas_k" />
                </div>
                <div>
                    <label htmlFor="gas_E">Валовий викид (т):</label>
                    <input defaultValue={data?.gas_E} disabled id="gas_E" />
                </div>
            </div>
        </div>
    )
}

Results.propTypes = {
    data: object,
}

export default Results
