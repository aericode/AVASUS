import { createContext, useState, useEffect, ReactNode } from 'react';
import { Curso } from '../../types/curso';
import { Parceiro } from '../../types/parceiro';
import { Transparencia } from '../../types/transparencia';

interface DataContextProps {
  cursosData?: Curso[];
  parceirosData?: Parceiro[];
  transparenciaData?: Transparencia[];
}

type DataProviderType = {
  children: ReactNode;
};

export const DataContext = createContext<DataContextProps>({} as DataContextProps);

export const DataProvider: React.FC<DataProviderType> = ({ children }) => {
  const [cursosData, setCursosData] = useState<Curso[]>();
  const [parceirosData, setParceirosData] = useState<Parceiro[]>();
  const [transparenciaData, setTransparenciaData] = useState<Transparencia[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cursosResponse = await fetch('http://localhost:3004/cursos/');
        const parceirosResponse = await fetch('http://localhost:3004/parceiros/');
        const transparenciaResponse = await fetch('http://localhost:3004/transparecia/');

        const cursosJson = await cursosResponse.json() as Curso[];
        const parceirosJson = await parceirosResponse.json() as Parceiro[];
        const transparenciaJson = await transparenciaResponse.json() as Transparencia[];

        setCursosData(cursosJson);
        setParceirosData(parceirosJson);
        setTransparenciaData(transparenciaJson);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const contextValue: DataContextProps = {
    cursosData,
    parceirosData,
    transparenciaData,
  };

  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );
};