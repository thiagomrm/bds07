import './styles.css';

import ResultCard from 'components/ResultCard';
<<<<<<< HEAD
import React from 'react';
import { useState } from 'react';
import axios from 'axios';

type FormData = {
  cep: string;
};

type Address = {
  logradouro: string;
  localidade: string;
};

const CepSearch = () => {
  const [address, setAddress] = useState<Address>();

  const [formData, setFormData] = useState<FormData>({
    cep: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios
      .get(`https://viacep.com.br/ws/${formData.cep}/json/`)
      .then((response) => {
        setAddress(response.data);
      })
      .catch((error) => {
        setAddress(undefined);
        console.log(error);
      });
  };

=======

const CepSearch = () => {
>>>>>>> a8ca96d9a8db8b618f420c141da13c7c4894b2e7
  return (
    <div className="cep-search-container">
      <h1 className="text-primary">Busca CEP</h1>
      <div className="container search-container">
<<<<<<< HEAD
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <input
              type="text"
              name="cep"
              className="search-input"
              placeholder="CEP (somente números)"
              value={formData.cep}
              onChange={handleChange}
=======
        <form>
          <div className="form-container">
            <input
              type="text"
              className="search-input"
              placeholder="CEP (somente números)"
              onChange={() => {}}
>>>>>>> a8ca96d9a8db8b618f420c141da13c7c4894b2e7
            />
            <button type="submit" className="btn btn-primary search-button">
              Buscar
            </button>
          </div>
        </form>

<<<<<<< HEAD
        {address &&
          <>
            <ResultCard title="Logradouro" description={address.logradouro} />
            <ResultCard title="Localidade" description={address.localidade} />
          </>
        }
=======
        <ResultCard title="Logradouro" description="Lalala" />
        <ResultCard title="Número" description="234" />

>>>>>>> a8ca96d9a8db8b618f420c141da13c7c4894b2e7
      </div>
    </div>
  );
};

export default CepSearch;
