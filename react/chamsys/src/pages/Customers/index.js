import Header from "../../components/Header";
import Title from "../../components/Title";
import { FiUser } from "react-icons/fi";


function Customers(){
    return(
        <div>
            <Header/>

            <div className="content">
                <Title nome="Clientes">
                    <FiUser size={25}/>
                </Title>
            </div>
        </div>
    )
}

export default Customers;