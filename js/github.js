fetch("https://api.github.com/users/Shres0/repos")
.then(res=>res.json())
.then(data=>{
  const container=document.getElementById("githubProjects");
  data.slice(0,5).forEach(repo=>{
    container.innerHTML+=`<p><strong>${repo.name}</strong> - ${repo.description||""}</p>`;
  });
});
