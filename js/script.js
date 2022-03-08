window.addEventListener('DOMContentLoaded', event => {

   // PROJECT MODAL

   const getImages = (project, paths) => {
      let output = ''
      paths.forEach(path => {
         output += `<img src="./img/projects/${project}/${path}" class="img-fluid rounded-start modal-img-preview rounded" alt="preview">`
      })
      return output
   }

   const makeList = (list) => {
      if (!list || !list.length || !Array.isArray(list)) {
         return ''
      }
      let output = '<ul>'
      list.forEach(item => {
         output += `<li class="mb-2">${item}</li>`
      })
      return output + '</ul>'
   }

   const generateProjectModal = ({ id, name, images, description, functionality, stackFull, github, deployed }) => {
      return `
      <div class="modal fade" id="${id}Modal" tabindex="-1" aria-labelledby="${id}ModalLabel" aria-hidden="true">
         <div class="modal-dialog modal-lg modal-dialog-scrollable modal-dialog-centered">
         <div class="modal-content project-modal">
            <div class="modal-header border-0">
               <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
               <div class="container">
                  <div class="row col-md-12">
                     <div class="col-md-6 p-3 bg-primary bg-gradient bg-opacity-10 rounded modal-images">
                           ${getImages(id, images)}
                     </div>
                     <div class="col-md-6 modal-info px-5">
                        <h2 class="modal-title mb-3" id="${id}ModalLabel">${name}</h2>
                        <div class="project_description mb-4">
                           <p class="lead">${description}</p>
                        </div>
                        <div class="project_funtionality mb-4">
                           <h5 class="mb-3">Functionality</h5>
                           ${makeList(functionality)}
                        </div>
                        <div class="project_stack mb-5">
                           <h5 class="mb-3">Used stack</h5>
                           ${makeList(stackFull)}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="modal-footer border-0 d-flex justify-content-center">
               <a href="${github}" target="_blank" class="btn btn-secondary">GitHub repo</a>
               <a href="${deployed}" target="_blank" class="btn btn-primary">Deployed project</a>
            </div>
         </div>
         </div>
      </div>
      `
   }

   // PROJECT CARD

   const generateProjectCard = ({ id, name, imgPreview, description, stackShort }) => {
      return `
      <div class="card mb-5 col-lg-10 shadow">
         <div class="row g-0">
            <div class="col-md-4" data-bs-toggle="modal" data-bs-target="#${id}Modal">
               <img src="./img/projects/${id}/${imgPreview}" class="img-fluid rounded-start card-img" alt="${id}">
            </div>
            <div class="col-md-8">
               <div class="card-body d-flex flex-column justify-content-between">
                  <div class="card_description">
                     <h3 class="card-title" data-bs-toggle="modal" data-bs-target="#${id}Modal">${name}</h3>
                     <p class="card-text">${description}</p>
                        <p class="card-text text-muted">Stack: ${stackShort}</p>
                  </div>
                  <div class="d-flex justify-content-end align-items-end mt-3">
                     <button class="btn btn-primary btn-details" type="button" data-bs-toggle="modal" data-bs-target="#${id}Modal">Details</button>
                     </div>
               </div>
            </div>
         </div>
      </div>
      `
   }

   // HEADER SHRINK

   const headerShrink = () => {
      const headerItem = document.querySelector('#header')

      if (!headerItem) {
         return
      }
      if (window.scrollY < 100) {
         headerItem.classList.remove('header-shrink')
      } else {
         headerItem.classList.add('header-shrink')
      }
   }

   headerShrink()
   document.addEventListener('scroll', headerShrink)

   const cardItems = document.querySelector('#card-items')
   const modalsItems = document.querySelector('#project-modals')

   projects.forEach(project => {
      cardItems.innerHTML += generateProjectCard(project)
      modalsItems.innerHTML += generateProjectModal(project)
   })



})