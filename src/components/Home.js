import "./styles.css" 

//-- Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPen } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

export default function Home() {

  return(
    <div className="container-fluid p-5">
      <div className="header mb-5">
        <h2 className="fw-bolder m-0">GESTIÓN DE ESTUDIANTES</h2>
        <button className="btn btn-success">
          Agregar estudiante
        </button>
      </div>

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
              <FontAwesomeIcon icon={faUserPen} className="pe-2 fs-5 text-primary" title="Editar" />
              <FontAwesomeIcon icon={faTrashCan} className="fs-5 text-danger" title="Eliminar"/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}