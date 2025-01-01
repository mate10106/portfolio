export const projects = [
  {
    id: 1,
    title: "Brainwave: Modern UI/UX Framework",
    des: "Develop a cutting-edge website with Brainwave, an advanced UI/UX framework built with React.js and Tailwind CSS. Empower developers to create visually stunning, highly responsive web applications with sleek interfaces, smooth animations, and exceptional user experiences.",
    img: "/brainwave.png",
    iconLists: [
      { icon: "/re.svg", label: "React" },
      { icon: "/tail.svg", label: "Tailwind" },
      { icon: "/icons8-javascript-48.png", label: "JavaScript" },
    ],
    link: "https://github.com/mate10106/brainwave",
    livedemo: "https://brainwave-six-flame.vercel.app/",
    blogLink: "",
  },
  {
    id: 2,
    title: "LiveDocs: Enhanced Google Docs for Millions",
    des: "Build a collaborative application by creating LiveDocs, an enhanced Google Docs that supports millions of real-time collaborators.",
    img: "/BMLiveDocs.png",
    iconLists: [
      { icon: "/next.svg", label: "Next.js" },
      { icon: "/tail.svg", label: "Tailwind" },
      { icon: "/ts.svg", label: "TypeScript" },
      { icon: "/shadcn.png", label: "shadcn" },
      { icon: "/liveblocks.jpg", label: "Liveblocks" },
      { icon: "/c.svg", label: "Clerk" },
    ],
    link: "https://github.com/mate10106/bm_liveDocs/",
    livedemo: "https://bm-live-docs.vercel.app/",
    blogLink: "/blogs/3",
  },
  {
    id: 3,
    title: "Healthcare Platform - CarePulse",
    des: "Create a healthcare platform that streamlines patient registration, appointment scheduling, and medical records management. Additionally, include features for advanced forms and SMS notifications.",
    img: "/carepulse.png",
    iconLists: [
      { icon: "/next.svg", label: "Next.js" },
      { icon: "/tail.svg", label: "Tailwind" },
      { icon: "/ts.svg", label: "TypeScript" },
      { icon: "/shadcn.png", label: "shadcn" },
      { icon: "/appwrite.svg", label: "Appwrite" },
      { icon: "/twilio.svg", label: "Twilio" },
    ],
    link: "https://github.com/mate10106/bm_CarePulse",
    livedemo: "https://bm-care-pulse.vercel.app/",
    blogLink: "/blogs/1",
  },
  {
    id: 4,
    title: "Horizon is a modern banking platform for everyone.",
    des: "Horizon is a modern banking platform for everyone. Connect multiple accounts, transfer funds, track spending by category, and view all transactions seamlessly.",
    img: "/bmBank.png",
    iconLists: [
      { icon: "/next.svg", label: "Next.js" },
      { icon: "/tail.svg", label: "Tailwind" },
      { icon: "/ts.svg", label: "TypeScript" },
      { icon: "/shadcn.png", label: "shadcn" },
      { icon: "/appwrite.svg", label: "Appwrite" },
      { icon: "/dwolla.svg", label: "Dwilio" },
    ],
    link: "https://github.com/mate10106/bm_banking",
    livedemo: "https://bm-banking.vercel.app/",
    blogLink: "/blogs/2",
  },
];

