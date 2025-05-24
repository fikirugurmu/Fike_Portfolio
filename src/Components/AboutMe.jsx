import { Briefcase, Code, User } from 'lucide-react'
import React from 'react'

const AboutMe = () => {
  return (
    <section id='about' className='py-24 px-4 relative '>
        <div className='container mx-auto max-w-5xl'>
           <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
               About <span className='text-primary'>Me</span>     
           </h2>
           <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
               <div className='space-y-6'>
                   <h3 className='text-2xl font-bold'>Passionate Web Developer crafting sleek, user-focused digital experiences.</h3>

                   <p className='text-muted-foreground'>
                    With over four years of experience in web development, I specialize in crafting responsive, accessible, 
                    and high-performance web applications. Leveraging modern technologies, I deliver solutions that not only 
                    look great but also provide seamless functionality and exceptional user experiences across all devices.
                   </p>
                   <p className='text-muted-foreground'>
                     I’m passionate about crafting elegant solutions to complex challenges, continuously expanding my 
                     skill set to stay ahead in the fast-paced, ever-evolving world of web development. Embracing new technologies and 
                     best practices is at the core of how I grow and deliver impactful results.
                   </p>

                   <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                      <a href="#contact" className='cosmic-button'>
                           Get In Touch
                      </a>
                      <a href="" className='px-6 py-2 rounded-full border border-primary hover:bg-primary/10 transition-colors duration-300'>
                           Download CV
                      </a>
                   </div>
               </div>
               <div className='grid grid-cols-1 gap-6'>
                   <div className='gradient-border p-6 card-hover'>
                    <div className='flex items-start gap-4 '>
                      <div className='p-3 rounded-full bg-primary/10'>
                         <Code className='h-6 w-6 text-primary'/>
                      </div>
                      <div className='text-left'>
                              <h4 className='font-semibold text-2xl'>Web Development</h4>
                              <p className='text-muted-foreground'>Creating responsive websites and web applications with modern frameworks.</p>
                      </div>
                    </div>
                   </div>
                   <div className='gradient-border p-6 card-hover'>
                    <div className='flex items-start gap-4'>
                      <div className='p-3 rounded-full bg-primary/10'>
                         <User className='h-6 w-6 text-primary'/>
                      </div>
                      <div className='text-left'>
                              <h4 className='font-semibold text-2xl'>UI/UX Design</h4>
                              <p className='text-muted-foreground'>Designing intuitive user interfaces and seamless user experiences.</p>
                      </div>
                    </div>
                   </div>
                   <div className='gradient-border p-6 card-hover'>
                    <div className='flex items-start gap-4'>
                      <div className='p-3 rounded-full bg-primary/10'>
                         <Briefcase className='h-6 w-6 text-primary'/>
                      </div>
                      <div className='text-left'>
                              <h4 className='font-semibold text-2xl'>Project Management</h4>
                              <p className='text-muted-foreground'>Leading projects from conception to completion with agile methodologies.</p>
                      </div>
                    </div>
                   </div>
               </div>
           </div>
        </div>
    </section>
  )
}

export default AboutMe
