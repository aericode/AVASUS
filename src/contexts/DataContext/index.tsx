import { createContext, useState, useEffect, FC, ReactNode } from 'react';

interface Course {
  id: number;
  name: string;
}

interface Partner {
  id: number;
  name: string;
}

interface Transparency {
  id: number;
}

interface DataContextProps {
  cursosData: Course[];
  parceirosData: Partner[];
  transparenciaData: Transparency[];
}

type DataProviderType = {
  children: ReactNode;
};

export const DataContext = createContext<DataContextProps | undefined>(undefined);

export const DataProvider: React.FC<DataProviderType> = ({ children } : any) => {
  const [cursosData, setCursosData] = useState<Course[]>([]);
  const [parceirosData, setParceirosData] = useState<Partner[]>([]);
  const [transparenciaData, setTransparenciaData] = useState<Transparency[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cursosResponse = await fetch('http://localhost:3004/cursos');
        const parceirosResponse = await fetch('http://localhost:3004/parceiros');
        const transparenciaResponse = await fetch('http://localhost:3004/transparencia');

        const cursosJson = await cursosResponse.json() as Course[];
        const parceirosJson = await parceirosResponse.json() as Partner[];
        const transparenciaJson = await transparenciaResponse.json() as Transparency[];

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