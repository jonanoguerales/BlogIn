import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import "./settings.css";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; //Importamos el componente para poder utilizar los iconos
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'; //El icono o iconos a utilizar
import Navbar from "../../components/navbar/Navbar";
import { Navigate } from "react-router-dom";

const Settings = () => {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [success, setSuccess] = useState(false);
  const { user, dispatch } = useContext(Context);
  const PF = "https://servidorblog.herokuapp.com/images/"

  const handleDelete = async () => {
    try {
      await axios.delete(`https://servidorblog.herokuapp.com/api/users/${user._id}`, {
        data: { username: user.username },
      });
      dispatch({ type: "LOGOUT" });
    } catch (err) { }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
      nombre,
      telefono
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("https://servidorblog.herokuapp.com/api/upload", data);
      } catch (err) {console.log(err) }
    }
    try {
      const res = await axios.put("https://servidorblog.herokuapp.com/api/users/" + user._id, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };
  return (
    <>
    <Navbar/>
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Actualizar tu cuenta</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <div className="settingsPP">
            <img
              src={file ? URL.createObjectURL(file) : PF + user.profilePic}
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon">
                <FontAwesomeIcon icon={faUserCircle} />
              </i>
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label>Nombre de usuario</label>
          <input
            type="text"
            placeholder={user.username}
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Nombre completo</label>
          <input
            type="text"
            placeholder={user.nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder={user.email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Contrase??a</label>
          <input
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
           <label>Tel??fono</label>
          <input
            type="text"
            placeholder={user.telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
          <button className="settingsSubmitButton" type="submit">
            Actualizar
          </button>
          {success && (
            <span
              style={{ color: "green", textAlign: "center", marginTop: "20px" }}
            >
              <Navigate to={`/login`}/>

            </span>
          )}
        </form>
        <span className="settingsTitleDelete" onClick={handleDelete}>o borrar cuenta</span>
      </div>
    </div>
    </>
  );
};

export default Settings;
