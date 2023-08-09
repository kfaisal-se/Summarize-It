import { logo } from '../assets';

const Intro = () => {
  return (
    <header className='flex flex-col items-center justify-center w-full'>
      <nav className='flex items-center justify-between w-full pt-5 mb-10'>
        <img src={logo} alt='sumz_logo' className='object-contain w-28'/>
        <button
          type='button'
          className='black_btn'
          onClick={() => window.open('https://github.com/kfaisal-se/Summarize-It')}
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize Anything With <br />
        <span className='orange_gradient'>OpenAI GPT-4</span>
      </h1>

      <h1 className='desc'>
        Simplify your reading and learning process with Summerize It,
        An open source ariticle summarizer that transforms lengthy
        articles into clear and concise summeries.
      </h1>
    </header>
  )
}

export default Intro