//IMPORTANDO A API DE OUTRA PASTA (PASTA)
import apiData from "../api/data";

//TRATANDO DOS DADOS DA API NO HTML
export default async function UsersPage() {
    const api = await apiData();

    return (
        <div className="p-5 flex flex-col items-center justify-center">
        <h1 className="mb-3 text-white font-bold flex items-center justify-center tracking-widest">Lista de Usuários via API<span className="ml-2 underline"><a href="https://randomuser.me/" target="_blank">https://randomuser.me/</a></span></h1>

        {api.results.map((item:any) => (
            <table key={item.cell} className="shadow-2xl border-2 border-b-1 border-cyan-200 overflow-hidden justify-center">
            <thead className="text-white text-center">
              <tr className="bg-cyan-800 cursor-pointer">
                <th className="py-2 text-sm w-32 tracking-widest">Name</th>
                <th className="py-2 text-sm w-32 tracking-widest">Age</th>
                <th className="py-2 text-sm w-32 tracking-widest">Gender</th>
                <th className="py-2 text-sm w-32 tracking-widest">City</th>
              </tr>
            </thead>
            <tbody className="text-cyan-900 text-center">
              <tr className="bg-cyan-600 hover:bg-cyan-200 hover:scale-105 cursor-pointer duration-300 w-full">
                <td className="py-2 text-sm tracking-widest">{item.name.first}</td>
                <td className="py-2 text-sm tracking-widest">{item.dob.age}</td>
                <td className="py-2 text-sm tracking-widest">{item.gender}</td>
                <td className="py-2 text-sm tracking-widest">{item.location.city}</td>
              </tr>
            </tbody>
          </table>

        ))      
        }
        </div>
    );
}