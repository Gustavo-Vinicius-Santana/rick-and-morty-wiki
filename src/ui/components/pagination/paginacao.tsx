interface PaginacaoProps {
  page: number;
  setPage: (page: number) => void;
  totalPages: number;
  hasNextPage: boolean;
}

export default function Paginacao({ page, setPage, totalPages, hasNextPage }: PaginacaoProps) {
  return (
    <div className="flex justify-center items-center gap-4">
      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className={`px-4 py-2 rounded ${
          page === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"
        }`}
      >
        Anterior
      </button>

      <span className="text-gray-700 font-medium">
        Página {page} de {totalPages}
      </span>

      <button
        disabled={!hasNextPage}
        onClick={() => setPage(page + 1)}
        className={`px-4 py-2 rounded ${
          !hasNextPage ? "bg-gray-300 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"
        }`}
      >
        Próxima
      </button>
    </div>
  );
}