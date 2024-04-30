import './App.css'

function App() {


  return (
    <div className='w-[100lvw] min-h-[100vlh] font-body overflow-hidden bg-[#edf2f8]'>
      <div className='grid grid-cols-1 gap-6 mx-5 mt-16 mb-6'>


        <article className='px-6 py-8 rounded-lg text-white bg-[#733fc8]'>
          <div className='flex flex-row items-center mb-6'>
            <div className='flex items-center w-10 h-10 mr-4 rounded-full overflow-hidden border-2 border-[#a27edd]'>
              <img src="/images/image-daniel.jpg" alt="" />
            </div>
            <div className='flex flex-col justify-center'>
              <h2 className='text-sm'>Daniel Clifford</h2>
              <p className='text-xs opacity-50'>Verified Graduate</p>
            </div>
          </div>
          <p className='pr-3 text-xl tracking-wide leading-6 font-medium mb-4'>
            I received a job offer mid-course, and the subjects I learned were current, if not more so,
            in the company I joined. I honestly feel I got every penny’s worth.
          </p>
          <p className='text-sm text-[#cecece] opacity-70'>
            “ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a
            transition and have heard some people who had an amazing experience here. I signed up
            for the free intro course and found it incredibly fun! I enrolled shortly thereafter.
            The next 12 weeks was the best - and most grueling - time of my life. Since completing
            the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”
          </p>
        </article>

        
        <article className='px-6 py-8 rounded-lg text-white bg-[#49556b]'>
          <div className='flex flex-row items-center mb-6'>
            <div className='flex items-center w-10 h-10 mr-4 rounded-full overflow-hidden border-2 border-[#9ba1ab]'>
              <img src="/images/image-jonathan.jpg" alt="" />
            </div>
            <div className='flex flex-col justify-center'>
              <h2 className='text-sm'>Jonathan Walters</h2>
              <p className='text-xs opacity-50'>Verified Graduate</p>
            </div>
          </div>
          <p className='pr-3 text-xl tracking-wide leading-6 font-medium mb-4'>The team was very supportive and kept me motivated</p>
          <p className='text-sm opacity-70'>
            “ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer
            for a big company. This was one of the best investments I’ve made in myself. ”
          </p>
        </article>

        <article className='px-6 py-8 rounded-lg text-[#49505b] bg-white shadow-lg'>
          <div className='flex flex-row items-center mb-6'>
            <div className='flex items-center w-10 h-10 mr-4 rounded-full overflow-hidden border-2 border-white'>
              <img src="/images/image-jeanette.jpg" alt="" />
            </div>
            <div className='flex flex-col justify-center'>
              <h2 className='text-sm'>Jeanette Harmon</h2>
              <p className='text-xs opacity-50'>Verified Graduate</p>
            </div>
          </div>
          <p className='pr-3 text-xl tracking-wide leading-6 font-medium mb-4'>An overall wonderful and rewarding experience</p>
          <p className='text-sm opacity-70'>
            “ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living
            while doing something I love. ”
          </p>
        </article>
        <article className='px-6 py-8 rounded-lg text-white bg-[#18202d]'>
          <div className='flex flex-row items-center mb-6'>
            <div className='flex items-center w-10 h-10 mr-4 rounded-full overflow-hidden border-2 border-[#a27edd]'>
              <img src="/images/image-patrick.jpg" alt="" />
            </div>
            <div className='flex flex-col justify-center'>
              <h2 className='text-sm'>Patrick Abrams</h2>
              <p className='text-xs opacity-50'>Verified Graduate</p>
            </div>
          </div>
          <p className='pr-3 text-xl tracking-wide leading-6 font-medium mb-4'>
            Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and
            learning from their experiences was easy.
          </p>
          <p className='text-sm opacity-70'>
            “ The staff seem genuinely concerned about my progress which I find really refreshing. The program
            gave me the confidence necessary to be able to go out in the world and present myself as a capable
            junior developer. The standard is above the rest. You will get the personal attention you need from
            an incredible community of smart and amazing people. ”
          </p>
        </article>
        <article className='px-6 py-8 rounded-lg text-[#49505b] bg-white shadow-lg'>
          <div className='flex flex-row items-center mb-6'>
            <div className='flex items-center w-10 h-10 mr-4 rounded-full overflow-hidden border-2 border-white'>
              <img src="/images/image-kira.jpg" alt="" />
            </div>
            <div className='flex flex-col justify-center'>
              <h2 className='text-sm'>Kira Whittle</h2>
              <p className='text-xs opacity-50'>Verified Graduate</p>
            </div>
          </div>
          <p className='pr-3 text-xl tracking-wide leading-6 font-medium mb-4'>Such a life-changing experience. Highly recommended!</p>
          <p className='text-sm opacity-70'>
            “ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from
            professionals who can help me learn programming step by step. I was encouraged to enroll by a former
            student of theirs who can only say wonderful things about the program. The entire curriculum and staff
            did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team
            project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial
            could ever have. In fact, I’ve often referred to it during interviews as an example of my developent
            experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers.
            100% recommend! ”
          </p>
        </article>
      </div>
    </div>
  )
}

export default App
