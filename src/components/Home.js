import "./styles.css" 

//-- Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPen } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { faPhoneFlip } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"

export default function Home() {

  let [stateAdd, setStateAdd] = useState(false)

  return(
    <div className="container-fluid p-5">
      <div className="header mb-5">
        <h2 className="fw-bolder m-0">GESTIÓN DE ESTUDIANTES</h2>
        {stateAdd ?
          <button className="btn btn-danger" onClick={()=>setStateAdd(!stateAdd)} >
            Cancelar
          </button>
          :
          <button className="btn btn-success" onClick={()=>setStateAdd(!stateAdd)}>
            Agregar estudiante
          </button>
        }
      </div>

      {stateAdd &&
        <div className="conteiner-add mb-5">
          <form>
            <div class="row g-3 input-group mb-3">
              <div className="col-md d-flex">
                <span class="input-group-text">
                  <FontAwesomeIcon icon={faUser}/>
                </span>
                <input type="text" class="form-control" placeholder="Nombre" required/>
              </div>
              <div className="col-md d-flex">
                <span class="input-group-text">
                  <FontAwesomeIcon icon={faUser}/>
                </span>
                <input type="text" class="form-control" placeholder="Apellido" required/>
              </div>
              <div className="col-md d-flex">
                <span class="input-group-text">
                  <FontAwesomeIcon icon={faAddressCard}/>
                </span>
                <input type="text" class="form-control" placeholder="Identificación" required/>
              </div>
              <div className="col-md d-flex">
                <span class="input-group-text">
                  <FontAwesomeIcon icon={faPhoneFlip}/>
                </span>
                <input type="number" class="form-control" placeholder="Teléfono" required/>
              </div>
            </div>

            <div class="row g-3 input-group mb-3">
              <div className="col-md d-flex">
                <span class="input-group-text">
                  <FontAwesomeIcon icon={faEnvelope}/>
                </span>
                <input type="email" class="form-control" placeholder="Email" required/>
              </div>
              <div className="col-md d-flex">
                <span class="input-group-text">
                  <FontAwesomeIcon icon={faUserGraduate}/>
                </span>
                <input type="text" class="form-control" placeholder="Carrera" required/>
              </div>
              <div className="col-md d-flex">
                <span class="input-group-text">
                  <FontAwesomeIcon icon={faUserGraduate}/>
                </span>
                <input type="text" class="form-control" placeholder="Semestre" required/>
              </div>
            </div>
            <button type="submit" className="btn btn-success">
              Agregar
            </button>
          </form>
        </div>
      }
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Identificación</th>
            <th scope="col">Teléfono</th>
            <th scope="col">Email</th>
            <th scope="col">Carrera</th>
            <th scope="col">Semestre</th>
            <th scope="col">Gestión</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Barrios</td>
            <td>100187527385</td>
            <td>3132424</td>
            <td>mark@gmail.com</td>
            <td>Ing. sistemas</td>
            <td>9</td>
            <td>
              <FontAwesomeIcon icon={faUserPen} type="button" className="pe-2 fs-5 text-primary" title="Editar" />
              <FontAwesomeIcon icon={faTrashCan} type="button" className="fs-5 text-danger" title="Eliminar"/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}