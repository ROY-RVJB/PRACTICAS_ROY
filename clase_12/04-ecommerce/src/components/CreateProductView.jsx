import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { nuevoProducto } from "../service/productService";
import Swal from 'sweetalert2';
import { uploadFile } from "../service/storaggeService"
import { nameFILEUUID } from "../utils/utils";

const CreateProductoView =()=>{
    const navigate = useNavigate();
    const [values,setValues]=useState({
        nombre:'',
        descripcion:'',
        marca:'',
        precio:'0',
        foto:'https://prueba.com/fotos',
        color:'000000'
    });
    const [selectedFile, setSelectedFile] = useState(null);
    const [fileStatus, setFileStatus] = useState('No se ha seleccionado ningún archivo');
    const handValues=(ev)=>{
        console.log(ev.target.name)
        const nombrePropiedad=ev.target.name;
        let valorPropiedad=ev.target.value;

        // Si es el campo color, quitar el # del inicio
        if (nombrePropiedad === 'color' && valorPropiedad.startsWith('#')) {
            valorPropiedad = valorPropiedad.substring(1);
        }

        const productoNuevo={
            ...values,
            [nombrePropiedad]:valorPropiedad
        }
        setValues(productoNuevo);
    }

    const handleImage=(e)=>{
        const file = e.target.files[0];
        if (file) {
            console.log("handleImage", file);
            const newFileName = nameFILEUUID(file.name);
            console.log("Rest Name :", newFileName);
            setSelectedFile(file);
            setFileStatus(`Archivo seleccionado: ${file.name}`);
        } else {
            setSelectedFile(null);
            setFileStatus('No se ha seleccionado ningún archivo');
        }
    }


    const handleSubmit = async(ev) => {
        ev.preventDefault();
        
        try {
            let fotoUrl = values.foto;
            
            // Si hay un archivo seleccionado, subirlo primero
            if (selectedFile) {
                console.log('Subiendo archivo a Firebase:', selectedFile);
                fotoUrl = await uploadFile(selectedFile); // uploadFile ya devuelve la URL directamente
                console.log('URL de imagen desde Firebase:', fotoUrl);
            }
            
            // Crear el producto con la URL de la imagen
            const productoConImagen = {
                ...values,
                foto: fotoUrl
            };
            
            const resultado = await nuevoProducto(productoConImagen);
            console.log(resultado);
            
            // Alert de éxito
            Swal.fire({
                title: 'Producto creado',
                text: `Producto ${values.nombre} creado exitosamente`,
                icon: 'success',
                confirmButtonText: 'OK'
            }).then((result) => {
                if (result.isConfirmed) {
                    // Limpiar formulario
                    setValues({
                        nombre: '',
                        descripcion: '',
                        marca: '',
                        precio: '0',
                        foto: 'https://prueba.com/fotos',
                        color: '000000'
                    });
                    setSelectedFile(null);
                    setFileStatus('No se ha seleccionado ningún archivo');
                    // Redireccionar a la tabla de productos
                    navigate('/');
                }
            });
            
        } catch (error) {
            console.error('Error al crear producto:', error);
            Swal.fire({
                title: 'Error',
                text: 'Error al crear el producto. Intente nuevamente.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    }

    return(
        <div className="container pt-4">
            <h1 className="ab-3">Nuevo Producto Nuevo</h1>

            <form onSubmit={handleSubmit}>
                {/* nombre */}
            <div className="ab-3">
                <label 
                htmlFor="nombre"
                className="form-label">
                    Nombre de producto
                </label>

                <input 
                type="text" 
                className="form-control" id="nombre"
                placeholder="ingrese nombre de producto"
                name="nombre" 
                value={values.nombre}
                onChange={handValues}
            />

            </div>

                {/* descripcion */}
               <div className="ab-3">
                 <label 
                htmlFor="descripcion "
                className="form-label">
                    Descripcion del Producto
                </label>

                <textarea 
                type="text" 
                className="form-control" 
                id="descripcion" 
                placeholder="ingrese la descripcion del producto"
                name="descripcion"
                value={values.descripcion}
                onChange={handValues}
                >
                </textarea>

               </div>

               {/* marca */}
               <div className="mb-3">
                 <label 
                htmlFor="marca"
                className="form-label">
                    Marca del Producto
                </label>

                <input 
                type="text" 
                className="form-control" 
                id="marca"
                placeholder="ingrese la marca del producto"
                name="marca" 
                value={values.marca}
                onChange={handValues}
                />
               </div>

               {/* precio */}
               <div className="mb-3">
                 <label 
                htmlFor="precio"
                className="form-label">
                    Precio del Producto
                </label>

                <input 
                type="number" 
                className="form-control" 
                id="precio"
                placeholder="0.00"
                name="precio" 
                value={values.precio}
                onChange={handValues}
                step="0.01"
                min="0"
                />
               </div>

               <div>
                {/* color */}
                <div className="mb-3">
                <label 
                htmlFor="color"
                className="form-label">
                    Color del Producto
                </label>

                <input 
                type="color" 
                className="form-control " 
                id="color"
                name="color" 
                value={`#${values.color}`}
                onChange={handValues}
            
                />

               </div>

               {/* Componente de subida de archivos */}
               <div className="mb-4 p-3 border rounded">
                 {selectedFile && (
                   <div className="mb-2 p-2 bg-light rounded">
                     <strong>Archivo seleccionado:</strong> {selectedFile.name}
                   </div>
                 )}
                 
                 <div className="mb-3">
                   <label htmlFor="fileUpload" className="form-label">
                     Imagen del Producto
                   </label>
                   <input
                     type="file"
                     className="form-control"
                     id="fileUpload"
                     accept="image/*"
                     onChange={handleImage}
                   />
                 </div>
                 
                 <div className="text-muted small mb-3">
                   {fileStatus}
                 </div>
               </div>

               <button
               type="submit"
               className="btn btn-primary btn-lg w-100 py-3"
               style={{ backgroundColor: '#007bff', borderColor: '#007bff', fontWeight: 'bold' }}>
                📁 Grabar Producto
               </button>
            </div>

            </form>
            
        </div>
    );
}
 export default CreateProductoView
