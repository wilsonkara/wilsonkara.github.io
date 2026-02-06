const projects = ["Onboarding", "Newsletters", "Pause", "Components"]

function shuffleProjects(projects) {
    let currentIndex = projects.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [projects[currentIndex], projects[randomIndex]] = [projects[randomIndex], projects[currentIndex]];
    }

    return projects;

button.addEventListener(click, function shuffleProjects);

