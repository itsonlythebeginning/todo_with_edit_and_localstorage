
let to_do_content = document.querySelector(".to_do_content")

let to_do_input_inp = document.querySelector(".to_do_input_inp")

let li_inp_checkbox = document.querySelectorAll(".li_inp_checkbox")

let li_inp_btn = document.querySelectorAll(".li_inp_btn")

let li_inp_txt = document.querySelectorAll(".li_inp_txt")


let todoOBJARR = []


if (localStorage.getItem("todoOBJ")) {


    todoOBJARR = JSON.parse(localStorage.getItem("todoOBJ"))

    todoOBJARR.forEach(function (z) {

        if (z.chechink === true) {
            to_do_content.insertAdjacentHTML("beforeend", `

                  </li>   <li  class="to_do_content_li" id="${z.id}"  >
              <input   class="li_inp_checkbox"  checked type="checkbox">
              <span   class="li_inp_txt checked_li"  >  ${z.li_inp_txt}  </span>
              <button    class="li_inp_btn"    >     X      </button>
          </li>

            `)
        }

        else {
            to_do_content.insertAdjacentHTML("beforeend", `

                  </li>   <li  class="to_do_content_li" id="${z.id}"  >
              <input   class="li_inp_checkbox" \  type="checkbox">
              <span   class="li_inp_txt"  >  ${z.li_inp_txt}  </span>
              <button    class="li_inp_btn"    >     X      </button>
          </li>

            `)
        }





    })


}


to_do_content.addEventListener("click", function (event) {


    if (event.target.classList.contains("li_inp_txt") && !event.target.classList.contains("checked_li")) {



        let editPromp = prompt("Редактирование", event.target.textContent.trim())


        if (editPromp !== null) {
            event.target.textContent = editPromp


            let indexFilter = event.target.parentNode.id

            let localStrOBJ = {
                id: indexFilter,
                li_inp_txt: editPromp,
                chechink: false
            }


            todoOBJARR.forEach(function (z, index) {
                if (z.id == indexFilter) {
                    todoOBJARR.splice(index, 1,localStrOBJ)
                }
            })




            localStorage.setItem("todoOBJ", JSON.stringify(todoOBJARR))




        }








    }



    if (event.target.classList.contains("li_inp_btn")) {


        let indexFilter = event.target.parentNode.id

        todoOBJARR.forEach(function (z, index) {
            if (z.id == indexFilter) {
                todoOBJARR.splice(index, 1)
            }
        })


        localStorage.setItem("todoOBJ", JSON.stringify(todoOBJARR))


        event.target.parentNode.remove()
    }






    if (event.target.classList.contains("li_inp_checkbox")) {



        if (event.target.checked === true) {
            event.target.parentNode.querySelector(".li_inp_txt").style.textDecoration = "line-through"
            event.target.parentNode.querySelector(".li_inp_txt").classList.add("checked_li")





            let indexFilter = event.target.parentNode.id
            let indexFilterTXT = event.target.parentNode.querySelector(".li_inp_txt").textContent


            let localStrOBJ = {
                id: indexFilter,
                li_inp_txt: indexFilterTXT,
                chechink: true
            }


            todoOBJARR.forEach(function (z, index) {
                if (z.id == indexFilter) {
                    todoOBJARR.splice(index, 1,localStrOBJ)
                }
            })




            localStorage.setItem("todoOBJ", JSON.stringify(todoOBJARR))







        }
        if (event.target.checked === false) {
            event.target.parentNode.querySelector(".li_inp_txt").style.textDecoration = ""
            event.target.parentNode.querySelector(".li_inp_txt").classList.remove("checked_li")




            let indexFilter = event.target.parentNode.id
            let indexFilterTXT = event.target.parentNode.querySelector(".li_inp_txt").textContent


            let localStrOBJ = {
                id: indexFilter,
                li_inp_txt: indexFilterTXT,
                chechink: false
            }

            todoOBJARR.forEach(function (z, index) {
                if (z.id == indexFilter) {
                    todoOBJARR.splice(index, 1,localStrOBJ)
                }
            })




            localStorage.setItem("todoOBJ", JSON.stringify(todoOBJARR))



        }
    }

})








to_do_input_inp.addEventListener("keyup", function (event) {


    if (event.key === "Enter") {



        let localStrOBJ = {
            id: Date.now(),
            li_inp_txt: to_do_input_inp.value,
            chechink: false
        }


        to_do_content.insertAdjacentHTML("beforeend", `
        
              </li>   <li  class="to_do_content_li" id="${localStrOBJ.id}"    >
          <input   class="li_inp_checkbox"   type="checkbox">
          <span   class="li_inp_txt"  >  ${to_do_input_inp.value}  </span>
          <button    class="li_inp_btn"    >     X      </button>
      </li>
        
        
        
        `)



        todoOBJARR.push(localStrOBJ)


        localStorage.setItem("todoOBJ", JSON.stringify(todoOBJARR))


        to_do_input_inp.value = ""



    }


})







