(()=>{"use strict";class t{constructor(t){this.title=t}}const e=document.forms["project-form"];e.addEventListener("submit",(t=>{t.preventDefault()}));const s=(()=>{const s=(t,e)=>{const i=document.querySelector("#tasks-list");i.innerHTML="";let l=e.filter((t=>!0===t.exists));const a=document.querySelector("#add-task"),o=document.querySelector("#multiCollapseExample2");if("All Projects"===t){a.classList.add("d-none"),o.classList.add("d-none");for(let t=0;t<l.length;t++){let e=n(l,t);i.innerHTML+=`\n                  <li class="">\n                      <p>\n                        <button class="btn btn-${e} w-100" type="button" data-bs-toggle="collapse" data-bs-target="#task-${t}" aria-expanded="false" aria-controls="task-${t}">\n                          ${l[t].title}\n                        </button>\n                      </p>\n                        \n                      <div class="collapse" id="task-${t}">\n                        <div class="card card-body bg-${e} mb-4">\n                          <ul class="list-group">\n                              <li class="list-group-item bg-${e} text-white"><span class="fw-bold">Description</span>: ${l[t].description}</li>\n                              <li class="list-group-item bg-${e} text-white"><span class="fw-bold">Due Date</span>: ${l[t].dueDate}</li>\n                              <li class="list-group-item bg-${e} text-white"><span class="fw-bold">Priority</span>: ${l[t].priority}</li>\n                          </ul>\n                        </div>\n                      </div>\n                  </li>\n            `}}else{a.classList.remove("d-none"),o.classList.remove("d-none");let l=e.filter((e=>e.project===t&&!0===e.exists));for(let e=0;e<l.length;e++){let a=n(l,e);i.innerHTML+=`\n                  <li class="">\n                      <p>\n                        <button class="btn btn-${a} w-100" type="button" data-bs-toggle="collapse" data-bs-target="#task-${e}" aria-expanded="false" aria-controls="task-${e}">\n                          ${l[e].title}\n                        </button>\n                      </p>\n                        \n                      <div class="collapse" id="task-${e}">\n                        <div class="card card-body bg-${a} mb-4">\n                          <ul class="list-group ">\n                              <li class="list-group-item bg-${a} text-white"><span class="fw-bold">Description</span>: ${l[e].description}</li>\n                              <li class="list-group-item bg-${a} text-white"><span class="fw-bold">Due Date</span>: ${l[e].dueDate}</li>\n                              <li class="list-group-item bg-${a} text-white"><span class="fw-bold">Priority</span>: ${l[e].priority}</li>\n                          </ul>\n                          \n                          <div class="d-flex mt-3">\n                              <button type="button" class="btn btn-outline-dark mx-3">Edit</button>\n                              <button id="delete-task" type="button" class="btn btn-outline-warning">Delete</button>\n                          </div>\n                          \n                        </div>\n                      </div>\n                  </li>\n            `,document.querySelector("#delete-task").onclick=()=>{l[e].exists=!1,s(t,l)}}}},n=(t,e)=>{let s;return s="low"===t[e].priority?"success":"medium"===t[e].priority?"info":"danger",s};return{addProject:s=>{document.querySelector("#project-btn").addEventListener("click",(()=>{(s=>{const n=e.querySelector("#project-title").value,i=new t(n);s.push(i)})(s),(t=>{const e=document.querySelector("#project-list");e.innerHTML='\n          <li class="list-group-item list-group-item-dark btn my-1" id="project-list">All Projects</li>\n        ';for(let s=0;s<t.length;s++)e.innerHTML+=`\n        <li class="list-group-item list-group-item-dark btn my-1" id="project-list">${t[s].title}</li>\n      `})(s),document.querySelector("#project-form").reset()}))},displayProjectTasks:t=>{const e=document.querySelector("#project-list");e.addEventListener("click",(n=>{const i=n.target.textContent;((t,e)=>{const s=t.target;[...e.children].forEach((function(t){t.classList.remove("active")})),s.classList.add("active"),document.querySelector("#task-display").classList.remove("d-none")})(n,e),(t=>{const e=document.querySelector("#project");e.innerHTML="",e.innerHTML+=`\n        <input type="hidden" value="${t}" id="task-project" class="form-control" aria-label="Default select example">\n    `})(i),s(i,t)}))}}})();class n{constructor(t,e,s,n,i="default"){this.title=t,this.description=e,this.dueDate=s,this.priority=n,this.project=i,this.exists=!0}}const i=document.forms["tasks-form"];i.addEventListener("submit",(t=>{t.preventDefault()}));const l=(()=>{const t=(s,n)=>{const i=document.querySelector("#tasks-list");i.innerHTML="";let l=n.filter((t=>t.project===s&&!0===t.exists));for(let n=0;n<l.length;n++){let a=e(l,n);i.innerHTML+=`\n            <li class="">\n                <p>\n                    <button class="btn btn-${a} w-100" type="button" data-bs-toggle="collapse" data-bs-target="#task-${n}" aria-expanded="false" aria-controls="task-${n}">\n                      ${l[n].title}\n                    </button>\n                </p>\n                    \n                <div class="collapse" id="task-${n}">\n                    <div class="card card-body bg-${a} mb-4">\n                        <ul class="list-group ">\n                            <li class="list-group-item bg-${a} text-white"><span class="fw-bold">Description</span>: ${l[n].description}</li>\n                            <li class="list-group-item bg-${a} text-white"><span class="fw-bold">Due Date</span>: ${l[n].dueDate}</li>\n                            <li class="list-group-item bg-${a} text-white"><span class="fw-bold">Priority</span>: ${l[n].priority}</li>\n                        </ul>\n                    \n                        <div class="d-flex mt-3">\n                            <div>\n                                <p>\n                                    <button type="button" class="btn btn-info mt-4" href="#multiCollapseExample1" data-bs-toggle="collapse" aria-expanded="false" aria-controls="multiCollapseExample1">Edit</button>\n                                </p>\n                                <div class="collapse multi-collapse" id="multiCollapseExample1">\n                                    <form id="tasks-form">\n                                        <div class="mb-3">\n                                            <label for="task-name" class="form-label text-info">Task Title</label>\n                                            <input type="text" class="form-control" id="task-name">\n                                        </div>\n                        \n                                        <div class="mb-3">\n                                            <label for="task-description" class="form-label text-info">Task Description</label>\n                                            <input type="text" class="form-control" id="task-description">\n                                        </div>\n                        \n                                        <div class="mb-3">\n                                            <label for="task-date" class="form-label text-info">Due Date</label>\n                                            <br>\n                                            <input type="date" id="task-date" name="trip-start">\n                                        </div>\n                        \n                                        <div class="mb-3">\n                                            <label for="task-priority" class="form-label text-info">Priority</label>\n                                            <select id="task-priority" class="form-select" aria-label="Default select example">\n                                            <option selected>Select Priority</option>\n                                            <option value="low">Low</option>\n                                            <option value="medium">Medium</option>\n                                            <option value="high">High</option>\n                                            </select>\n                                        </div>\n                                        <div>\n                                            <button id="task-btn" type="submit" class="btn btn-info">Submit</button>\n                                        </div\n                                    </form>\n                                </div>\n                            </div>\n                            <button id="delete-task" type="button" class="btn btn-outline-warning">Delete</button>\n                        </div>\n                    </div>\n                </div>\n            </li>\n            `,document.querySelector("#delete-task").onclick=()=>{l[n].exists=!1,t(s,l)}}},e=(t,e)=>{let s;return s="low"===t[e].priority?"success":"medium"===t[e].priority?"info":"danger",s};return{createNewTask:e=>{document.querySelector("#task-btn").addEventListener("click",(()=>{const s=i.querySelector("#task-name").value,l=i.querySelector("#task-description").value,a=i.querySelector("#task-date").value,o=i.querySelector("#task-priority").value,r=i.querySelector("#task-project").value;((t,e,s,i,l,a)=>{const o=new n(e,s,i,l,a);t.push(o)})(e,s,l,a,o,r),t(r,e),document.querySelector("#tasks-form").reset()}))}}})(),a=[{title:"Task 1",description:"Description 1",dueDate:"2021-06-10",priority:"low",project:"Project 1",exists:!0},{title:"Task 2",description:"Description 2",dueDate:"2021-06-10",priority:"medium",project:"Project 2",exists:!0},{title:"Task 3",description:"Description 3",dueDate:"2021-06-10",priority:"high",project:"Project 3",exists:!0}];s.addProject([],a),s.displayProjectTasks(a),l.createNewTask(a)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy10b2RvbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL2pzLXRvZG9saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vanMtdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiUHJvamVjdCIsInRpdGxlIiwidGhpcyIsIlBST0pFQ1RfRk9STSIsImRvY3VtZW50IiwiZm9ybXMiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwicHJvamVjdENyZWF0aW9uIiwicmVuZGVyVGFza3MiLCJwcm9qZWN0TmFtZSIsInRhc2tzQXJyIiwiVEFTS19MSVNUIiwicXVlcnlTZWxlY3RvciIsImlubmVySFRNTCIsImFsbFRhc2tzIiwiZmlsdGVyIiwidGFzayIsImV4aXN0cyIsIkFERF9UQVNLX0JUTiIsIkZPUk0iLCJjbGFzc0xpc3QiLCJhZGQiLCJpIiwibGVuZ3RoIiwiY29sb3IiLCJnZXRDb2xvciIsImRlc2NyaXB0aW9uIiwiZHVlRGF0ZSIsInByaW9yaXR5IiwicmVtb3ZlIiwicHJvamVjdFRhc2tzIiwicHJvamVjdCIsIm9uY2xpY2siLCJhcnIiLCJhZGRQcm9qZWN0IiwicHJvamVjdEFyciIsIlBST0pFQ1RfVElUTEUiLCJ2YWx1ZSIsIk5FV19QUk9KRUNUIiwicHVzaCIsImNyZWF0ZVByb2plY3QiLCJQUk9KRUNUX0xJU1QiLCJyZW5kZXJQcm9qZWN0VmlldyIsInJlc2V0IiwiZGlzcGxheVByb2plY3RUYXNrcyIsIlBST0pFQ1RfTkFNRSIsInRhcmdldCIsInRleHRDb250ZW50IiwiZXZlbnQiLCJwcm9qZWN0TGlzdCIsIlBST0pFQ1QiLCJjaGlsZHJlbiIsImZvckVhY2giLCJwcm9qZWN0U2VsZWN0aW9uIiwiVEFTS19QUk9KRUNUIiwidGFza09wdGlvbnMiLCJUYXNrIiwiVEFTS1NfRk9STSIsInRhc2tDcmVhdGlvbiIsInJlbmRlclRhc2siLCJ0YXNrUHJvamVjdCIsIlRBU0tTX0xJU1QiLCJjcmVhdGVOZXdUYXNrIiwiVEFTS19OQU1FIiwiVEFTS19ERVNDUklQVElPTiIsIlRBU0tfREFURSIsIlRBU0tfUFJJT1JJVFkiLCJuYW1lIiwiZGF0ZSIsIm5ld1Rhc2siLCJ0YXNrcyJdLCJtYXBwaW5ncyI6Im1CQUFBLE1BQU1BLEVBQ0YsWUFBWUMsR0FDUkMsS0FBS0QsTUFBUUEsR0FLckIsTUFBTUUsRUFBZUMsU0FBU0MsTUFBTSxnQkFHcENGLEVBQWFHLGlCQUFpQixVQUFXQyxJQUNyQ0EsRUFBRUMsb0JBSUMsTUFBTUMsRUFBa0IsTUFHM0IsTUF1RU1DLEVBQWMsQ0FBQ0MsRUFBYUMsS0FDOUIsTUFBTUMsRUFBWVQsU0FBU1UsY0FBYyxlQUN6Q0QsRUFBVUUsVUFBWSxHQUN0QixJQUFJQyxFQUFXSixFQUFTSyxRQUFPQyxJQUF5QixJQUFoQkEsRUFBS0MsU0FDN0MsTUFBTUMsRUFBZWhCLFNBQVNVLGNBQWMsYUFDdENPLEVBQU9qQixTQUFTVSxjQUFjLDBCQUVwQyxHQUFvQixpQkFBaEJILEVBQWdDLENBQ2hDUyxFQUFhRSxVQUFVQyxJQUFJLFVBQzNCRixFQUFLQyxVQUFVQyxJQUFJLFVBQ25CLElBQUssSUFBSUMsRUFBSSxFQUFHQSxFQUFJUixFQUFTUyxPQUFRRCxJQUFLLENBQ3RDLElBQUlFLEVBQVFDLEVBQVNYLEVBQVVRLEdBRS9CWCxFQUFVRSxXQUFhLGdIQUdVVywwRUFBOEVGLGdEQUFnREEsa0NBQ25KUixFQUFTUSxHQUFHdkIsd0pBSWV1Qiw4REFDQ0UsNEhBRU1BLDJEQUErRFYsRUFBU1EsR0FBR0ksaUZBQzNFRix3REFBNERWLEVBQVNRLEdBQUdLLDZFQUN4RUgsd0RBQTREVixFQUFTUSxHQUFHTSwySkFPdkgsQ0FDSFYsRUFBYUUsVUFBVVMsT0FBTyxVQUM5QlYsRUFBS0MsVUFBVVMsT0FBTyxVQUN0QixJQUFJQyxFQUFlcEIsRUFBU0ssUUFBT0MsR0FBUUEsRUFBS2UsVUFBWXRCLElBQStCLElBQWhCTyxFQUFLQyxTQUNoRixJQUFLLElBQUlLLEVBQUksRUFB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Q0FDRWxCLE1BQU8sU0FDUDJCLFlBQWEsZ0JBQ2JDLFFBQVMsYUFDVEMsU0FBVSxPQUNWRyxRQUFTLFlBQ1RkLFFBQVEsSUFLZFYsRUFBZ0IyQixXQTlCQyxHQThCb0JvQyxHQUNyQy9ELEVBQWdCcUMsb0JBQW9CMEIsR0FHcENaLEVBQWFJLGNBQWNRLEkiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFByb2plY3Qge1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFByb2plY3QgRm9ybSBJbmZvcm1hdGlvblxyXG5jb25zdCBQUk9KRUNUX0ZPUk0gPSBkb2N1bWVudC5mb3Jtc1sncHJvamVjdC1mb3JtJ107XHJcblxyXG4vLyBwcmV2ZW50IGZvcm0gZGVmYXVsdCBiZWhhdmlvdXJcclxuUFJPSkVDVF9GT1JNLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pXHJcblxyXG4vLyBQcm9qZWN0IENyZWF0aW9uIE1vZHVsZSAoSUlGRSk7XHJcbmV4cG9ydCBjb25zdCBwcm9qZWN0Q3JlYXRpb24gPSAoKCkgPT4ge1xyXG5cclxuICAgIC8vIENyZWF0ZSBhbmQgZGlzcGxheSBwcm9qZWN0IGluIHRoZSBVSVxyXG4gICAgY29uc3QgYWRkUHJvamVjdCA9IChwcm9qZWN0QXJyKSA9PiB7XHJcbiAgICAgICAgY29uc3QgUFJPSkVDVF9CVE4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1idG4nKTtcclxuXHJcbiAgICAgICAgUFJPSkVDVF9CVE4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBuZXcgcHJvamVjdFxyXG4gICAgICAgICAgICBjcmVhdGVQcm9qZWN0KHByb2plY3RBcnIpO1xyXG5cclxuICAgICAgICAgICAgLy8gUmVuZGVyIHByb2plY3RzIGluIHZpZXdzXHJcbiAgICAgICAgICAgIHJlbmRlclByb2plY3RWaWV3KHByb2plY3RBcnIpO1xyXG5cclxuICAgICAgICAgICAgLy8gcmVzZXQgcHJvamVjdCBmb3JtXHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWZvcm0nKS5yZXNldCgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFByb2plY3QgSGVscGVyIG1ldGhvZHNcclxuICAgIGNvbnN0IGNyZWF0ZVByb2plY3QgPSAocHJvamVjdEFycikgPT4ge1xyXG4gICAgICAgIGNvbnN0IFBST0pFQ1RfVElUTEUgPSBQUk9KRUNUX0ZPUk0ucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LXRpdGxlXCIpLnZhbHVlO1xyXG5cclxuICAgICAgICBjb25zdCBORVdfUFJPSkVDVCA9IG5ldyBQcm9qZWN0KFBST0pFQ1RfVElUTEUpO1xyXG4gICAgICAgIHByb2plY3RBcnIucHVzaChORVdfUFJPSkVDVCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZW5kZXJQcm9qZWN0VmlldyA9IChwcm9qZWN0QXJyKSA9PiB7XHJcbiAgICAgICAgY29uc3QgUFJPSkVDVF9MSVNUID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWxpc3RcIik7XHJcbiAgICAgICAgUFJPSkVDVF9MSVNULmlubmVySFRNTCA9IGBcclxuICAgICAgICAgIDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tZGFyayBidG4gbXktMVwiIGlkPVwicHJvamVjdC1saXN0XCI+QWxsIFByb2plY3RzPC9saT5cclxuICAgICAgICBgO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgUFJPSkVDVF9MSVNULmlubmVySFRNTCArPSBgXHJcbiAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1kYXJrIGJ0biBteS0xXCIgaWQ9XCJwcm9qZWN0LWxpc3RcIj4ke3Byb2plY3RBcnJbaV0udGl0bGV9PC9saT5cclxuICAgICAgYDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRGlzcGxheSB0aGUgcHJvamVjdCdzIHNwZWNpZmljIHRhc2tzIGluIHRoZSBVSVxyXG4gICAgY29uc3QgZGlzcGxheVByb2plY3RUYXNrcyA9ICh0YXNrc0FycikgPT4ge1xyXG4gICAgICAgIGNvbnN0IFBST0pFQ1RfTElTVCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWxpc3QnKTtcclxuXHJcbiAgICAgICAgUFJPSkVDVF9MSVNULmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgUFJPSkVDVF9OQU1FID0gZS50YXJnZXQudGV4dENvbnRlbnQ7XHJcblxyXG4gICAgICAgICAgICBwcm9qZWN0U2VsZWN0aW9uKGUsIFBST0pFQ1RfTElTVCk7XHJcblxyXG4gICAgICAgICAgICB0YXNrT3B0aW9ucyhQUk9KRUNUX05BTUUpO1xyXG5cclxuICAgICAgICAgICAgcmVuZGVyVGFza3MoUFJPSkVDVF9OQU1FLCB0YXNrc0Fycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHJvamVjdCdzIHRhc2tzIEhlbHBlciBNZXRob2RcclxuICAgIGNvbnN0IHRhc2tPcHRpb25zID0gKHByb2plY3ROYW1lKSA9PiB7XHJcbiAgICAgICAgLy8gQ3JlYXRlIHNlbGVjdGlvbiBvbiB0YXNrcyBiYXNlZCBvbiBvYmplY3RzXHJcbiAgICAgICAgY29uc3QgVEFTS19QUk9KRUNUID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QnKTtcclxuICAgICAgICBUQVNLX1BST0pFQ1QuaW5uZXJIVE1MID0gYGA7XHJcbiAgICAgICAgVEFTS19QUk9KRUNULmlubmVySFRNTCArPSBgXHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiB2YWx1ZT1cIiR7cHJvamVjdE5hbWV9XCIgaWQ9XCJ0YXNrLXByb2plY3RcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGFyaWEtbGFiZWw9XCJEZWZhdWx0IHNlbGVjdCBleGFtcGxlXCI+XHJcbiAgICBgO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcHJvamVjdFNlbGVjdGlvbiA9IChldmVudCwgcHJvamVjdExpc3QpID0+IHtcclxuICAgICAgICBjb25zdCAgUFJPSkVDVCA9IGV2ZW50LnRhcmdldDtcclxuXHJcbiAgICAgICAgbGV0IGNoaWxkcmVuID0gWy4uLnByb2plY3RMaXN0LmNoaWxkcmVuXTtcclxuICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKHByb2plY3Qpe1xyXG4gICAgICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBQUk9KRUNULmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgIGNvbnN0IFRBU0tfRElTUExBWSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWRpc3BsYXknKTtcclxuICAgICAgICBUQVNLX0RJU1BMQVkuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZW5kZXJUYXNrcyA9IChwcm9qZWN0TmFtZSwgdGFza3NBcnIpID0+IHtcclxuICAgICAgICBjb25zdCBUQVNLX0xJU1QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tzLWxpc3RcIik7XHJcbiAgICAgICAgVEFTS19MSVNULmlubmVySFRNTCA9IGBgO1xyXG4gICAgICAgIGxldCBhbGxUYXNrcyA9IHRhc2tzQXJyLmZpbHRlcih0YXNrICA9PiB0YXNrLmV4aXN0cyA9PT0gdHJ1ZSk7XHJcbiAgICAgICAgY29uc3QgQUREX1RBU0tfQlROID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC10YXNrJyk7XHJcbiAgICAgICAgY29uc3QgRk9STSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtdWx0aUNvbGxhcHNlRXhhbXBsZTInKTtcclxuXHJcbiAgICAgICAgaWYgKHByb2plY3ROYW1lID09PSBcIkFsbCBQcm9qZWN0c1wiKSB7XHJcbiAgICAgICAgICAgIEFERF9UQVNLX0JUTi5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcclxuICAgICAgICAgICAgRk9STS5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxUYXNrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbG9yID0gZ2V0Q29sb3IoYWxsVGFza3MsIGkpO1xyXG5cclxuICAgICAgICAgICAgICAgIFRBU0tfTElTVC5pbm5lckhUTUwgKz0gYFxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi0ke2NvbG9yfSB3LTEwMFwiIHR5cGU9XCJidXR0b25cIiBkYXRhLWJzLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS1icy10YXJnZXQ9XCIjdGFzay0ke2l9XCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1jb250cm9scz1cInRhc2stJHtpfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICR7YWxsVGFza3NbaV0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xsYXBzZVwiIGlkPVwidGFzay0ke2l9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIGNhcmQtYm9keSBiZy0ke2NvbG9yfSBtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibGlzdC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gYmctJHtjb2xvcn0gdGV4dC13aGl0ZVwiPjxzcGFuIGNsYXNzPVwiZnctYm9sZFwiPkRlc2NyaXB0aW9uPC9zcGFuPjogJHthbGxUYXNrc1tpXS5kZXNjcmlwdGlvbn08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gYmctJHtjb2xvcn0gdGV4dC13aGl0ZVwiPjxzcGFuIGNsYXNzPVwiZnctYm9sZFwiPkR1ZSBEYXRlPC9zcGFuPjogJHthbGxUYXNrc1tpXS5kdWVEYXRlfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBiZy0ke2NvbG9yfSB0ZXh0LXdoaXRlXCI+PHNwYW4gY2xhc3M9XCJmdy1ib2xkXCI+UHJpb3JpdHk8L3NwYW4+OiAke2FsbFRhc2tzW2ldLnByaW9yaXR5fTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgYDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIEFERF9UQVNLX0JUTi5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcclxuICAgICAgICAgICAgRk9STS5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcclxuICAgICAgICAgICAgbGV0IHByb2plY3RUYXNrcyA9IHRhc2tzQXJyLmZpbHRlcih0YXNrID0+IHRhc2sucHJvamVjdCA9PT0gcHJvamVjdE5hbWUgJiYgdGFzay5leGlzdHMgPT09IHRydWUpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RUYXNrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbG9yID0gZ2V0Q29sb3IocHJvamVjdFRhc2tzLCBpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBUQVNLX0xJU1QuaW5uZXJIVE1MICs9IGBcclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tJHtjb2xvcn0gdy0xMDBcIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS1icy10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtYnMtdGFyZ2V0PVwiI3Rhc2stJHtpfVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtY29udHJvbHM9XCJ0YXNrLSR7aX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAke3Byb2plY3RUYXNrc1tpXS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbGxhcHNlXCIgaWQ9XCJ0YXNrLSR7aX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgY2FyZC1ib2R5IGJnLSR7Y29sb3J9IG1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJsaXN0LWdyb3VwIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gYmctJHtjb2xvcn0gdGV4dC13aGl0ZVwiPjxzcGFuIGNsYXNzPVwiZnctYm9sZFwiPkRlc2NyaXB0aW9uPC9zcGFuPjogJHtwcm9qZWN0VGFza3NbaV0uZGVzY3JpcHRpb259PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGJnLSR7Y29sb3J9IHRleHQtd2hpdGVcIj48c3BhbiBjbGFzcz1cImZ3LWJvbGRcIj5EdWUgRGF0ZTwvc3Bhbj46ICR7cHJvamVjdFRhc2tzW2ldLmR1ZURhdGV9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGJnLSR7Y29sb3J9IHRleHQtd2hpdGVcIj48c3BhbiBjbGFzcz1cImZ3LWJvbGRcIj5Qcmlvcml0eTwvc3Bhbj46ICR7cHJvamVjdFRhc2tzW2ldLnByaW9yaXR5fTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IG10LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtZGFyayBteC0zXCI+RWRpdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiZGVsZXRlLXRhc2tcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtd2FybmluZ1wiPkRlbGV0ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICBgO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IERFTEVURSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZWxldGUtdGFzaycpO1xyXG4gICAgICAgICAgICAgICAgREVMRVRFLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdFRhc2tzW2ldLmV4aXN0cyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlclRhc2tzKHByb2plY3ROYW1lLCBwcm9qZWN0VGFza3MpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgZ2V0Q29sb3IgPSAoYXJyLCBpKSA9PiB7XHJcbiAgICAgICAgbGV0IGNvbG9yO1xyXG4gICAgICAgIGlmIChhcnJbaV0ucHJpb3JpdHkgPT09ICdsb3cnKSB7XHJcbiAgICAgICAgICAgIGNvbG9yID0gJ3N1Y2Nlc3MnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYXJyW2ldLnByaW9yaXR5ID09PSAnbWVkaXVtJykge1xyXG4gICAgICAgICAgICBjb2xvciA9ICdpbmZvJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb2xvciA9ICdkYW5nZXInO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBhZGRQcm9qZWN0LCBkaXNwbGF5UHJvamVjdFRhc2tzXHJcbiAgICB9XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7IHByb2plY3RDcmVhdGlvbiB9OyIsImNsYXNzIFRhc2sge1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCA9IFwiZGVmYXVsdFwiKSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xyXG4gICAgICAgIHRoaXMuZXhpc3RzID0gdHJ1ZTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gVGFza3MgRm9ybSBJbmZvcm1hdGlvblxyXG5jb25zdCBUQVNLU19GT1JNID0gZG9jdW1lbnQuZm9ybXNbJ3Rhc2tzLWZvcm0nXTtcclxuXHJcbi8vIHByZXZlbnQgZm9ybSBkZWZhdWx0IGJlaGF2aW91clxyXG5UQVNLU19GT1JNLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuLy8gVGFzayBDcmVhdGlvbiBNb2R1bGUgKElJRkUpO1xyXG5leHBvcnQgY29uc3QgdGFza0NyZWF0aW9uID0gKCgpID0+IHtcclxuICAgIC8vIGNyZWF0ZSB0YXNrIGFuZCBkaXNwbGF5IGl0IG9uIHRoZSBVSVxyXG4gICAgY29uc3QgY3JlYXRlTmV3VGFzayA9ICh0YXNrc0FycikgPT4ge1xyXG4gICAgICAgIGNvbnN0IFRBU0tfQlROID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWJ0blwiKTtcclxuICAgICAgICBUQVNLX0JUTi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgVEFTS19OQU1FID0gVEFTS1NfRk9STS5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stbmFtZVwiKS52YWx1ZTtcclxuICAgICAgICAgICAgY29uc3QgVEFTS19ERVNDUklQVElPTiA9IFRBU0tTX0ZPUk0ucXVlcnlTZWxlY3RvcihcIiN0YXNrLWRlc2NyaXB0aW9uXCIpLnZhbHVlO1xyXG4gICAgICAgICAgICBjb25zdCBUQVNLX0RBVEUgPSBUQVNLU19GT1JNLnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1kYXRlXCIpLnZhbHVlO1xyXG4gICAgICAgICAgICBjb25zdCBUQVNLX1BSSU9SSVRZID0gVEFTS1NfRk9STS5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stcHJpb3JpdHlcIikudmFsdWU7XHJcbiAgICAgICAgICAgIGNvbnN0IFRBU0tfUFJPSkVDVCA9IFRBU0tTX0ZPUk0ucXVlcnlTZWxlY3RvcihcIiN0YXNrLXByb2plY3RcIikudmFsdWU7XHJcblxyXG4gICAgICAgICAgICAvLyBjcmVhdGUgbmV3IHRhc2sgaW5zdGFuY2VcclxuICAgICAgICAgICAgbmV3VGFzayh0YXNrc0FyciwgVEFTS19OQU1FLCBUQVNLX0RFU0NSSVBUSU9OLCBUQVNLX0RBVEUsIFRBU0tfUFJJT1JJVFksIFRBU0tfUFJPSkVDVCk7XHJcblxyXG4gICAgICAgICAgICAvLyByZW5kZXIgdGFzayB0byB0aGUgVUlcclxuICAgICAgICAgICAgcmVuZGVyVGFzayhUQVNLX1BST0pFQ1QsIHRhc2tzQXJyKTtcclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrcy1mb3JtJykucmVzZXQoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGNyZWF0ZSB0YXNrIG9iamVjdFxyXG4gICAgY29uc3QgbmV3VGFzayA9ICh0YXNrc0FyciwgbmFtZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKG5hbWUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSwgcHJvamVjdCk7XHJcbiAgICAgICAgdGFza3NBcnIucHVzaChuZXdUYXNrKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyByZW5kZXIgdGFza3MgaW4gdGhlIFVJXHJcbiAgICBjb25zdCByZW5kZXJUYXNrID0gKHRhc2tQcm9qZWN0LCB0YXNrc0FycikgPT4ge1xyXG4gICAgICAgIGNvbnN0IFRBU0tTX0xJU1QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tzLWxpc3RcIik7XHJcblxyXG4gICAgICAgIFRBU0tTX0xJU1QuaW5uZXJIVE1MID0gYGA7XHJcbiAgICAgICAgbGV0IHByb2plY3RUYXNrcyA9IHRhc2tzQXJyLmZpbHRlcih0YXNrICA9PiB0YXNrLnByb2plY3QgPT09IHRhc2tQcm9qZWN0ICYmIHRhc2suZXhpc3RzID09PSB0cnVlKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0VGFza3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGNvbG9yID0gZ2V0Q29sb3IocHJvamVjdFRhc2tzLCBpKTtcclxuXHJcbiAgICAgICAgICAgIFRBU0tTX0xJU1QuaW5uZXJIVE1MICs9IGBcclxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiXCI+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi0ke2NvbG9yfSB3LTEwMFwiIHR5cGU9XCJidXR0b25cIiBkYXRhLWJzLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS1icy10YXJnZXQ9XCIjdGFzay0ke2l9XCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1jb250cm9scz1cInRhc2stJHtpfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgJHtwcm9qZWN0VGFza3NbaV0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sbGFwc2VcIiBpZD1cInRhc2stJHtpfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIGNhcmQtYm9keSBiZy0ke2NvbG9yfSBtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImxpc3QtZ3JvdXAgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gYmctJHtjb2xvcn0gdGV4dC13aGl0ZVwiPjxzcGFuIGNsYXNzPVwiZnctYm9sZFwiPkRlc2NyaXB0aW9uPC9zcGFuPjogJHtwcm9qZWN0VGFza3NbaV0uZGVzY3JpcHRpb259PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBiZy0ke2NvbG9yfSB0ZXh0LXdoaXRlXCI+PHNwYW4gY2xhc3M9XCJmdy1ib2xkXCI+RHVlIERhdGU8L3NwYW4+OiAke3Byb2plY3RUYXNrc1tpXS5kdWVEYXRlfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gYmctJHtjb2xvcn0gdGV4dC13aGl0ZVwiPjxzcGFuIGNsYXNzPVwiZnctYm9sZFwiPlByaW9yaXR5PC9zcGFuPjogJHtwcm9qZWN0VGFza3NbaV0ucHJpb3JpdHl9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4taW5mbyBtdC00XCIgaHJlZj1cIiNtdWx0aUNvbGxhcHNlRXhhbXBsZTFcIiBkYXRhLWJzLXRvZ2dsZT1cImNvbGxhcHNlXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1jb250cm9scz1cIm11bHRpQ29sbGFwc2VFeGFtcGxlMVwiPkVkaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbGxhcHNlIG11bHRpLWNvbGxhcHNlXCIgaWQ9XCJtdWx0aUNvbGxhcHNlRXhhbXBsZTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gaWQ9XCJ0YXNrcy1mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0YXNrLW5hbWVcIiBjbGFzcz1cImZvcm0tbGFiZWwgdGV4dC1pbmZvXCI+VGFzayBUaXRsZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cInRhc2stbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidGFzay1kZXNjcmlwdGlvblwiIGNsYXNzPVwiZm9ybS1sYWJlbCB0ZXh0LWluZm9cIj5UYXNrIERlc2NyaXB0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwidGFzay1kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidGFzay1kYXRlXCIgY2xhc3M9XCJmb3JtLWxhYmVsIHRleHQtaW5mb1wiPkR1ZSBEYXRlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgaWQ9XCJ0YXNrLWRhdGVcIiBuYW1lPVwidHJpcC1zdGFydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidGFzay1wcmlvcml0eVwiIGNsYXNzPVwiZm9ybS1sYWJlbCB0ZXh0LWluZm9cIj5Qcmlvcml0eTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cInRhc2stcHJpb3JpdHlcIiBjbGFzcz1cImZvcm0tc2VsZWN0XCIgYXJpYS1sYWJlbD1cIkRlZmF1bHQgc2VsZWN0IGV4YW1wbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkPlNlbGVjdCBQcmlvcml0eTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJsb3dcIj5Mb3c8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibWVkaXVtXCI+TWVkaXVtPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImhpZ2hcIj5IaWdoPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInRhc2stYnRuXCIgdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1pbmZvXCI+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2RpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJkZWxldGUtdGFza1wiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS13YXJuaW5nXCI+RGVsZXRlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIGA7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBERUxFVEUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVsZXRlLXRhc2snKTtcclxuICAgICAgICAgICAgREVMRVRFLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0VGFza3NbaV0uZXhpc3RzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICByZW5kZXJUYXNrKHRhc2tQcm9qZWN0LCBwcm9qZWN0VGFza3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldENvbG9yID0gKGFyciwgaSkgPT4ge1xyXG4gICAgICAgIGxldCBjb2xvcjtcclxuICAgICAgICBpZiAoYXJyW2ldLnByaW9yaXR5ID09PSAnbG93Jykge1xyXG4gICAgICAgICAgICBjb2xvciA9ICdzdWNjZXNzJztcclxuICAgICAgICB9IGVsc2UgaWYgKGFycltpXS5wcmlvcml0eSA9PT0gJ21lZGl1bScpIHtcclxuICAgICAgICAgICAgY29sb3IgPSAnaW5mbyc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29sb3IgPSAnZGFuZ2VyJztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY3JlYXRlTmV3VGFza1xyXG4gICAgfVxyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgeyB0YXNrQ3JlYXRpb24gfTsiLCIvLyBNZXRob2QgaW1wb3J0c1xyXG5pbXBvcnQgeyBwcm9qZWN0Q3JlYXRpb24gfSBmcm9tIFwiLi9wcm9qZWN0XCI7XHJcbmltcG9ydCB7IHRhc2tDcmVhdGlvbiB9IGZyb20gXCIuL3Rhc2tcIjtcclxuXHJcbi8vIE9iamVjdCdzIGFycmF5c1xyXG5jb25zdCBwcm9qZWN0cyA9IFtdO1xyXG5cclxuY29uc3QgdGFza3MgPSBbXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIlRhc2sgMVwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJEZXNjcmlwdGlvbiAxXCIsXHJcbiAgICAgIGR1ZURhdGU6IFwiMjAyMS0wNi0xMFwiLFxyXG4gICAgICBwcmlvcml0eTogXCJsb3dcIixcclxuICAgICAgcHJvamVjdDogXCJQcm9qZWN0IDFcIixcclxuICAgICAgZXhpc3RzOiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJUYXNrIDJcIixcclxuICAgICAgZGVzY3JpcHRpb246IFwiRGVzY3JpcHRpb24gMlwiLFxyXG4gICAgICBkdWVEYXRlOiBcIjIwMjEtMDYtMTBcIixcclxuICAgICAgcHJpb3JpdHk6IFwibWVkaXVtXCIsXHJcbiAgICAgIHByb2plY3Q6IFwiUHJvamVjdCAyXCIsXHJcbiAgICAgIGV4aXN0czogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiVGFzayAzXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXB0aW9uIDNcIixcclxuICAgICAgZHVlRGF0ZTogXCIyMDIxLTA2LTEwXCIsXHJcbiAgICAgIHByaW9yaXR5OiBcImhpZ2hcIixcclxuICAgICAgcHJvamVjdDogXCJQcm9qZWN0IDNcIixcclxuICAgICAgZXhpc3RzOiB0cnVlXHJcbiAgICB9XHJcbiAgXTtcclxuXHJcbi8vIENhbGwgb2YgcHJvamVjdCdzIGZ1bmN0aW9uIHdpdGggYXR0YWNoZWQgZXZlbnQgbGlzdGVuZXJzXHJcbnByb2plY3RDcmVhdGlvbi5hZGRQcm9qZWN0KHByb2plY3RzLCB0YXNrcyk7XHJcbnByb2plY3RDcmVhdGlvbi5kaXNwbGF5UHJvamVjdFRhc2tzKHRhc2tzKTtcclxuXHJcbi8vIENhbGwgdGFza3MgZnVuY3Rpb25zIHdpdGggYXR0YWNoZWQgZXZlbnQgbGlzdGVuZXJzXHJcbnRhc2tDcmVhdGlvbi5jcmVhdGVOZXdUYXNrKHRhc2tzKTtcclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==