export const blogs = [
  {
    id: 1,
    title: "Case Study - CarePulse",
    date: "Jun 28, 2024",
    link: "https://bm-care-pulse.vercel.app",
    listItems: [
      "CarePluse: Revolutionizing Healthcare with Streamlined Solutions",
      "How CarePluse Enhances Patient Experience with Modern Tools",
      "CarePluse - Simplifying Healthcare with Efficient Management",
    ],
    summary:
      "CarePluse streamlines healthcare with patient registration, appointment scheduling, and records management. Doctors can mark appointments as scheduled or cancel them, sending SMS notifications to patients. Advanced forms ensure a smooth, efficient process, enhancing patient convenience and overall experience.",
    mission:
      "The mission of the CarePluse project is to create a modern healthcare platform designed for everyone, enabling users to book appointments and manage medical records with ease and efficiency. The main challenge was to integrate appointment scheduling and patient registration seamlessly, ensuring secure and smooth communication between doctors and patients while providing a comprehensive overview of all healthcare activities. Additionally, we aimed to send automatic SMS notifications for appointment confirmations or cancellations by doctors, presenting information in an intuitive and user-friendly interface. The objective was to offer users the ability to effortlessly book appointments, receive timely notifications from doctors. Despite the complexity, the project was completed within a tight one-week deadline.",
    motivationImage: "/carepulse.png",
    process:
      "The development of CarePluse presented an exciting challenge as a solo project. I initiated the process by clearly defining project goals and requirements. With a comprehensive understanding of the scope, I proceeded to create a detailed timeline and implemented a task management system to monitor progress and ensure adherence to the one-week deadline.",
    processImage: "/process-svgrepo-com.svg",
    processDescription: `So, when I kicked off CarePluse, I knew I had to pick the right tech to make it user-friendly and snappy. I dove into a bunch of research on different dev tools, weighing the pros and cons to figure out what would work best for what I needed. It was like being a kid in a candy store, but instead of sweets, I was surrounded by cool frameworks and libraries.

                        I ended up going with Next.js as the main framework. It's great for server-side stuff, which meant faster loading times - always a win. Plus, it plays nice with React, which I'm pretty comfortable with. The whole server-side rendering thing really helps with SEO too, which is a big deal for any web app these days.

                        For handling appointments and notifications, I went with Twilio. It's solid for sending out SMS notifications securely, keeping doctors and patients in the loop. First time using Twilio, so there were some hiccups with the API, but I hit up online forums and even got some AI help to figure it out. It was like learning a new language, but instead of "hello" and "goodbye," I was learning "sendSMS" and "createAppointment."
    
                        I picked Appwrite for the backend because it's pretty flexible and has a lot of cool features. It was actually my first time using Appwrite, so it was like exploring a new city - exciting, but with a bit of that "where am I?" feeling at times. I had to learn the lay of the land, figure out where all the good stuff was, and sometimes I took a few wrong turns. But that's part of the fun, right? Diving into a new technology and discovering all it can do.

                        Learning Appwrite was a bit of an adventure. I spent some time digging through the docs, watching tutorials, and even jumping into their community forums when I got stuck. It was like putting together a puzzle, piece by piece, until the whole picture of how to use it for CarePluse came together.

                        The whole process was a mix of problem-solving, learning on the fly, and adapting as I went. Some days I felt like a coding superhero, other days I was more like a confused detective trying to solve the mystery of why my code wasn't working. But that's the fun of development, right?

                        I ran into a few roadblocks along the way, like figuring out how to sync up the appointment scheduling with the SMS notifications. There were a couple of late nights fueled by coffee and determination, but eventually, I cracked it. It was one of those "aha!" moments that make all the hard work worth it.

                        Looking back, I learned a ton during this project. Not just about the specific technologies I used, but also about managing my time, prioritizing features, and the importance of taking breaks (even if it's just to refill the coffee mug). It's amazing how much you can accomplish when you're passionate about what you're building and have the right tools at your disposal.`,
    mobileImage: {
      one: "/mobilecarePulse1.png",
      two: "/mobilecarePulse2.png",
    },
    design:
      "To make everything look good and work smoothly on different devices, I used Tailwind CSS and Shadcn UI. Tailwind made styling stuff a breeze, and Shadcn UI had a bunch of ready-to-use components that saved me a ton of time. It's like having a box of Legos where all the pieces fit together perfectly - you can build something awesome really quickly.",
    result: `The CarePlus project has exceeded expectations, delivering a state-of-the-art healthcare platform that fully satisfies our client's requirements. By incorporating industry best practices in information architecture, user flow, and accessibility, we've created a solution that not only meets but enhances the healthcare management experience.
              The platform's technical excellence is validated by the Chrome browser's Lighthouse report, which awarded CarePlus a perfect 100% performance score. This exceptional rating underscores the platform's optimization, ensuring lightning-fast load times and a fluid user experience. High marks in accessibility, best practices, and SEO further demonstrate our commitment to creating an inclusive, standards-compliant solution.`,
    overall:
      "Now, I'm excited to see how CarePluse performs in the real world. There's always room for improvement, and I'm already thinking about new features and optimizations for the next version. But for now, I'm just proud to have turned an idea into a working platform that could make a real difference in healthcare management.",
    resultImage: "/carePulsePerformance.png",
    conclusion: `User feedback has been overwhelmingly positive, with testimonials highlighting the platform's user-friendly interface and powerful functionality. Users have particularly praised the ease of patient registration, seamless appointment scheduling, and timely SMS notifications.
                 This positive response confirms that CarePlus successfully fulfills our client's vision for a user-centric healthcare platform. By providing a comprehensive, intuitive interface that enhances patient convenience and streamlines healthcare management, we've delivered a solution that truly makes a difference in the healthcare experience.
                 The success of CarePlus demonstrates our ability to create innovative, user-focused solutions that not only meet technical requirements but also genuinely improve the lives of end-users and healthcare providers alike.`,
  },
  {
    id: 2,
    title: "Case Study - Horizon",
    date: "Jul 10, 2024",
    link: "https://bm-banking.vercel.app",
    listItems: [
      "Horizon: Revolutionizing Banking with Modern Technology",
      "How Horizon Enhances Financial Management for Everyone",
      "Horizon - Simplifying Personal Finance and Banking Management",
    ],
    summary:
      "Horizon is a modern banking platform designed for everyone. Easily connect multiple bank accounts, transfer funds, and track your spending by category. The intuitive interface allows you to view all your transactions in one place, providing a comprehensive overview of your financial activity and management.",
    mission:
      "The mission of the Horizon project was to create a modern banking platform designed for everyone, enabling users to manage their finances with ease and efficiency. The main challenge was to integrate multiple bank accounts seamlessly, ensuring secure and smooth transfers of funds while providing a comprehensive overview of all financial activities. Additionally, we aimed to categorize spending automatically and present it in an intuitive and user-friendly interface. The objective was to offer users the ability to effortlessly connect various bank accounts, transfer funds securely, and track their spending by category. Despite the complexity, the project was completed within a tight two-week deadline.",
    motivationImage: "/bmBank.png",
    process:
      "The development of Horizon was an exciting challenge for me as a solo developer. I began by defining clear project goals and requirements. Once I had a thorough understanding of the project's scope, I created a detailed timetable and used a task management system to keep track of my progress and ensure that I met the two-week deadline.",
    processImage: "/process-svgrepo-com.svg",
    processDescription: `As I started developing Horizon, I knew I needed to carefully select the technologies that would enable me to create a user-friendly and responsive platform. I began with extensive research on various development tools. I explored the benefits and drawbacks of each technology to determine which would be most suitable for Horizon's requirements. I studied their features, performance, scalability, and ease of use to identify the best options.

                        After extensive research, I chose Next.js as the framework for Horizon. Its ability to create server-side rendered applications allowed me to optimize the initial load time of the application, resulting in a faster, more streamlined user experience. The learning curve with Next.js was challenging, especially understanding its file system, but it was a rewarding process.

                        For financial integrations, I selected Plaid and Dwolla. Plaid provided secure and reliable access to users' financial data, while Dwolla facilitated seamless money transfers. Using these tools for the first time required me to handle numerous TypeScript errors, but I effectively used Google and AI assistance to find solutions and improve my proficiency with these technologies.

                        Appwrite was chosen for backend services due to its robust features and flexibility. This was my second time using Appwrite, and I became more familiar with its capabilities, which significantly helped in managing the backend operations.`,
    mobileImage: {
      one: "/mobileHorizon1.png",
      two: "/mobileHorizon2.png",
    },
    design:
      "To ensure the platform was visually appealing and responsive, I utilized Tailwind CSS and Shadcn UI. Tailwind CSS's utility-first approach made it easy to style the components consistently, and Shadcn UI's pre-designed components greatly simplified the development process. These tools ensured that Horizon was not only user-friendly but also met the expectations of modern web design standards.",
    overall:
      "Overall, my development process involved extensive problem-solving, learning, and adaptation. By leveraging the right tools and technologies, I was able to create a comprehensive banking platform within the two-week deadline, delivering a product that was efficient, responsive, and user-friendly.",
    result: `The Horizon project has exceeded expectations, fulfilling all client requirements and delivering an exceptional collaborative platform. The solution seamlessly integrates best practices in information architecture, user flow, and accessibility, resulting in a product that precisely meets the client's needs.
          
             The project's success is quantifiably demonstrated by the Chrome browser's Lighthouse report. With an outstanding performance score of 99%, the platform exhibits remarkable speed and efficiency, ensuring users enjoy a fluid and responsive experience. Additionally, the project garnered high marks in accessibility, best practices, and SEO, underscoring its adherence to industry standards and commitment to inclusivity.`,
    resultImage: "/horizonPerformance.png",
    conclusion:
      "The focus on creating a user-friendly interface resulted in positive feedback from users. One satisfied user wrote a positive testimonial, highlighting the platform's ease of use, the ability to connect multiple bank accounts effortlessly, transfer funds securely, and track spending by category. The positive feedback confirms that I met the client's requirements of creating a user-friendly banking platform that provides a comprehensive overview of financial activity and management in a single, intuitive interface.",
  },
  {
    id: 3,
    title: "Case Study - LiveDocs",
    date: "Jul 25, 2024",
    link: "https://bm-live-docs.vercel.app",
    listItems: [
      "LiveDocs: Revolutionizing Collaboration with Enhanced Real-Time Editing",
      "How LiveDocs Empowers Seamless Teamwork and Productivity",
      "LiveDocs - Transforming Document Editing for Large-Scale Collaboration",
    ],
    summary:
      "Create a collaborative application with LiveDocs, an enhanced version of Google Docs, supporting millions of real-time collaborators. Empower users to work together seamlessly, edit documents simultaneously, and experience unparalleled productivity and efficiency with this innovative tool designed for large-scale teamwork and collaboration.",
    mission:
      "The mission of the LiveDocs project is to create a modern collaborative platform designed for everyone, enabling users to work together seamlessly, edit documents simultaneously, and experience unparalleled productivity and efficiency. The main challenge was to support millions of real-time collaborators while ensuring secure and smooth communication among users and providing a comprehensive overview of all document activities. Additionally, we aimed to implement features allowing users to invite others, send notifications about invitations, and enable everyone to see if someone is watching the document. The document creator can add, delete, and control permissions, choosing if invitees can edit or just view. Despite the complexity, the project was completed within a tight two-week deadline.",
    motivationImage: "/BMLiveDocs.png",
    process:
      "Took on LiveDocs solo, aiming to complete it in two weeks. Kicked things off by nailing down clear goals and requirements. Then, I got organized with a detailed timeline and a task management system to keep track of everything. This structured approach helped me stay on top of the project and meet the tight deadline.",
    processImage: "/process-svgrepo-com.svg",
    processDescription: `As I started developing LiveDocs, I knew I needed to carefully select the technologies that would enable me to create a user-friendly and responsive platform. I began with extensive research on various development tools, exploring the benefits and drawbacks of each technology to determine which would be most suitable for LiveDocs' requirements. I studied their features, performance, scalability, and ease of use to identify the best options.

                        After extensive research, I chose Next.js as the framework for LiveDocs. Its ability to create server-side rendered applications allowed me to optimize the initial load time, resulting in a faster, more streamlined user experience. I have always been a fan of Next.js, and it proved to be a great choice for this project.

                        For real-time collaboration and document editing, I selected Liveblocks and Lexical Editor. Liveblocks provided secure and reliable real-time collaboration services, ensuring seamless teamwork and instant notifications when users are invited or viewing the document. Lexical Editor enabled robust and flexible document editing capabilities. Using these tools required handling numerous integration issues, but I effectively used online resources and AI assistance to find solutions and improve my proficiency with the technology.

                        To manage user authentication and data, I used Clerk. This was my first time using Clerk, and it provided a secure and efficient way to handle user data and authentication, further enhancing the user experience.`,
    mobileImage: {
      one: "/mobileliveDocs1.png",
      two: "/mobileliveDocs2.png",
    },
    design:
      "To ensure the platform was visually appealing and responsive, I utilized Tailwind CSS and ShadCN. Tailwind CSS's utility-first approach made it easy to style the components consistently, and ShadCN's pre-designed components greatly simplified the development process. These tools ensured that LiveDocs was not only user-friendly but also met the expectations of modern web design standards.",
    overall:
      " Overall, my development process involved extensive problem-solving, learning, and adaptation. By leveraging the right tools and technologies, I was able to create a comprehensive collaborative platform within the two-week deadline, delivering a product that was efficient, responsive, and user-friendly.",
    result: `The LiveDocs project has successfully delivered an exceptional collaborative platform, surpassing client expectations and setting a new standard in document collaboration. By integrating best practices in information architecture, user flow, and accessibility, we've created a solution that not only meets but elevates the collaborative work experience.
              The platform's technical prowess is evident in its Chrome Lighthouse report, boasting an impressive 93% performance score. This high rating underscores LiveDocs' optimization, ensuring swift loading times and a responsive user interface. Strong performances in accessibility, best practices, and SEO further demonstrate our commitment to creating an inclusive, standards-compliant solution accessible to all users.`,
    resultImage: "/liveDocsPerformance.png",
    conclusion: `User feedback has been overwhelmingly positive, with testimonials highlighting the platform's intuitive interface and powerful functionality. Users have particularly praised the ease of real-time collaboration and the smooth document editing experience.
                  This positive response confirms that LiveDocs successfully fulfills our client's vision for a user-centric collaborative platform. By providing a comprehensive, intuitive interface that enhances productivity and streamlines teamwork, we've delivered a solution that truly transforms how teams work together.
                  The success of LiveDocs showcases our ability to create innovative, user-focused solutions that not only meet technical requirements but also significantly enhance the collaborative work experience. It represents a leap forward in document collaboration technology, empowering teams to achieve unprecedented levels of productivity and efficiency.`,
  },
];

export const SocialButtons = [
  {
    id: 1,
    href: "https://github.com/mate10106",
    icon: "/github-mark-white.png",
    label: "Github",
    target: "_blank",
  },
  {
    id: 2,
    href: "https://linkedin.com/in/brösztl-máté/",
    icon: "/LI-In-Bug.png",
    label: "LinkedIn",
    target: "_blank",
  },
  {
    id: 3,
    href: "/blogs",
    icon: "/blog-svgrepo-com.svg",
    label: "Blogs",
    target: "_self",
  },
  {
    id: 4,
    href: "/Önéletrajz.pdf",
    icon: "/flag-hu.svg",
    label: "CV",
    target: "_blank",
  },
  {
    id: 5,
    href: "/ResumeENG.pdf",
    icon: "/uk-flag.svg",
    label: "CV",
    target: "_blank",
  },
];
