import { useState, useContext } from "react";
import Header from "../../components/Header";
import Title from "../../components/Title";
import { FiSettings, FiUpload } from "react-icons/fi";
import avatar from "../../assets/avatar.png";
import { AuthContext } from "../../contexts/auth";
import { db, storage } from "../../services/firebaseConnection"
import { doc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import "./Profile.css"
function Profile() {

    const { user, storageUser, setUser, logout } = useContext(AuthContext);
    const [imageAvatar, setImageAvatar] = useState(null);
    const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl);
    const [nome, setNome] = useState(user && user.nome);
    console.log(nome);
    const [email, setEmail] = useState(user && user.email);

    async function handleUpload() {
        const currentUid = user.uid;
        console.log(imageAvatar);
        const uploadRef = ref(storage, `images/${currentUid}/${imageAvatar.name}`)
        alert("teste");
        console.log(user);
        const uploadTask = uploadBytes(uploadRef, imageAvatar)
            .then((snapshot) => {
                getDownloadURL(snapshot.ref).then(async (downloadURL) =>{
                    let urlFoto = downloadURL;
                    const docRef = doc(db, "users", user.uid);
                    await updateDoc(docRef, {
                        avatarUrl: urlFoto,
                        nome: nome
                    })
                    .then(()=>{
                        let data = {
                            ...user,
                            nome: nome,
                            avatarUrl: urlFoto
                        }

                        setUser(data);
                        storageUser(data);
                        toast.success("Atualizado com sucesso")
                    })
                })
            }
        )
        .catch( (error) =>{
            alert(error);
        })
    }
    async function handleSubmit(e) {
        e.preventDefault();
        if (imageAvatar === null && nome !== "") {
            const docRef = doc(db, "users", user.uid);
            await updateDoc(docRef, {
                nome: nome
            })
                .then(() => {
                    let data = {
                        ...user,
                        nome: nome
                    }
                    
                    setUser(data);
                    storageUser(data);
                    toast.success("Atualizado com sucesso")
                })
                .catch(() => {
                    toast.error("Ops... Algo deu errado.")
                })
        } else if (nome !== "" && imageAvatar !== null) {
            // handleUpload();
            alert("Upload simulator")
        }
    }


    function handleFile(e) {
        if (e.target.files[0]) {
            const image = e.target.files[0];

            if (image.type === "image/jpeg" || image.type === "image/png") {
                setImageAvatar(image);
                setAvatarUrl(URL.createObjectURL(image));
            } else {
                alert("Envie uma imagem do tipo PNG ou JPEG");
                setImageAvatar(null);
                return;
            }
        }
    }

    return (
        <div>
            <Header />
            <div className="content">
                <Title name="Meu Perfil">
                    <FiSettings size={25} />
                </Title>

                <div className="container">
                    <form className="form-profile" onSubmit={handleSubmit}>
                        <label className="label-avatar">
                            <span>
                                <FiUpload color="#FFF" size={25} />
                            </span>

                            <input type="file" accept="image/*" onChange={handleFile} /> <br />

                            {avatarUrl === null ? (
                                <img src={avatar} alt="Foto de perfil" width={250} height={250} />

                            ) : (

                                <img src={avatarUrl} alt="Foto de perfil" width={250} height={250} />
                            )}
                        </label>

                        <label>Nome</label> <br />
                        <input type="text" value={nome} onChange={(e) => { setNome(e.target.value) }} /> <br />

                        <label>Email</label> <br />
                        <input type="text" value={email} disabled={true} /> <br />

                        <button type="submit">Salvar</button>
                    </form>
                </div>
                <div className="container">
                    <button className="logout-btn" onClick={() => { logout() }} >Sair</button>
                </div>
            </div>
        </div>
    )
}

export default Profile;