import { Card } from "./components/Card";
import { List } from "./components/List";

export default function Home() {
  return (
    <div>
   <div className="flex items-center justify-center mt-20 flex flex-col md:p-10 gap-15" >
     <div className="flex flex-col md:flex-row text-center items-center justify-center text-neutral-100 w-5/6 h-5/6 " >
      <div><img className="w-4xl h-4xl" src="images/Coach-cuate.svg" alt="fitness man" /></div>
      <div className="flex flex-col" >
        <h1 className="text-3xl md:text-5xl font-bold" >
        Monitore resultados para ter uma visão de sua evolução!
      </h1>
      <p>Com nosso app todos os dados para uma melhor monitoração de evolução corporal e da saúde fica disponível para você! Além de poder ter acompanhamento de seu profissional pessoal</p>
      <div className="mt-3 flex flex-col items-center justify-center gap-3 md:flex-row md:gap-7">
        <button className="bg-fitness p-2 shadow-lg shadow-emerald-500/40 rounded-md hover:bg-emerald-500" >Experimentar grátis</button>
        <button style={{backgroundColor: '#191b1aff'}} className=" p-2 shadow-lg shadow-gray-900/40 rounded-md hover:bg-gray-500" >Conhecer mais o projeto</button>
      </div>
      </div>
      
     </div>
      <div className="flex flex-col md:flex-row-reverse md:p-10 text-center items-center justify-center text-neutral-100 w-5/6 h-5/6 " >
      <div><img className="w-4xl h-4xl" src="images/Sport family-bro.svg" alt="fitness man" /></div>
      <div className="flex flex-col" >
        <h1 className="text-3xl md:text-5xl font-bold" >
        Feito para quem busca evolução!
      </h1>
      <p>Com nosso app todos os dados para uma melhor monitoração de evolução corporal e da saúde fica disponível para você! Além de poder ter acompanhamento de seu profissional pessoal</p>
      <div className="mt-3 flex flex-col items-center justify-center gap-3 md:flex-row md:gap-7">
        <button className="bg-fitness p-2 shadow-lg shadow-emerald-500/40 rounded-md hover:bg-emerald-500" >Veja como adquirir o Fitness</button>  
      </div>
      </div>
     </div>
   </div>

   <div className="text-white p-5 bg-gray-900 flex flex-col gap-3 items-center mt-7" >
      <h1 className="text-3xl font-bold" >Um sistema que ajudará você no dia a dia </h1>
      <p>O fitness lhe dará as principais ferramentas para o acompanhamento de suas dietas e progreção física, com funcionalidades eficazes.</p>
      <div className="flex flex-wrap gap-4" >
        <Card
      title={'Acompanhamento documentado'}
      />
      <Card
      title={'Suporte com IA'}
      />
      <Card
      title={'Comunicação em tempo real com seu profissional'}
      />
      <Card 
      title={'Ferramentas eficazes e intuitivas'}
      />
      </div>
     </div>

     <div className="text-white p-5 flex flex-col gap-3 items-center mt-7" >
      <h1 className="text-3xl font-bold" >Resultados mais próximos do que nunca! </h1>
      <p>O fitness lhe dará as principais ferramentas para o acompanhamento de suas dietas e progreção física, com funcionalidades eficazes.</p>
      <div className="flex flex-wrap gap-4" >
      </div>
     </div>
    <div className="flex flex-col items-center justify-center md:flex-row-reverse gap-5 md:gap-50" >
      <img className="w-96"  src="images/Fitness stats-bro.svg" />
       <List />
       
    </div>
     </div>
  );
}
