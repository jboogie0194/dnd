import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className='bg-amber-950 w-full block'> jeff react dnd app</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center px-6 py-12">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-indigo-400 drop-shadow">
            DnD 2024 Rules Helper
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Drag-and-Drop tools for characters, encounters, and quick rules reference.
          </p>
        </header>

        {/* Main Card */}
        <section className="bg-gray-800 rounded-xl shadow-xl p-8 border border-gray-700">
          <h2 className="text-3xl font-semibold text-indigo-300 mb-4">
            What’s New in D&D 2024?
          </h2>

          <p className="text-gray-200 mb-4">
            The 2024 update to the rules clarifies core mechanics, reorganizes character
            creation, standardizes terminology, and improves class progression. Below is
            a concise, legally shareable summary of major changes based on the portions
            released under Creative Commons.
          </p>

          {/* Rules List */}
          <ul className="space-y-4 mt-6">
            <li className="bg-gray-700/40 p-4 rounded-lg">
              <h3 className="font-semibold text-indigo-300">🎲 Ability Checks</h3>
              <p className="text-gray-200">
                Ability checks now include clearer definitions for difficulty categories,
                guidance on when proficiency applies, and unified advantage/disadvantage
                handling.
              </p>
            </li>

            <li className="bg-gray-700/40 p-4 rounded-lg">
              <h3 className="font-semibold text-indigo-300">⚔️ Actions & Combat</h3>
              <p className="text-gray-200">
                Rules for actions like Dash, Search, and Help have streamlined wording.
                Weapon properties and common combat interactions are clarified to remove
                ambiguity.
              </p>
            </li>

            <li className="bg-gray-700/40 p-4 rounded-lg">
              <h3 className="font-semibold text-indigo-300">🧙 Spellcasting</h3>
              <p className="text-gray-200">
                Spell preparation rules are unified across several classes. Spell lists
                are reorganized by class theme rather than school.
              </p>
            </li>

            <li className="bg-gray-700/40 p-4 rounded-lg">
              <h3 className="font-semibold text-indigo-300">📜 Character Creation</h3>
              <p className="text-gray-200">
                Backgrounds now provide ability score choices, features, and starting
                equipment in a more consistent structure.
              </p>
            </li>

            <li className="bg-gray-700/40 p-4 rounded-lg">
              <h3 className="font-semibold text-indigo-300">📘 Conditions</h3>
              <p className="text-gray-200">
                Conditions are rewritten for simplicity and clarity, ensuring every one
                functions consistently across spells, items, and class features.
              </p>
            </li>
          </ul>

          {/* CTA */}
          <div className="text-center mt-10">
            <button className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 transition rounded-lg font-semibold">
              Launch the App
            </button>
          </div>
        </section>
      </div>
    </div>
    </>
  )
}

export default App
