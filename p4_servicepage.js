// created javascript for service page animation content
// did research for the code to work
// used javascript for enhancement instead of css

document.addEventListener("DOMContentLoaded", () => 
    {
        document.querySelectorAll("#service-accordion-header").forEach((header) => 
        {
            header.addEventListener("click", () => 
            {
                const item = header.parentElement
                item.classList.toggle("open")
            })
        })
    })
  
