fetch("https://api.github.com/users/Shres0/repos")
.then(res=>res.json())
.then(data=>{
  const container=document.getElementById("githubProjects");
  data.slice(0,6).forEach(repo=>{
    const div=document.createElement("div");
    div.innerHTML=`<p><strong>${repo.name}</strong><br>${repo.description||""}</p>`;
    container.appendChild(div);
  });
});
