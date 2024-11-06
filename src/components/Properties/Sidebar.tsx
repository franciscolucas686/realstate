export default function Sidebar() {
  return (
    <div className="h-[100%]">
      <div className="p-5 bg-white shadow-lg rounded-lg">
        <div className="mb-5">
          <label htmlFor="code" className="block text-lg font-semibold text-customBrown">Código</label>
          <input type="text" id="code" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
        </div>
        <div className="mb-5">
          <label className="block text-lg font-semibold text-customBrown">Tipo</label>
          <div className="mt-1">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">Venda</span>
            </label>
          </div>
        </div>
        <div className="mb-5">
          <label className="block text-lg font-semibold text-customBrown">Categoria</label>
          <div className="mt-1 flex flex-col">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">Apartamento</span>
            </label>
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">Casa</span>
            </label>
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">Chácara</span>
            </label>
          </div>
        </div>
        <div className="mb-5">
          <label htmlFor="city" className="block text-lg font-semibold text-gray-700">Cidade</label>
          <select id="city" className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
            <option>Selecione...</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-lg font-semibold text-customBrown">Preço</label>
          <input type="range" className="w-full"/>
        </div>
        <div className="mb-4">
          <label className="block text-lg font-semibold text-customBrown">Quartos</label>
          <input type="range" className="w-full"/>
        </div>
        <div className="mb-4">
          <label className="block text-lg font-semibold text-customBrown">Vagas</label>
          <input type="range" className="w-full"/>
        </div>
      </div>
    </div>
  );
}
