export function portfolioImage(title, image, link) {
    const projectsContainer = document.getElementById("portfolio");

    const project = document.createElement("div");
    const projectLink = document.createElement("a");
    const projectImage = document.createElement("img");
    const projectName = document.createElement("h2");

    projectName.textContent = title;
    projectImage.classList.add("w-full");
    projectImage.classList.add("h-6");
    

    projectImage.src = image;
    projectLink.href = link;
    projectLink.appendChild(projectImage);
    projectLink.appendChild(projectName);
    project.appendChild(projectLink);
    projectsContainer.appendChild(project);
    
}