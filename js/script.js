window.addEventListener('DOMContentLoaded', event => {
   const generateProjectCard = ({ id, name, imgPreview, description, stackShort }) => {
      return `
      <div class="card mb-5 col-lg-10">
         <div class="row g-0">
            <div class="col-md-4" data-bs-toggle="modal" data-bs-target="#${id}Modal">
               <img src="./img/projects/${imgPreview}" class="img-fluid rounded-start card-img" alt="${id}">
            </div>
            <div class="col-md-8">
               <div class="card-body d-flex flex-column justify-content-between">
                  <div class="card_description">
                     <h3 class="card-title" data-bs-toggle="modal" data-bs-target="#${id}Modal">${name}</h3>
                     <p class="card-text">${description}</p>
                        <p class="card-text text-muted">${stackShort}</p>
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

   const generateProjectModals = ({ id, name, img1, img2, description, functionality, stackFull }) => {
      return `
      <div class="modal fade" id="${id}Modal" tabindex="-1" aria-labelledby="${id}ModalLabel" aria-hidden="true">
         <div class="modal-dialog modal-xl modal-dialog-scrollable modal-dialog-centered">
         <div class="modal-content project-modal">
            <div class="modal-header border-0">
               <h2 class="modal-title" id="${id}ModalLabel">${name}</h2>
               <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
               <div class="container">
                  <div class="row col-md-12">
                  <div class="col-md-6">
                        <img src="./img/projects/${img1}" class="img-fluid rounded-start modal-img-preview" alt="preview">
                        <img src="./img/projects/${img2}" class="img-fluid rounded-start modal-img-preview" alt="preview">
                  </div>
                  <div class="col-md-6">
                     <div class="project_description">
                        <p class="lead">${description}</p>
                     </div>
                     <div class="project_funtionality mb-3">
                        <h3>Functionality</h3>
                        ${functionality}
                     </div>
                     <div class="project_stack">
                        <h3>Used stack</h3>
                        ${stackFull}
                     </div>
                  </div>
                  </div>
               </div>
            </div>
            <div class="modal-footer border-0 d-flex justify-content-center">
               <button type="button" class="btn btn-secondary">GitHub repo</button>
               <button type="button" class="btn btn-primary">Open deployed project</button>
            </div>
         </div>
         </div>
      </div>
      `
   }

   const cardItems = document.querySelector('#card-items')
   const modalsItems = document.querySelector('#project-modals')

   cardItems.innerHTML += generateProjectCard(projects[0])
   cardItems.innerHTML += generateProjectCard(projects[0])
   cardItems.innerHTML += generateProjectCard(projects[0])

   modalsItems.innerHTML += generateProjectModals(projects[0])



})