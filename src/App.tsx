import { useState } from 'react'
import './App.css'

function App() {
  
  const countries = ['India', 'USA', 'France'];

  const [selection, setSelection] = useState<string[]>([]);

  const handleChange = (country: string) => {
    setSelection(prev => prev.includes(country) ? prev.filter(c => c !== country) : [...prev, country]
    );
  }

  const handleSelectAll = (checked: boolean) => {
    console.log(checked)
    if (checked) {
      setSelection(countries);
    }else{
      setSelection([]);
    }
  }
  return (
    <div>
    <div className="checkbox-item">
      <label>
        <input
          type="checkbox"
          checked={selection.length === countries.length}
          onChange={(e) => handleSelectAll(e.target.checked)}
        />
        Select All
      </label>
    </div>
    {countries.map(country => (
      <div key={country} className="checkbox-item">
        <label>
          <input
            type="checkbox"
            checked={selection.includes(country)}
            onChange={() => handleChange(country)}
          />
          {country}
        </label>
      </div>
    ))}
  </div>
  )
}

export default App
