import { useState } from 'react'
import Inputs from './components/Inputs'
import Results from './components/Results'

const App = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)

    if (loading) return <div>Завантаження...</div>

    return (
        <div className="app">
            <Inputs setLoading={setLoading} setData={setData} />
            <Results data={data} />
        </div>
    )
}

export default App
