import React from 'react'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { Github } from 'lucide-react'
const projects = [
     {id:1,
      title:"Shoe Shop Landing Page", 
      description:"A beautiful landing page using React, Tailwind and JavaScript.",
      image1:"/projects/shoe_1.png",
      image2:"/projects/shoe_2.png",
      image3:"/projects/shoe_3.png",
      tags:["React","TailwindCSS","JavaScript"],
      demoUrl: "#",
      githubUrl: "#"

     },
     {id:2,
      title:"facebook Landing Page", 
      description:"A beautiful landing page using React, Tailwind and JavaScript",
      imagef:"/projects/facebook.png",
      tags:["React","TailwindCSS","JavaScript"],
      demoUrl: "#",
      githubUrl: "https://github.com/fikirugurmu"

     }         
]

const Projects = () => {
  return (
    <section id='projects' className='py-24 px-4 relative'>
       <div className='container mx-auto max-w-5xl p-4'>
            <h2 className='text-3xl md:4xl font-bold mb-4 text-center'>Featured <span className='text-primary'>Projects</span></h2>
            <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                  Here are some of my recent projects. Each project was carefully crafted with attention to detail,perform  
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {projects.map((project,key)=>(
                  <div key={key} className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover'>
                        <img src={project.image1} alt='' className='w-full object-cover transition-transform duration-500 group-hover:scale-110'/>
                        <img src={project.image2} alt='' className='w-full object-cover transition-transform duration-500 group-hover:scale-110'/>
                        <img src={project.image3} alt='' className='w-full object-cover transition-transform duration-500 group-hover:scale-110'/>
                        <img src={project.imagef} alt='' className='w-full object-cover transition-transform duration-500 group-hover:scale-110'/>

                        <div className='p-6 flex-wrap gap-2mb-2'>
                          {project.tags.map((tag, key)=>(
                            <span className='px-2 m-3 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground'>{tag}</span>
                          ))}

                        </div>
                        <h3 className='text-xl font-semibold mb-2'>{project.title}</h3>
                        <p className='text-muted-foreground text-sm mb-4 p-4'>{project.description}</p>
                        <div className='flex justify-between items-center'>
                             <div className='flex space-x-3 ml-3 mb-4'>
                                  <a href={project.demoUrl} target="_blank" className='text-foreground/80 hover:text-primary transition-colors duration-300'>
                                    <ExternalLink  size={20}/>
                                  </a>
                                  <a href={project.githubUrl} target='_blank' className='text-foreground/80 hover:text-primary transition-colors duration-300'>
                                    <Github  size={20}/>
                                  </a>
                             </div>
                        </div>
                  </div>
                ))} 
            </div>
            <div className='text-center mt-12'>
                 <a href="https://github.com/fikirugurmu" target='_blank' className='cosmic-button w-fit flex items-center mx-auto gap-2'>
                  Check My Github <ArrowRight size={16}/>
                 </a>
            </div>
       </div>
    </section>
  )
}

export default Projects
