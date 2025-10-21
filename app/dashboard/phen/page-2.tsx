export default function Page () {
    return (
        <> 
    <header>
        <div className="profile">
            <img src="img/phenv2.jpg" alt="My Profile Picture" id="profilePic" />
            <h1>Stephen D. Evina</h1>
            <p>ICT Student in Batanes State College</p>
        </div>
    </header>

    {/* <!-- Navigation bar --> */}
    <nav>
        <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#hobbies">Hobbies</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#personal-info">Personal Info</a></li>
            <li><a href="#contact">Contact</a></li>
            {/* <!-- Buttons styled as nav links --> */}
            <li className="button-link"><a href="#projects">Projects</a></li>
            <li className="button-link"><a href="resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li>
        </ul>
    </nav>

    {/* <!-- About Me Section --> */}
    <section id="about">
        <h2>About Me</h2>
        <p>
            Hello! I’m <strong>Stephen Evina</strong>, a passionate web developer and designer with a love
            for creating interactive and user-friendly websites. I specialize in front-end and back-end
            development, blending design and functionality to craft seamless experiences.
        </p>
    </section>

    {/* <!-- Personal Information Section --> */}
    <section id="personal-info">
        <h2>Personal Information</h2>
        <div className="personal-info">
            <p><i className="fas fa-user"></i> <strong>Full Name:</strong> Stephen Doniapon Evina</p>
            <p><i className="fas fa-hourglass-half"></i> <strong>Age:</strong> 21</p>
            <p><i className="fas fa-cake-candles"></i> <strong>Birthday:</strong> February 19, 2004</p>
            <p><i className="fas fa-heart"></i> <strong>Civil Status:</strong> Widowed</p>
            <p><i className="fas fa-map-marker-alt"></i> <strong>Address:</strong> Uvoy, Mahatao, Batanes</p>
            <p>
                <i className="fas fa-envelope"></i> <strong>Email:</strong>
                <a href="mailto:stephenevina9@gmail.com">stephenevina9@gmail.com</a>
            </p>
            <p>
                <i className="fas fa-phone"></i> <strong>Phone:</strong>
                <a href="tel:+639603537742">09603537742</a>
            </p>
        </div>
    </section>

    {/* <!-- Skills Section --> */}
    <section id="skills">
        <h2>Skills</h2>
        <div className="skills-container">
            <div className="skill"><i className="fas fa-code"></i> HTML &amp; CSS</div>
            <div className="skill"><i className="fas fa-database"></i> SQL</div>
            <div className="skill"><i className="fas fa-paint-brush"></i> Photoshop</div>
            <div className="skill"><i className="fas fa-tools"></i> Palitada</div>
        </div>
    </section>

    {/* <!-- Hobbies Section --> */}
    <section id="hobbies">
        <h2>Hobbies</h2>
        <div className="hobbies-container">
            <div className="hobby">
                <i className="fas fa-fish"></i> Fishing
                <img src="img/fishphen.jpg" alt="Fishing" />
            </div>
            <div className="hobby">
                <i className="fas fa-laptop-code"></i> Coding
                <img src="img/code.jpg" alt="Coding" />
            </div>
            <div className="hobby">
                <i className="fas fa-8-ball"></i> Billiards
                <img src="img/billiards.jpg" alt="Billiards" />
            </div>
            <div className="hobby">
                <i className="fas fa-hiking"></i> Adventurous
                <img src="img/adphen.jpg" alt="Adventurous" />
            </div>
            <div className="hobby">
                <i className="fas fa-gamepad"></i> Online Games
                <img src="img/gaming.jpg" alt="Online Games" />
            </div>
        </div>
    </section>

    {/* <!-- Education Section --> */}
    <section id="education">
        <h2>Education</h2>
        <div className="education-container">
            <div className="education-item">
                <p>Fourth Estate Elementary School BF Extension: 2012 - 2017</p>
                <img src="img/fees.jpg" alt="Elementary School" />
            </div>
            <div className="education-item">
                <p>Mahatao National High School: 2017 - 2022</p>
                <img src="img/mnhs.jpg" alt="High School" />
            </div>
            <div className="education-item">
                <p>Batanes State College: 2023 - 2025</p>
                <img src="img/bsc.jpg" alt="College" />
            </div>
        </div>
    </section>

    {/* <!-- Projects Section --> */}
    <section id="projects">
        <h2>Projects</h2>
        <p>Here are some of my recent projects:</p>
        <ul>
            <li><strong>Portfolio Website:</strong> A responsive personal portfolio built with HTML, CSS, and JavaScript.</li>
            <li><strong>Inventory Management System:</strong> Developed a CRUD app using PHP and MySQL.</li>
            <li><strong>Photo Editing Tool:</strong> Created a simple Photoshop-like app prototype using JavaScript Canvas.</li>
        </ul>
    </section>

    {/* <!-- Contact Section --> */}
    <section id="contact">
        <h2>Contact Me</h2>
        <p>Let's connect! Feel free to reach out via email or social media.</p>
        <div className="social-icons">
            <a href="https://www.facebook.com/stephen.evina" className="fab fa-facebook" aria-label="Facebook"></a>
            <a href="https://www.instagram.com/stephen_evin" className="fab fa-instagram" aria-label="Instagram"></a>
            <a href="https://www.snapchat.com/add/stephenevina" className="fab fa-snapchat" aria-label="Snapchat"></a>
            <a href="https://github.com/PenPanort" className="fab fa-github" aria-label="GitHub"></a>
            <a href="https://www.tiktok.com/@penpanort_t=ZS-8v1O02TKAev&_r=1" className="fab fa-tiktok" aria-label="TikTok"></a>
        </div>
    </section>

    {/* <!-- Footer --> */}
    <footer>
        <p>&copy; 2025 Stephen Evina. All Rights Reserved.</p>
    </footer>
        </>
    )
}