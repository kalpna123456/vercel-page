import React, { useState } from 'react';
import "./App.css";
import femalLogo from "./img/femalLogo.png";
import one from "./img/one.jpg";

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // Best Practice: Dynamic Data Arrays takay code clean rahe
  const skillsData = [
    { icon: "🌐", title: "HTML5 & CSS3", desc: "Building semantic, accessible, and beautiful web pages." },
    { icon: "⚡", title: "JavaScript", desc: "Adding rich dynamic functionality and interactive elements." },
    { icon: "⚛️", title: "React.js", desc: "Creating fast single-page applications with reusable components." },
    { icon: "🟢", title: "Node & Express", desc: "Developing scalable and secure backend server architectures." },
    { icon: "🍃", title: "MongoDB", desc: "Managing data efficiently with Mongoose database models." }
  ];
   // Aapke original code ke design ke mutabiq 6 simple projects ka data
  const projectsData = [
    { title: "E-Commerce Website", tech: "Built with React and Node.js", img: one },
    { title: "Portfolio Website", tech: "Built with React and CSS3", img: one },
    { title: "Social Media App", tech: "Built with MERN Stack", img: one },
    { title: "Task Management Tool", tech: "Built with React and Redux", img: one },
    { title: "Weather Forecast Dashboard", tech: "Built with React and OpenWeather API", img: one },
    { title: "Chat Application", tech: "Built with React and Socket.io", img: one }
  ];



  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      if (data.success) {
        alert(`Mubarak ho! ${formData.name} Data save ho gaya.`);
      
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert("Error: Data save nahi ho saka.");
      }
    } catch (error) {
      alert("Server se connect nahi ho saka.");
    }
  };

  return (
    <>
      <header>
        <div className="logo">kalpna<span>.D</span></div>
        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
        </nav>
        <a href="#contact" className="btn-header">Contact</a>
      </header>

      {/* Best Practice: Wrapping main content inside <main> */}
      <main className="page">
        
        {/* Home Section */}
        <section className="sec-one" id="home">
          <div className="sec-one-part">
            <div className="sec-one-part-text">
              <h1>Building <span>Modern</span><br />Web Interfaces</h1>
              <p>I am a passionate developer specializing in creating clean, fast, and user-friendly websites.</p>
              <div className="sec-one-button">
                <button className="sec-one-button-btn-one">View My Work</button>
                <button className="sec-one-button-btn-two">Let's Talk</button>
              </div>
            </div>
            <div className="sec-one-part-img">
              <img src={femalLogo} alt="Kalpna Developer Logo" />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="sec-two" id="about">
          <div className="sec-two-part">
            <div className="sec-two-part-text">
              <h1>My <span>About</span></h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="sec-two-part-inside">
              <div className="sec-two-part-inside-one">
                <h3>Education</h3>
                <h4>BS Computer Science</h4>
                <h5>2022 - 2026</h5>
              </div>
              <div className="sec-two-part-inside-one">
                <h3>Certifications</h3>
                <ul>
                  <li>Frontend Developer Course</li>
                  <li>Backend Developer Course</li>
                  <li>Logo Design Masterclass</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section using Dynamic Loop (.map) */}
        <section className="sec-three" id="skills">
          <div className="sec-three-text">
            <h1>My <span>Tech Stack</span></h1>
          </div>
          <div className="sec-three-main-part">
            {skillsData.map((skill, index) => (
              <div className="sec-three-part" key={index}>
                <div className="sec-three-part-icon">{skill.icon}</div>
                <div className="sec-three-part-text">
                  <h3>{skill.title}</h3>
                  <p>{skill.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

  <section className="sec-four" id="projects">
    <div className="sec-four-text">
      <h1>My <span>Projects</span></h1>
      <br/><br/>
    </div>

    {/* Aapka original flex/grid layout loop jo har card ko barabar render karega */}
    <div className="sec-four-part">
      {projectsData.map((project, index) => (
        <div className="sec-four-part-inside-text" key={index}>
          <div className="sec-four-part-inside-img">
            <img src={project.img} alt="project-thumbnail"/>
            <div className="overlay">
              <div className="sec-overlay">
                <button className="overlay-btn">click me!</button>
              </div>
            </div>
          </div>
          <div className="sec-four-part-inside-text-one">
            <h2>{project.title}</h2>
            <h4>{project.tech}</h4>
          </div>
        </div>
      ))}
    </div>
  </section>

        {/* Contact Section */}
        <section className="sec-five" id="contact">
          <div className="contact-container">
            <h1>Contact <span>Me</span></h1>
            <form onSubmit={handleSubmit} className="contact-form">
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
              />
              <input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
              <textarea 
                name="message" 
                placeholder="Your Message" 
                value={formData.message} 
                onChange={handleChange} 
                required
              ></textarea>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </section>

      </main>
            {/* Sleek Modern Footer Section */}
      <footer className="footer-section">
        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-logo">
              kalpna<span>.D</span>
            </div>
            <p className="footer-tagline">Building modern, fast, and accessible digital experiences.</p>
            <div className="footer-socials">
              <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">GitHub</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">LinkedIn</a>
              <a href="mailto:kpsuthar996@gmail.com" aria-label="Email">Email</a>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} kalpna.D. All rights reserved.</p>
            <div className="footer-back-to-top">
              <a href="#home">Back to top ↑</a>
            </div>
          </div>
        </div>
      </footer>

    </>
  );
}

export default App;
