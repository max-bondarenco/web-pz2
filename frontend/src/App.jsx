import { useState } from 'react'
import Inputs from './components/Inputs'

const App = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [data, setData] = useState(null)

    if (loading) return <div>Завантаження...</div>

    return (
        <div>
            <Inputs
                setLoading={setLoading}
                setError={setError}
                setData={setData}
            />
        </div>
    )
}

export default App
