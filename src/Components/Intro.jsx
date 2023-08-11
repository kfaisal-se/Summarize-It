import { logo } from '../assets';

const Intro = () => {
  return (
    <header className='flex flex-col items-center justify-center w-full'>
      <nav className='flex items-center justify-between w-full pt-5 mb-10'>
        {/* <img src={logo} alt='sumz_logo' className='object-contain w-28'/> */}
        <div className='flex flex-col items-center justify-between w-full gap-2 sm:flex-row'>
          <div>
            <span className='px-5 mx-1 text-3xl border border-blue-500 rounded-full blue_gradient'>Summarize</span>
            <span className='px-5 text-3xl border border-blue-500 rounded-full blue_gradient'>IT</span>
          </div>

          <button
            type='button'
            className='black_btn '
            onClick={() => window.open('https://github.com/kfaisal-se/Summarize-It')}
          >
            GitHub
          </button>
        </div>
      </nav>

      <h1 className='head_text'>
        Summarize Anything With <br />
        <span className='blue_gradient'>OpenAI GPT-4</span>
      </h1>

      <h1 className='desc'>
        Simplify your reading and learning process with "Summarize It".
        <br />
        An AI powered article summarizer that transforms lengthy
        articles into clear and concise summaries.
        <br />
        <br />
        <span className="blue_gradient">Paste the URL and see the magic.</span>
      </h1>
    </header>
  )
}

export default Intro