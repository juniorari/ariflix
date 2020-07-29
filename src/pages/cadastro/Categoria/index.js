import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';


function CadastroCategoria() {

    const [categorias, setCategorias] = useState([]);
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    }
    const [values, setValues] = useState(valoresIniciais);

    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave]: valor,
        })
    }

    function handleChange(e){
        // const { getAttribute, value } = e.target;        
        setValue(
            e.target.getAttribute('name'), 
            e.target.value
        );
    }

    return (
        <PageDefault>
            <h1>Cadastro Categoria: { values.nome }</h1>

            <form onSubmit={ function handleSubmit(e) {
                e.preventDefault();
                setCategorias([
                    ...categorias,
                    values
                ]);

                setValues(valoresIniciais);
            }}>

                <FormField
                    label="Nome da categoria"
                    type="text"
                    name="descricao"
                    value={values.nome}
                    onChange={handleChange}
                />

                <div>
                    <label>
                        Descrição:
                        <textarea
                            type="text"
                            name="descricao"
                            value={values.descricao}
                            onChange={handleChange}
                        />
                    </label>

                </div>

                <FormField
                    label="Cor"
                    type="color"
                    name="cor"
                    value={values.cor}
                    onChange={handleChange}
                />
                
                <button>
                    Cadastrar
                </button>
            </form>

            <ul>
                {categorias.map((categoria, idx) => {
                    return (
                        <li key={idx}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>

            <Link to="/">
                Ir para Home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;
