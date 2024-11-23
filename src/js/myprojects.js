const projects = [
    {
        images: {
            "360": { "1x": "./img/myproject/Financ-mob.1x.jpg", "2x": "./img/myproject/Financ-mob.2x.jpg" },
            "767": { "1x": "./img/myproject/Financ-tab.1x.jpg", "2x": "./img/myproject/Financ-tab.2x.jpg" },
            "1280": { "1x": "./img/myproject/Financ-desc.1x.jpg", "2x": "./img/myproject/Financ-desc.2x.jpg" }
        },
                stack: "React, JavaScript, Node JS, Git",
                title: "WALLET WEBSERVICE",
                link: "#"
            },
            {
             images: {
            "360": { "1x": "./img/myproject/Diet-mob.1x.jpg", "2x": "./img/myproject/Diet-mob.2x.jpg" },
            "767": { "1x": "./img/myproject/Diet-tab.1x.jpg", "2x": "./img/myproject/Diet-tab.2x.jpg" },
            "1280": { "1x": "./img/myproject/Diet-desc.1x.jpg", "2x": "./img/myproject/Diet-desc.2x.jpg" }
        },
                stack: "React, JavaScript, Node JS, Git",
                title: "GREEN HARVEST WEBSERVICE",
                link: "#"
            },
            {
                image: "./img/myproject/Learn-1x.jpg",
                stack: "React, JavaScript, Node JS, Git",
                title: "ENGLISH EXCELLENCE WEBSERVICE",
                link: "#"
    },
    {
             image: "./img/myproject/Mimino-1x.jpg",
                stack: "React, JavaScript, Node JS, Git",
                title: "MIMINO WEBSITE",
                link: "#"   
    },
    {
        image: "./img/myproject/Artistry-1x.jpg",
                stack: "React, JavaScript, Node JS, Git",
                title: "VYSHYVANKA VIBES LANDING PAGE",
                link: "#" 
    },
    {
        image: "./img/myproject/Body-1x.jpg",
                stack: "React, JavaScript, Node JS, Git",
                title: "ENERGY FLOW WEBSERVICE",
                link: "#" 
    },
    {
        image: "./img/myproject/Power-1x.jpg",
                stack: "React, JavaScript, Node JS, Git",
                title: "POWER PULSE WEBSERVICE",
                link: "#" 
    },
    {
        image: "./img/myproject/Fresh-1x.jpg",
                stack: "React, JavaScript, Node JS, Git",
                title: "Fruitbox online store",
                link: "#" 
    },
    {
       image: "./img/myproject/first screen-1x.jpg",
                stack: "React, JavaScript, Node JS, Git",
                title: "STARLIGHT STUDIO LANDING PAGE",
                link: "#"  
    }
            
        ];

        let firstIndex = 0;
        const projectsPerPage = 3;
        const projectList = document.getElementById("projects-list");
const loadMoreButton = document.getElementById("load-more");
        
loadMoreButton.addEventListener("click", loadProjects);


        function loadProjects() {
            const nextProjects = projects.slice(firstIndex, firstIndex + projectsPerPage);
            nextProjects.forEach(project => {
                const projectItem = document.createElement("li");
                projectItem.innerHTML = `
                    <img src="${project.images}" alt="${project.title}">
                    <div class="info">
                        <p class="stack">${project.stack}</p>
                        <div class="info-text">
                        <h3 class="title">${project.title}</h3>
                        <a href="${project.link}" class="link-visit" target="_blank">
                    <span class="text-visit">VISIT</span>
                        <svg class="icon-arrow" width="24" height="24" >
                  <use href="./img/icons.svg#icon-arrow-right"></use>
                </svg>
                </a>
                </div>
                    </div>
                   
                `;
                projectList.appendChild(projectItem);
            });
            
            firstIndex += projectsPerPage;

            if (firstIndex >= projects.length) {
                loadMoreButton.classList.add("hidden");
            }
        }


        loadProjects();