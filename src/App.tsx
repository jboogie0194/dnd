import './App.css'

function App() {
  return (
    <>
      <nav>
        <ul>
          <li><a href="#" className="secondary">...</a></li>
        </ul>
        <ul>
          <li><strong>D&D Beyond Companion</strong></li>
        </ul>
        <ul>
          <li><a href="#" className="secondary">...</a></li>
        </ul>
      </nav>
      <main className="flex">
        <article className='mx-auto max-w-[600px]'>
          <form className='flex flex-col w-full max-w-[650px] mx-auto text-left' action="/action_page.php">
            <label htmlFor="fname">First name:</label>
            <input type="text" id="fname" name="fname" value="John" />
            <label htmlFor="lname">Last name:</label>
            <input type="text" id="lname" name="lname" value="Doe" />
            <input type="submit" value="Submit" />
          </form>
        </article>
      </main>
    </>
  )
}

export default App
