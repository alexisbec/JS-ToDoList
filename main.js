(()=>{"use strict";class t{constructor(t){this.title=t}}const e=document.forms["project-form"];e.addEventListener("submit",(t=>{t.preventDefault()}));const s=(()=>{const s=(t,e)=>{let s;return s="low"===t[e].priority?"success":"medium"===t[e].priority?"info":"danger",s};return{addProject:s=>{document.querySelector("#project-btn").addEventListener("click",(()=>{(s=>{const i=e.querySelector("#project-title").value,n=new t(i);s.push(n)})(s),(t=>{const e=document.querySelector("#project-list");e.innerHTML='\n          <li class="list-group-item list-group-item-dark btn my-1" id="project-list">All Projects</li>\n        ';for(let s=0;s<t.length;s++)e.innerHTML+=`\n        <li class="list-group-item list-group-item-dark btn my-1" id="project-list">${t[s].title}</li>\n      `})(s),document.querySelector("#project-form").reset()}))},displayProjectTasks:t=>{const e=document.querySelector("#project-list");e.addEventListener("click",(i=>{const n=i.target.textContent;((t,e)=>{const s=t.target;[...e.children].forEach((function(t){t.classList.remove("active")})),s.classList.add("active"),document.querySelector("#task-display").classList.remove("d-none")})(i,e),(t=>{const e=document.querySelector("#project");e.innerHTML="",e.innerHTML+=`\n        <input type="hidden" value="${t}" id="task-project" class="form-control" aria-label="Default select example">\n    `})(n),((t,e)=>{const i=document.querySelector("#tasks-list");i.innerHTML="";const n=document.querySelector("#add-task"),l=document.querySelector("#multiCollapseExample2");if("All Projects"===t){n.classList.add("d-none"),l.classList.add("d-none");for(let t=0;t<e.length;t++){let n=s(e,t);i.innerHTML+=`\n                  <li class="">\n                      <p>\n                        <button class="btn btn-${n} w-100" type="button" data-bs-toggle="collapse" data-bs-target="#task-${t}" aria-expanded="false" aria-controls="task-${t}">\n                          ${e[t].title}\n                        </button>\n                      </p>\n                        \n                      <div class="collapse" id="task-${t}">\n                        <div class="card card-body bg-${n} mb-4">\n                          <ul class="list-group">\n                              <li class="list-group-item bg-${n} text-white"><span class="fw-bold">Description</span>: ${e[t].description}</li>\n                              <li class="list-group-item bg-${n} text-white"><span class="fw-bold">Due Date</span>: ${e[t].dueDate}</li>\n                              <li class="list-group-item bg-${n} text-white"><span class="fw-bold">Priority</span>: ${e[t].priority}</li>\n                          </ul>\n                        </div>\n                      </div>\n                  </li>\n            `}}else{n.classList.remove("d-none"),l.classList.remove("d-none");let r=e.filter((e=>e.project===t));for(let t=0;t<r.length;t++){let e=s(r,t);i.innerHTML+=`\n                  <li class="">\n                      <p>\n                        <button class="btn btn-${e} w-100" type="button" data-bs-toggle="collapse" data-bs-target="#task-${t}" aria-expanded="false" aria-controls="task-${t}">\n                          ${r[t].title}\n                        </button>\n                      </p>\n                        \n                      <div class="collapse" id="task-${t}">\n                        <div class="card card-body bg-${e} mb-4">\n                          <ul class="list-group ">\n                              <li class="list-group-item bg-${e} text-white"><span class="fw-bold">Description</span>: ${r[t].description}</li>\n                              <li class="list-group-item bg-${e} text-white"><span class="fw-bold">Due Date</span>: ${r[t].dueDate}</li>\n                              <li class="list-group-item bg-${e} text-white"><span class="fw-bold">Priority</span>: ${r[t].priority}</li>\n                          </ul>\n                        </div>\n                      </div>\n                  </li>\n            `}}})(n,t)}))}}})();class i{constructor(t,e,s,i,n="default"){this.title=t,this.description=e,this.dueDate=s,this.priority=i,this.project=n}}const n=document.forms["tasks-form"];n.addEventListener("submit",(t=>{t.preventDefault()}));const l=(()=>{const t=(t,e)=>{let s;return s="low"===t[e].priority?"success":"medium"===t[e].priority?"info":"danger",s};return{createNewTask:e=>{document.querySelector("#task-btn").addEventListener("click",(()=>{const s=n.querySelector("#task-name").value,l=n.querySelector("#task-description").value,r=n.querySelector("#task-date").value,a=n.querySelector("#task-priority").value,o=n.querySelector("#task-project").value;((t,e,s,n,l,r)=>{const a=new i(e,s,n,l,r);t.push(a)})(e,s,l,r,a,o),((e,s)=>{const i=document.querySelector("#tasks-list");i.innerHTML="";let n=s.filter((t=>t.project===e));for(let e=0;e<n.length;e++){let s=t(n,e);i.innerHTML+=`\n              <li class="">\n                  <p>\n                    <button class="btn btn-${s} w-100" type="button" data-bs-toggle="collapse" data-bs-target="#task-${e}" aria-expanded="false" aria-controls="task-${e}">\n                      ${n[e].title}\n                    </button>\n                  </p>\n                    \n                  <div class="collapse" id="task-${e}">\n                    <div class="card card-body bg-${s} mb-4">\n                      <ul class="list-group ">\n                          <li class="list-group-item bg-${s} text-white"><span class="fw-bold">Description</span>: ${n[e].description}</li>\n                          <li class="list-group-item bg-${s} text-white"><span class="fw-bold">Due Date</span>: ${n[e].dueDate}</li>\n                          <li class="list-group-item bg-${s} text-white"><span class="fw-bold">Priority</span>: ${n[e].priority}</li>\n                      </ul>\n                    </div>\n                  </div>\n              </li>\n            `}})(o,e),document.querySelector("#tasks-form").reset()}))}}})(),r=[{title:"Task 1",description:"Description 1",dueDate:"2021-06-10",priority:"low",project:"Project 1"},{title:"Task 2",description:"Description 2",dueDate:"2021-06-10",priority:"medium",project:"Project 2"},{title:"Task 3",description:"Description 3",dueDate:"2021-06-10",priority:"high",project:"Project 3"}];s.addProject([],r),s.displayProjectTasks(r),l.createNewTask(r)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy10b2RvbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL2pzLXRvZG9saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vanMtdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiUHJvamVjdCIsInRpdGxlIiwidGhpcyIsIlBST0pFQ1RfRk9STSIsImRvY3VtZW50IiwiZm9ybXMiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwicHJvamVjdENyZWF0aW9uIiwiZ2V0Q29sb3IiLCJhcnIiLCJpIiwiY29sb3IiLCJwcmlvcml0eSIsImFkZFByb2plY3QiLCJwcm9qZWN0QXJyIiwicXVlcnlTZWxlY3RvciIsIlBST0pFQ1RfVElUTEUiLCJ2YWx1ZSIsIk5FV19QUk9KRUNUIiwicHVzaCIsImNyZWF0ZVByb2plY3QiLCJQUk9KRUNUX0xJU1QiLCJpbm5lckhUTUwiLCJsZW5ndGgiLCJyZW5kZXJQcm9qZWN0VmlldyIsInJlc2V0IiwiZGlzcGxheVByb2plY3RUYXNrcyIsInRhc2tzQXJyIiwiUFJPSkVDVF9OQU1FIiwidGFyZ2V0IiwidGV4dENvbnRlbnQiLCJldmVudCIsInByb2plY3RMaXN0IiwiUFJPSkVDVCIsImNoaWxkcmVuIiwiZm9yRWFjaCIsInByb2plY3QiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJwcm9qZWN0U2VsZWN0aW9uIiwicHJvamVjdE5hbWUiLCJUQVNLX1BST0pFQ1QiLCJ0YXNrT3B0aW9ucyIsIlRBU0tfTElTVCIsIkFERF9UQVNLX0JUTiIsIkZPUk0iLCJkZXNjcmlwdGlvbiIsImR1ZURhdGUiLCJwcm9qZWN0VGFza3MiLCJmaWx0ZXIiLCJ0YXNrIiwicmVuZGVyVGFza3MiLCJUYXNrIiwiVEFTS1NfRk9STSIsInRhc2tDcmVhdGlvbiIsImNyZWF0ZU5ld1Rhc2siLCJUQVNLX05BTUUiLCJUQVNLX0RFU0NSSVBUSU9OIiwiVEFTS19EQVRFIiwiVEFTS19QUklPUklUWSIsIm5hbWUiLCJkYXRlIiwibmV3VGFzayIsInRhc2tQcm9qZWN0IiwiVEFTS1NfTElTVCIsInJlbmRlclRhc2siLCJ0YXNrcyJdLCJtYXBwaW5ncyI6Im1CQUFBLE1BQU1BLEVBQ0YsWUFBWUMsR0FDUkMsS0FBS0QsTUFBUUEsR0FLckIsTUFBTUUsRUFBZUMsU0FBU0MsTUFBTSxnQkFHcENGLEVBQWFHLGlCQUFpQixVQUFXQyxJQUNyQ0EsRUFBRUMsb0JBSUMsTUFBTUMsRUFBa0IsTUFHM0IsTUFvSU1DLEVBQVcsQ0FBQ0MsRUFBS0MsS0FDbkIsSUFBSUMsRUFRSixPQU5JQSxFQURvQixRQUFwQkYsRUFBSUMsR0FBR0UsU0FDQyxVQUNtQixXQUFwQkgsRUFBSUMsR0FBR0UsU0FDTixPQUVBLFNBRUxELEdBR1gsTUFBTyxDQUNIRSxXQWpKZ0JDLElBQ0laLFNBQVNhLGNBQWMsZ0JBRS9CWCxpQkFBaUIsU0FBUyxLQWFwQixDQUFDVSxJQUNuQixNQUFNRSxFQUFnQmYsRUFBYWMsY0FBYyxrQkFBa0JFLE1BRTdEQyxFQUFjLElBQUlwQixFQUFRa0IsR0FDaENGLEVBQVdLLEtBQUtELElBZlpFLENBQWNOLEdBaUJJLENBQUNBLElBQ3ZCLE1BQU1PLEVBQWVuQixTQUFTYSxjQUFjLGlCQUM1Q00sRUFBYUMsVUFBWSxzSEFJekIsSUFBSyxJQUFJWixFQUFJLEVBQUdBLEVBQUlJLEVBQVdTLE9BQVFiLElBQ25DVyxFQUFhQyxXQUFhLHlGQUNnRFIsRUFBV0osR0FBR1gsc0JBdEJ4RnlCLENBQWtCVixHQUdsQlosU0FBU2EsY0FBYyxpQkFBaUJVLFlBc0loQ0Msb0JBN0dhQyxJQUN6QixNQUFNTixFQUFlbkIsU0FBU2EsY0FBYyxpQkFFNUNNLEVBQWFqQixpQkFBaUIsU0FBVUMsSUFDcEMsTUFBTXVCLEVBQWV2QixFQUFFd0IsT0FBT0MsWUFtQmIsRUFBQ0MsRUFBT0MsS0FDN0IsTUFBT0MsRUFBVUYsRUFBTUYsT0FFUixJQUFJRyxFQUFZRSxVQUN0QkMsU0FBUSxTQUFTQyxHQUN0QkEsRUFB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QixFQUFXQyxFQUFrQkMsRUFBV0MsRUFBZWxCLEdBZ0I5RCxFQUFDc0IsRUFBYXJDLEtBQzdCLE1BQU1zQyxFQUFhL0QsU0FBU2EsY0FBYyxlQUUxQ2tELEVBQVczQyxVQUFZLEdBQ3ZCLElBQUkyQixFQUFldEIsRUFBU3VCLFFBQU9DLEdBQVFBLEVBQUtmLFVBQVk0QixJQUU1RCxJQUFLLElBQUl0RCxFQUFJLEVBQUdBLEVBQUl1QyxFQUFhMUIsT0FBUWIsSUFBSyxDQUMxQyxJQUFJQyxFQUFRSCxFQUFTeUMsRUFBY3ZDLEdBRW5DdUQsRUFBVzNDLFdBQWEsb0dBR1NYLDBFQUE4RUQsZ0RBQWdEQSw4QkFDbkp1QyxFQUFhdkMsR0FBR1gsd0lBSVdXLDBEQUNDQyxxSEFFTUEsMkRBQStEc0MsRUFBYXZDLEdBQUdxQyw2RUFDL0VwQyx3REFBNERzQyxFQUFhdkMsR0FBR3NDLHlFQUM1RXJDLHdEQUE0RHNDLEVBQWF2QyxHQUFHRSx3SUFuQzFIc0QsQ0FBV3hCLEVBQWNmLEdBRXpCekIsU0FBU2EsY0FBYyxlQUFlVSxjQWpCdEIsR0NadEIwQyxFQUFRLENBQ1YsQ0FDRXBFLE1BQU8sU0FDUGdELFlBQWEsZ0JBQ2JDLFFBQVMsYUFDVHBDLFNBQVUsTUFDVndCLFFBQVMsYUFFWCxDQUNFckMsTUFBTyxTQUNQZ0QsWUFBYSxnQkFDYkMsUUFBUyxhQUNUcEMsU0FBVSxTQUNWd0IsUUFBUyxhQUVYLENBQ0VyQyxNQUFPLFNBQ1BnRCxZQUFhLGdCQUNiQyxRQUFTLGFBQ1RwQyxTQUFVLE9BQ1Z3QixRQUFTLGNBS2Y3QixFQUFnQk0sV0EzQkMsR0EyQm9Cc0QsR0FDckM1RCxFQUFnQm1CLG9CQUFvQnlDLEdBR3BDWixFQUFhQyxjQUFjVyxJIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQcm9qZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlKSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBQcm9qZWN0IEZvcm0gSW5mb3JtYXRpb25cclxuY29uc3QgUFJPSkVDVF9GT1JNID0gZG9jdW1lbnQuZm9ybXNbJ3Byb2plY3QtZm9ybSddO1xyXG5cclxuLy8gcHJldmVudCBmb3JtIGRlZmF1bHQgYmVoYXZpb3VyXHJcblBST0pFQ1RfRk9STS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KVxyXG5cclxuLy8gUHJvamVjdCBDcmVhdGlvbiBNb2R1bGUgKElJRkUpO1xyXG5leHBvcnQgY29uc3QgcHJvamVjdENyZWF0aW9uID0gKCgpID0+IHtcclxuXHJcbiAgICAvLyBDcmVhdGUgYW5kIGRpc3BsYXkgcHJvamVjdCBpbiB0aGUgVUlcclxuICAgIGNvbnN0IGFkZFByb2plY3QgPSAocHJvamVjdEFycikgPT4ge1xyXG4gICAgICAgIGNvbnN0IFBST0pFQ1RfQlROID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtYnRuJyk7XHJcblxyXG4gICAgICAgIFBST0pFQ1RfQlROLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBjcmVhdGUgbmV3IHByb2plY3RcclxuICAgICAgICAgICAgY3JlYXRlUHJvamVjdChwcm9qZWN0QXJyKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFJlbmRlciBwcm9qZWN0cyBpbiB2aWV3c1xyXG4gICAgICAgICAgICByZW5kZXJQcm9qZWN0Vmlldyhwcm9qZWN0QXJyKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHJlc2V0IHByb2plY3QgZm9ybVxyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1mb3JtJykucmVzZXQoKTtcclxuICAgICAgICB9KVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBQcm9qZWN0IEhlbHBlciBtZXRob2RzXHJcbiAgICBjb25zdCBjcmVhdGVQcm9qZWN0ID0gKHByb2plY3RBcnIpID0+IHtcclxuICAgICAgICBjb25zdCBQUk9KRUNUX1RJVExFID0gUFJPSkVDVF9GT1JNLnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC10aXRsZVwiKS52YWx1ZTtcclxuXHJcbiAgICAgICAgY29uc3QgTkVXX1BST0pFQ1QgPSBuZXcgUHJvamVjdChQUk9KRUNUX1RJVExFKTtcclxuICAgICAgICBwcm9qZWN0QXJyLnB1c2goTkVXX1BST0pFQ1QpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmVuZGVyUHJvamVjdFZpZXcgPSAocHJvamVjdEFycikgPT4ge1xyXG4gICAgICAgIGNvbnN0IFBST0pFQ1RfTElTVCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1saXN0XCIpO1xyXG4gICAgICAgIFBST0pFQ1RfTElTVC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWRhcmsgYnRuIG15LTFcIiBpZD1cInByb2plY3QtbGlzdFwiPkFsbCBQcm9qZWN0czwvbGk+XHJcbiAgICAgICAgYDtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0QXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIFBST0pFQ1RfTElTVC5pbm5lckhUTUwgKz0gYFxyXG4gICAgICAgIDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tZGFyayBidG4gbXktMVwiIGlkPVwicHJvamVjdC1saXN0XCI+JHtwcm9qZWN0QXJyW2ldLnRpdGxlfTwvbGk+XHJcbiAgICAgIGA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIERpc3BsYXkgdGhlIHByb2plY3QncyBzcGVjaWZpYyB0YXNrcyBpbiB0aGUgVUlcclxuICAgIGNvbnN0IGRpc3BsYXlQcm9qZWN0VGFza3MgPSAodGFza3NBcnIpID0+IHtcclxuICAgICAgICBjb25zdCBQUk9KRUNUX0xJU1QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1saXN0Jyk7XHJcblxyXG4gICAgICAgIFBST0pFQ1RfTElTVC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IFBST0pFQ1RfTkFNRSA9IGUudGFyZ2V0LnRleHRDb250ZW50O1xyXG5cclxuICAgICAgICAgICAgcHJvamVjdFNlbGVjdGlvbihlLCBQUk9KRUNUX0xJU1QpO1xyXG5cclxuICAgICAgICAgICAgdGFza09wdGlvbnMoUFJPSkVDVF9OQU1FKTtcclxuXHJcbiAgICAgICAgICAgIHJlbmRlclRhc2tzKFBST0pFQ1RfTkFNRSwgdGFza3NBcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFByb2plY3QncyB0YXNrcyBIZWxwZXIgTWV0aG9kXHJcbiAgICBjb25zdCB0YXNrT3B0aW9ucyA9IChwcm9qZWN0TmFtZSkgPT4ge1xyXG4gICAgICAgIC8vIENyZWF0ZSBzZWxlY3Rpb24gb24gdGFza3MgYmFzZWQgb24gb2JqZWN0c1xyXG4gICAgICAgIGNvbnN0IFRBU0tfUFJPSkVDVCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0Jyk7XHJcbiAgICAgICAgVEFTS19QUk9KRUNULmlubmVySFRNTCA9IGBgO1xyXG4gICAgICAgIFRBU0tfUFJPSkVDVC5pbm5lckhUTUwgKz0gYFxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgdmFsdWU9XCIke3Byb2plY3ROYW1lfVwiIGlkPVwidGFzay1wcm9qZWN0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBhcmlhLWxhYmVsPVwiRGVmYXVsdCBzZWxlY3QgZXhhbXBsZVwiPlxyXG4gICAgYDtcclxuICAgIH1cclxuICAgIGNvbnN0IHByb2plY3RTZWxlY3Rpb24gPSAoZXZlbnQsIHByb2plY3RMaXN0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgIFBST0pFQ1QgPSBldmVudC50YXJnZXQ7XHJcblxyXG4gICAgICAgIGxldCBjaGlsZHJlbiA9IFsuLi5wcm9qZWN0TGlzdC5jaGlsZHJlbl07XHJcbiAgICAgICAgY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihwcm9qZWN0KXtcclxuICAgICAgICAgICAgcHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgUFJPSkVDVC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICBjb25zdCBUQVNLX0RJU1BMQVkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1kaXNwbGF5Jyk7XHJcbiAgICAgICAgVEFTS19ESVNQTEFZLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmVuZGVyVGFza3MgPSAocHJvamVjdE5hbWUsIHRhc2tzQXJyKSA9PiB7XHJcbiAgICAgICAgY29uc3QgVEFTS19MSVNUID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrcy1saXN0XCIpO1xyXG4gICAgICAgIFRBU0tfTElTVC5pbm5lckhUTUwgPSBgYDtcclxuICAgICAgICBjb25zdCBBRERfVEFTS19CVE4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXRhc2snKTtcclxuICAgICAgICBjb25zdCBGT1JNID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI211bHRpQ29sbGFwc2VFeGFtcGxlMicpO1xyXG5cclxuICAgICAgICBpZiAocHJvamVjdE5hbWUgPT09IFwiQWxsIFByb2plY3RzXCIpIHtcclxuICAgICAgICAgICAgQUREX1RBU0tfQlROLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xyXG4gICAgICAgICAgICBGT1JNLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzQXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29sb3IgPSBnZXRDb2xvcih0YXNrc0FyciwgaSk7XHJcblxyXG4gICAgICAgICAgICAgICAgVEFTS19MSVNULmlubmVySFRNTCArPSBgXHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLSR7Y29sb3J9IHctMTAwXCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtYnMtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLWJzLXRhcmdldD1cIiN0YXNrLSR7aX1cIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWNvbnRyb2xzPVwidGFzay0ke2l9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHt0YXNrc0FycltpXS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbGxhcHNlXCIgaWQ9XCJ0YXNrLSR7aX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgY2FyZC1ib2R5IGJnLSR7Y29sb3J9IG1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJsaXN0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBiZy0ke2NvbG9yfSB0ZXh0LXdoaXRlXCI+PHNwYW4gY2xhc3M9XCJmdy1ib2xkXCI+RGVzY3JpcHRpb248L3NwYW4+OiAke3Rhc2tzQXJyW2ldLmRlc2NyaXB0aW9ufTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBiZy0ke2NvbG9yfSB0ZXh0LXdoaXRlXCI+PHNwYW4gY2xhc3M9XCJmdy1ib2xkXCI+RHVlIERhdGU8L3NwYW4+OiAke3Rhc2tzQXJyW2ldLmR1ZURhdGV9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGJnLSR7Y29sb3J9IHRleHQtd2hpdGVcIj48c3BhbiBjbGFzcz1cImZ3LWJvbGRcIj5Qcmlvcml0eTwvc3Bhbj46ICR7dGFza3NBcnJbaV0ucHJpb3JpdHl9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgQUREX1RBU0tfQlROLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xyXG4gICAgICAgICAgICBGT1JNLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xyXG4gICAgICAgICAgICBsZXQgcHJvamVjdFRhc2tzID0gdGFza3NBcnIuZmlsdGVyKHRhc2sgPT4gdGFzay5wcm9qZWN0ID09PSBwcm9qZWN0TmFtZSk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdFRhc2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29sb3IgPSBnZXRDb2xvcihwcm9qZWN0VGFza3MsIGkpO1xyXG5cclxuICAgICAgICAgICAgICAgIFRBU0tfTElTVC5pbm5lckhUTUwgKz0gYFxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi0ke2NvbG9yfSB3LTEwMFwiIHR5cGU9XCJidXR0b25cIiBkYXRhLWJzLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS1icy10YXJnZXQ9XCIjdGFzay0ke2l9XCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1jb250cm9scz1cInRhc2stJHtpfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICR7cHJvamVjdFRhc2tzW2ldLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sbGFwc2VcIiBpZD1cInRhc2stJHtpfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBjYXJkLWJvZHkgYmctJHtjb2xvcn0gbWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImxpc3QtZ3JvdXAgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBiZy0ke2NvbG9yfSB0ZXh0LXdoaXRlXCI+PHNwYW4gY2xhc3M9XCJmdy1ib2xkXCI+RGVzY3JpcHRpb248L3NwYW4+OiAke3Byb2plY3RUYXNrc1tpXS5kZXNjcmlwdGlvbn08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gYmctJHtjb2xvcn0gdGV4dC13aGl0ZVwiPjxzcGFuIGNsYXNzPVwiZnctYm9sZFwiPkR1ZSBEYXRlPC9zcGFuPjogJHtwcm9qZWN0VGFza3NbaV0uZHVlRGF0ZX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gYmctJHtjb2xvcn0gdGV4dC13aGl0ZVwiPjxzcGFuIGNsYXNzPVwiZnctYm9sZFwiPlByaW9yaXR5PC9zcGFuPjogJHtwcm9qZWN0VGFza3NbaV0ucHJpb3JpdHl9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgZ2V0Q29sb3IgPSAoYXJyLCBpKSA9PiB7XHJcbiAgICAgICAgbGV0IGNvbG9yO1xyXG4gICAgICAgIGlmIChhcnJbaV0ucHJpb3JpdHkgPT09ICdsb3cnKSB7XHJcbiAgICAgICAgICAgIGNvbG9yID0gJ3N1Y2Nlc3MnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYXJyW2ldLnByaW9yaXR5ID09PSAnbWVkaXVtJykge1xyXG4gICAgICAgICAgICBjb2xvciA9ICdpbmZvJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb2xvciA9ICdkYW5nZXInO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBhZGRQcm9qZWN0LCBkaXNwbGF5UHJvamVjdFRhc2tzXHJcbiAgICB9XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7IHByb2plY3RDcmVhdGlvbiB9OyIsImNsYXNzIFRhc2sge1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCA9IFwiZGVmYXVsdFwiKSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBUYXNrcyBGb3JtIEluZm9ybWF0aW9uXHJcbmNvbnN0IFRBU0tTX0ZPUk0gPSBkb2N1bWVudC5mb3Jtc1sndGFza3MtZm9ybSddO1xyXG5cclxuLy8gcHJldmVudCBmb3JtIGRlZmF1bHQgYmVoYXZpb3VyXHJcblRBU0tTX0ZPUk0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG4vLyBUYXNrIENyZWF0aW9uIE1vZHVsZSAoSUlGRSk7XHJcbmV4cG9ydCBjb25zdCB0YXNrQ3JlYXRpb24gPSAoKCkgPT4ge1xyXG4gICAgLy8gY3JlYXRlIHRhc2sgYW5kIGRpc3BsYXkgaXQgb24gdGhlIFVJXHJcbiAgICBjb25zdCBjcmVhdGVOZXdUYXNrID0gKHRhc2tzQXJyKSA9PiB7XHJcbiAgICAgICAgY29uc3QgVEFTS19CVE4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stYnRuXCIpO1xyXG4gICAgICAgIFRBU0tfQlROLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBUQVNLX05BTUUgPSBUQVNLU19GT1JNLnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1uYW1lXCIpLnZhbHVlO1xyXG4gICAgICAgICAgICBjb25zdCBUQVNLX0RFU0NSSVBUSU9OID0gVEFTS1NfRk9STS5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stZGVzY3JpcHRpb25cIikudmFsdWU7XHJcbiAgICAgICAgICAgIGNvbnN0IFRBU0tfREFURSA9IFRBU0tTX0ZPUk0ucXVlcnlTZWxlY3RvcihcIiN0YXNrLWRhdGVcIikudmFsdWU7XHJcbiAgICAgICAgICAgIGNvbnN0IFRBU0tfUFJJT1JJVFkgPSBUQVNLU19GT1JNLnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1wcmlvcml0eVwiKS52YWx1ZTtcclxuICAgICAgICAgICAgY29uc3QgVEFTS19QUk9KRUNUID0gVEFTS1NfRk9STS5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stcHJvamVjdFwiKS52YWx1ZTtcclxuXHJcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBuZXcgdGFzayBpbnN0YW5jZVxyXG4gICAgICAgICAgICBuZXdUYXNrKHRhc2tzQXJyLCBUQVNLX05BTUUsIFRBU0tfREVTQ1JJUFRJT04sIFRBU0tfREFURSwgVEFTS19QUklPUklUWSwgVEFTS19QUk9KRUNUKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHJlbmRlciB0YXNrIHRvIHRoZSBVSVxyXG4gICAgICAgICAgICByZW5kZXJUYXNrKFRBU0tfUFJPSkVDVCwgdGFza3NBcnIpO1xyXG5cclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tzLWZvcm0nKS5yZXNldCgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gY3JlYXRlIHRhc2sgb2JqZWN0XHJcbiAgICBjb25zdCBuZXdUYXNrID0gKHRhc2tzQXJyLCBuYW1lLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHksIHByb2plY3QpID0+IHtcclxuICAgICAgICBjb25zdCBuZXdUYXNrID0gbmV3IFRhc2sobmFtZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5LCBwcm9qZWN0KTtcclxuICAgICAgICB0YXNrc0Fyci5wdXNoKG5ld1Rhc2spO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHJlbmRlciB0YXNrcyBpbiB0aGUgVUlcclxuICAgIGNvbnN0IHJlbmRlclRhc2sgPSAodGFza1Byb2plY3QsIHRhc2tzQXJyKSA9PiB7XHJcbiAgICAgICAgY29uc3QgVEFTS1NfTElTVCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza3MtbGlzdFwiKTtcclxuXHJcbiAgICAgICAgVEFTS1NfTElTVC5pbm5lckhUTUwgPSBgYDtcclxuICAgICAgICBsZXQgcHJvamVjdFRhc2tzID0gdGFza3NBcnIuZmlsdGVyKHRhc2sgPT4gdGFzay5wcm9qZWN0ID09PSB0YXNrUHJvamVjdCk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdFRhc2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjb2xvciA9IGdldENvbG9yKHByb2plY3RUYXNrcywgaSk7XHJcblxyXG4gICAgICAgICAgICBUQVNLU19MSVNULmlubmVySFRNTCArPSBgXHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLSR7Y29sb3J9IHctMTAwXCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtYnMtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLWJzLXRhcmdldD1cIiN0YXNrLSR7aX1cIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWNvbnRyb2xzPVwidGFzay0ke2l9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAke3Byb2plY3RUYXNrc1tpXS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sbGFwc2VcIiBpZD1cInRhc2stJHtpfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIGNhcmQtYm9keSBiZy0ke2NvbG9yfSBtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJsaXN0LWdyb3VwIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBiZy0ke2NvbG9yfSB0ZXh0LXdoaXRlXCI+PHNwYW4gY2xhc3M9XCJmdy1ib2xkXCI+RGVzY3JpcHRpb248L3NwYW4+OiAke3Byb2plY3RUYXNrc1tpXS5kZXNjcmlwdGlvbn08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBiZy0ke2NvbG9yfSB0ZXh0LXdoaXRlXCI+PHNwYW4gY2xhc3M9XCJmdy1ib2xkXCI+RHVlIERhdGU8L3NwYW4+OiAke3Byb2plY3RUYXNrc1tpXS5kdWVEYXRlfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGJnLSR7Y29sb3J9IHRleHQtd2hpdGVcIj48c3BhbiBjbGFzcz1cImZ3LWJvbGRcIj5Qcmlvcml0eTwvc3Bhbj46ICR7cHJvamVjdFRhc2tzW2ldLnByaW9yaXR5fTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICBgO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRDb2xvciA9IChhcnIsIGkpID0+IHtcclxuICAgICAgICBsZXQgY29sb3I7XHJcbiAgICAgICAgaWYgKGFycltpXS5wcmlvcml0eSA9PT0gJ2xvdycpIHtcclxuICAgICAgICAgICAgY29sb3IgPSAnc3VjY2Vzcyc7XHJcbiAgICAgICAgfSBlbHNlIGlmIChhcnJbaV0ucHJpb3JpdHkgPT09ICdtZWRpdW0nKSB7XHJcbiAgICAgICAgICAgIGNvbG9yID0gJ2luZm8nO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbG9yID0gJ2Rhbmdlcic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNyZWF0ZU5ld1Rhc2tcclxuICAgIH1cclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHsgdGFza0NyZWF0aW9uIH07IiwiLy8gTWV0aG9kIGltcG9ydHNcclxuaW1wb3J0IHsgcHJvamVjdENyZWF0aW9uIH0gZnJvbSBcIi4vcHJvamVjdFwiO1xyXG5pbXBvcnQgeyB0YXNrQ3JlYXRpb24gfSBmcm9tIFwiLi90YXNrXCI7XHJcblxyXG4vLyBPYmplY3QncyBhcnJheXNcclxuY29uc3QgcHJvamVjdHMgPSBbXTtcclxuXHJcbmNvbnN0IHRhc2tzID0gW1xyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJUYXNrIDFcIixcclxuICAgICAgZGVzY3JpcHRpb246IFwiRGVzY3JpcHRpb24gMVwiLFxyXG4gICAgICBkdWVEYXRlOiBcIjIwMjEtMDYtMTBcIixcclxuICAgICAgcHJpb3JpdHk6IFwibG93XCIsXHJcbiAgICAgIHByb2plY3Q6IFwiUHJvamVjdCAxXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIlRhc2sgMlwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJEZXNjcmlwdGlvbiAyXCIsXHJcbiAgICAgIGR1ZURhdGU6IFwiMjAyMS0wNi0xMFwiLFxyXG4gICAgICBwcmlvcml0eTogXCJtZWRpdW1cIixcclxuICAgICAgcHJvamVjdDogXCJQcm9qZWN0IDJcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiVGFzayAzXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXB0aW9uIDNcIixcclxuICAgICAgZHVlRGF0ZTogXCIyMDIxLTA2LTEwXCIsXHJcbiAgICAgIHByaW9yaXR5OiBcImhpZ2hcIixcclxuICAgICAgcHJvamVjdDogXCJQcm9qZWN0IDNcIlxyXG4gICAgfVxyXG4gIF07XHJcblxyXG4vLyBDYWxsIG9mIHByb2plY3QncyBmdW5jdGlvbiB3aXRoIGF0dGFjaGVkIGV2ZW50IGxpc3RlbmVyc1xyXG5wcm9qZWN0Q3JlYXRpb24uYWRkUHJvamVjdChwcm9qZWN0cywgdGFza3MpO1xyXG5wcm9qZWN0Q3JlYXRpb24uZGlzcGxheVByb2plY3RUYXNrcyh0YXNrcyk7XHJcblxyXG4vLyBDYWxsIHRhc2tzIGZ1bmN0aW9ucyB3aXRoIGF0dGFjaGVkIGV2ZW50IGxpc3RlbmVyc1xyXG50YXNrQ3JlYXRpb24uY3JlYXRlTmV3VGFzayh0YXNrcyk7XHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=